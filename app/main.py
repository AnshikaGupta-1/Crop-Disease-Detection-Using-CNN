from pathlib import Path
from io import BytesIO

import numpy as np
import tensorflow as tf
from PIL import Image
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from huggingface_hub import hf_hub_download

# ---------------------------------------------------
# Paths
# ---------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
MODEL_DIR = BASE_DIR / "model"

MODEL_DIR.mkdir(exist_ok=True)

# ---------------------------------------------------
# FastAPI App
# ---------------------------------------------------

app = FastAPI(title="Crop Disease Detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static assets (CSS, JS, Images)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


@app.get("/")
def home():
    return FileResponse(STATIC_DIR / "index.html")


# ---------------------------------------------------
# Download model from Hugging Face
# ---------------------------------------------------

print("Downloading model from Hugging Face (if needed)...")

model_path = hf_hub_download(
    repo_id="anshikagupta-1/crop-disease-model",
    filename="crop_disease_model_v1.h5",
    local_dir=MODEL_DIR
)

print("Loading TensorFlow model...")

MODEL = tf.keras.models.load_model(model_path)

print("Model loaded successfully!")

# ---------------------------------------------------
# Class Names
# ---------------------------------------------------

CLASS_NAMES = [
    'AppleApple_scab',
    'AppleBlack_rot',
    'AppleCedar_apple_rust',
    'Applehealthy',
    'Blueberryhealthy',
    'Cherry_(including_sour)Powdery_mildew',
    'Cherry_(including_sour)healthy',
    'Corn_(maize)Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)Common_rust',
    'Corn(maize)Northern_Leaf_Blight',
    'Corn_(maize)healthy',
    'GrapeBlack_rot',
    'GrapeEsca_(Black_Measles)',
    'GrapeLeaf_blight_(Isariopsis_Leaf_Spot)',
    'Grapehealthy',
    'OrangeHaunglongbing_(Citrus_greening)',
    'PeachBacterial_spot',
    'Peachhealthy',
    'Pepper,_bell_Bacterial_spot',
    'Pepper,bellhealthy',
    'PotatoEarly_blight',
    'PotatoLate_blight',
    'Potatohealthy',
    'Raspberryhealthy',
    'Soybeanhealthy',
    'SquashPowdery_mildew',
    'StrawberryLeaf_scorch',
    'Strawberryhealthy',
    'TomatoBacterial_spot',
    'TomatoEarly_blight',
    'TomatoLate_blight',
    'TomatoLeaf_Mold',
    'TomatoSeptoria_leaf_spot',
    'TomatoSpider_mites Two-spotted_spider_mite',
    'TomatoTarget_Spot',
    'TomatoTomato_Yellow_Leaf_Curl_Virus',
    'TomatoTomato_mosaic_virus',
    'Tomatohealthy'
]


# ---------------------------------------------------
# Helper Function
# ---------------------------------------------------

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image


# ---------------------------------------------------
# Routes
# ---------------------------------------------------

@app.get("/hello")
async def hello():
    return {"message": "Welcome to Crop Disease Detection API"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image = read_file_as_image(await file.read())

        image = tf.image.resize(image, [256, 256])
        image = np.expand_dims(image, 0)
        image = image / 255.0

        prediction = MODEL.predict(image)

        predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
        confidence = float(np.max(prediction[0]))

        return {
            "class": predicted_class,
            "confidence": confidence
        }

    except Exception as e:
        return {
            "class": "Error",
            "confidence": 0.0,
            "error": str(e)
        }

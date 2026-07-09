# FastAPI for creating the web application.
# File and UploadFile for handling file uploads.
# CORSMiddleware for handling Cross-Origin Resource Sharing (CORS).
# StaticFiles to serve the frontend (index.html/style.css/script.js) from the same app.
# huggingface_hub to download the model at startup instead of relying on a local path.
# uvicorn for running the ASGI server.
# numpy for numerical operations.
# BytesIO and Image from PIL for image processing.
# tensorflow for machine learning model operations.
import os
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
from huggingface_hub import hf_hub_download

app = FastAPI()

# Enable CORS (kept permissive since this is a public demo project)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------
# Model loading
# ---------------------------------------------------------
# The model is NOT stored in this repo (it's ~355MB, far above what
# GitHub is meant to hold). Instead it's hosted publicly on Hugging
# Face Hub and downloaded once when the server starts. hf_hub_download
# caches the file locally, so repeat deploys/restarts on the same
# instance won't re-download unless the cache is cleared.

HF_REPO_ID = "anshikagupta-1/crop-disease-model"
HF_FILENAME = "crop_disease_model_v1.h5"

print("Downloading model from Hugging Face Hub (first run may take a moment)...")
model_path = hf_hub_download(repo_id=HF_REPO_ID, filename=HF_FILENAME)
print(f"Model downloaded to: {model_path}")

MODEL = tf.keras.models.load_model(model_path)
print("Model loaded successfully.")

CLASS_NAMES = [
    'AppleApple_scab', 'AppleBlack_rot', 'AppleCedar_apple_rust', 'Applehealthy',
    'Blueberryhealthy', 'Cherry_(including_sour)Powdery_mildew', 'Cherry_(including_sour)healthy',
    'Corn_(maize)Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)Common_rust',
    'Corn(maize)Northern_Leaf_Blight', 'Corn_(maize)healthy', 'GrapeBlack_rot',
    'GrapeEsca_(Black_Measles)', 'GrapeLeaf_blight_(Isariopsis_Leaf_Spot)', 'Grapehealthy',
    'OrangeHaunglongbing_(Citrus_greening)', 'PeachBacterial_spot', 'Peachhealthy',
    'Pepper,_bell_Bacterial_spot', 'Pepper,bellhealthy', 'PotatoEarly_blight',
    'PotatoLate_blight', 'Potatohealthy', 'Raspberryhealthy', 'Soybeanhealthy',
    'SquashPowdery_mildew', 'StrawberryLeaf_scorch', 'Strawberryhealthy',
    'TomatoBacterial_spot', 'TomatoEarly_blight', 'TomatoLate_blight', 'TomatoLeaf_Mold',
    'TomatoSeptoria_leaf_spot', 'TomatoSpider_mites Two-spotted_spider_mite',
    'TomatoTarget_Spot', 'TomatoTomato_Yellow_Leaf_Curl_Virus', 'TomatoTomato_mosaic_virus',
    'Tomatohealthy',
]


def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)).convert("RGB"))
    return image


@app.get("/hello")
async def hello():
    return "welcome to me"


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        image = read_file_as_image(await file.read())
        image = tf.image.resize(image, [256, 256])  # Match training input size
        img_batch = np.expand_dims(image, 0)  # Add batch dimension
        img_batch = img_batch / 255.0  # Normalize
        prediction = MODEL.predict(img_batch)
        predicted_class = CLASS_NAMES[np.argmax(prediction[0])]
        confidence = np.max(prediction[0])
        print("Raw Predictions:", prediction[0])  # Debugging output
        return {
            "class": predicted_class,
            "confidence": float(confidence),
        }
    except Exception as e:
        print(f"Prediction error: {e}")
        return {
            "class": "Error",
            "confidence": 0.0,
        }


# ---------------------------------------------------------
# Serve the frontend
# ---------------------------------------------------------
# Mounted LAST and at "/" so it doesn't shadow the API routes above
# (FastAPI/Starlette checks routes in the order they were registered,
# so /hello and /predict are matched first; anything else falls
# through to the static files, including "/" itself for index.html).
app.mount("/", StaticFiles(directory="static", html=True), name="static")


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)

function displayPredictionResult(data) {
    const predictedClass = document.getElementById('predictedClass');
    const confidence = document.getElementById('confidence');
    const diagnosis = document.getElementById('diagnosis');
    const treatment = document.getElementById('treatment');
    const advice = document.getElementById('advice');

    predictedClass.textContent = 'Class: ' + data.class;
    confidence.textContent = 'Confidence: ' + data.confidence;

    // Hardcoded diagnosis, treatment, and advice based on the predicted class
    switch (data.class) {
        case 'AppleApple_scab':
    diagnosis.textContent = 'Diagnosis: Apple Apple Scab';
    treatment.textContent = 'Treatment: Apply fungicide spray containing sulfur or copper.';
    advice.textContent = 'Advice: Implement good sanitation practices; remove and destroy fallen leaves.';
    break;
case 'AppleBlack_rot':
    diagnosis.textContent = 'Diagnosis: Apple Black Rot';
    treatment.textContent = 'Treatment: Prune infected branches; apply fungicide spray.';
    advice.textContent = 'Advice: Remove and destroy mummified fruits; ensure proper air circulation.';
    break;
case 'AppleCedar_apple_rust':
    diagnosis.textContent = 'Diagnosis: Apple Cedar Apple Rust';
    treatment.textContent = 'Treatment: Apply fungicides; remove galls.';
    advice.textContent = 'Advice: Plant resistant varieties; practice good garden hygiene.';
    break;
case 'Applehealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Apple Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Maintain proper watering and fertilization; monitor for pests and diseases.';
    break;
case 'Blueberryhealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Blueberry Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Maintain proper soil pH; prune and remove old canes.';
    break;
case 'Cherry_(including_sour)Powdery_mildew':
    diagnosis.textContent = 'Diagnosis: Cherry Powdery Mildew';
    treatment.textContent = 'Treatment: Apply fungicides; prune affected parts.';
    advice.textContent = 'Advice: Maintain good air circulation; avoid overhead irrigation.';
    break;
case 'Cherry_(including_sour)healthy':
    diagnosis.textContent = 'Diagnosis: Healthy Cherry Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Prune to improve airflow; monitor for pests.';
    break;
case 'Corn_(maize)Cercospora_leaf_spot Gray_leaf_spot':
    diagnosis.textContent = 'Diagnosis: Corn Cercospora Leaf Spot / Gray Leaf Spot';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected leaves.';
    advice.textContent = 'Advice: Rotate crops; avoid overhead irrigation.';
    break;
case 'Corn_(maize)Common_rust':
    diagnosis.textContent = 'Diagnosis: Corn Common Rust';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected plants.';
    advice.textContent = 'Advice: Plant resistant varieties; monitor for rust symptoms.';
    break;
case 'Corn(maize)Northern_Leaf_Blight':
    diagnosis.textContent = 'Diagnosis: Corn Northern Leaf Blight';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected leaves.';
    advice.textContent = 'Advice: Rotate crops; practice good weed control.';
    break;
case 'Corn_(maize)healthy':
    diagnosis.textContent = 'Diagnosis: Healthy Corn Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Rotate crops; monitor for pests and diseases.';
    break;
case 'GrapeBlack_rot':
    diagnosis.textContent = 'Diagnosis: Grape Black Rot';
    treatment.textContent = 'Treatment: Apply fungicides; prune infected parts.';
    advice.textContent = 'Advice: Plant resistant varieties; maintain proper vineyard hygiene.';
    break;
case 'GrapeEsca_(Black_Measles)':
    diagnosis.textContent = 'Diagnosis: Grape Esca (Black Measles)';
    treatment.textContent = 'Treatment: Prune infected parts; apply fungicide.';
    advice.textContent = 'Advice: Maintain proper pruning; promote vineyard airflow.';
    break;
case 'GrapeLeaf_blight_(Isariopsis_Leaf_Spot)':
    diagnosis.textContent = 'Diagnosis: Grape Leaf Blight (Isariopsis Leaf Spot)';
    treatment.textContent = 'Treatment: Apply fungicides; prune affected leaves.';
    advice.textContent = 'Advice: Remove and destroy infected leaves; practice good vineyard hygiene.';
    break;
case 'Grapehealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Grape Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Prune to improve airflow; monitor for pests and diseases.';
    break;
case 'OrangeHaunglongbing_(Citrus_greening)':
    diagnosis.textContent = 'Diagnosis: Orange Huanglongbing (Citrus Greening)';
    treatment.textContent = 'Treatment: Apply insecticides; remove infected trees.';
    advice.textContent = 'Advice: Plant resistant varieties; control citrus psyllid populations.';
    break;
case 'PeachBacterial_spot':
    diagnosis.textContent = 'Diagnosis: Peach Bacterial Spot';
    treatment.textContent = 'Treatment: Apply copper-based fungicides; prune affected parts.';
    advice.textContent = 'Advice: Avoid overhead irrigation; promote good air circulation.';
    break;
case 'Peachhealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Peach Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Prune to improve airflow; monitor for pests and diseases.';
    break;
case 'Pepper,_bell_Bacterial_spot':
    diagnosis.textContent = 'Diagnosis: Bell Pepper Bacterial Spot';
    treatment.textContent = 'Treatment: Apply copper-based fungicides; prune affected parts.';
    advice.textContent = 'Advice: Practice crop rotation; avoid overhead irrigation.';
    break;
case 'Pepper,bellhealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Bell Pepper Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Prune to improve airflow; monitor for pests and diseases.';
    break;
case 'PotatoEarly_blight':
    diagnosis.textContent = 'Diagnosis: Potato Early Blight';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected leaves.';
    advice.textContent = 'Advice: Rotate crops; practice good weed control.';
    break;
case 'PotatoLate_blight':
    diagnosis.textContent = 'Diagnosis: Potato Late Blight';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected parts.';
    advice.textContent = 'Advice: Rotate crops; avoid overhead irrigation.';
    break;
case 'Potatohealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Potato Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Rotate crops; monitor for pests and diseases.';
    break;
case 'Raspberryhealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Raspberry Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Prune to improve airflow; monitor for pests and diseases.';
    break;
case 'Soybeanhealthy':
    diagnosis.textContent = 'Diagnosis: Healthy Soybean Plant';
    treatment.textContent = 'Treatment: Regular maintenance and care.';
    advice.textContent = 'Advice: Rotate crops; monitor for pests and diseases.';
    break;
case 'SquashPowdery_mildew':
    diagnosis.textContent = 'Diagnosis: Squash Powdery Mildew';
    treatment.textContent = 'Treatment: Apply fungicides; remove infected leaves.';
    advice.textContent = 'Advice: Promote good airflow; avoid overhead irrigation.';
    break;
    case 'StrawberryLeaf_scorch':
        diagnosis.textContent = 'Diagnosis: Strawberry Leaf Scorch';
        treatment.textContent = 'Treatment: Apply fungicide spray';
        advice.textContent = 'Advice: Maintain proper irrigation and avoid overhead watering';
        break;
    case 'Strawberryhealthy':
        diagnosis.textContent = 'Diagnosis: Healthy Strawberry Plant';
        treatment.textContent = 'Treatment: No specific treatment needed';
        advice.textContent = 'Advice: Monitor for any signs of disease';
        break;
    case 'TomatoBacterial_spot':
        diagnosis.textContent = 'Diagnosis: Tomato Bacterial Spot';
        treatment.textContent = 'Treatment: Remove infected plants and apply copper-based fungicide';
        advice.textContent = 'Advice: Practice good sanitation and crop rotation';
        break;
    case 'TomatoEarly_blight':
        diagnosis.textContent = 'Diagnosis: Tomato Early Blight';
        treatment.textContent = 'Treatment: Apply fungicide and prune affected leaves';
        advice.textContent = 'Advice: Remove plant debris and avoid overhead irrigation';
        break;
    case 'TomatoLate_blight':
        diagnosis.textContent = 'Diagnosis: Tomato Late Blight';
        treatment.textContent = 'Treatment: Apply fungicide spray';
        advice.textContent = 'Advice: Implement crop rotation practices';
        break;
    case 'TomatoLeaf_Mold':
        diagnosis.textContent = 'Diagnosis: Tomato Leaf Mold';
        treatment.textContent = 'Treatment: Remove infected leaves and improve ventilation';
        advice.textContent = 'Advice: Avoid wetting foliage during watering';
        break;
    case 'TomatoSeptoria_leaf_spot':
        diagnosis.textContent = 'Diagnosis: Tomato Septoria Leaf Spot';
        treatment.textContent = 'Treatment: Apply fungicide and remove infected leaves';
        advice.textContent = 'Advice: Ensure good air circulation and avoid overhead watering';
        break;
    case 'TomatoSpider_mites Two-spotted_spider_mite':
        diagnosis.textContent = 'Diagnosis: Tomato Spider Mites (Two-spotted Spider Mite)';
        treatment.textContent = 'Treatment: Apply insecticidal soap or neem oil';
        advice.textContent = 'Advice: Introduce natural predators like ladybugs to control mites';
        break;
    case 'TomatoTarget_Spot':
        diagnosis.textContent = 'Diagnosis: Tomato Target Spot';
        treatment.textContent = 'Treatment: Apply fungicide and remove infected leaves';
        advice.textContent = 'Advice: Practice crop rotation and avoid overhead watering';
        break;
    case 'TomatoTomato_Yellow_Leaf_Curl_Virus':
        diagnosis.textContent = 'Diagnosis: Tomato Yellow Leaf Curl Virus';
        treatment.textContent = 'Treatment: No cure; remove infected plants and control whiteflies';
        advice.textContent = 'Advice: Plant resistant varieties and use reflective mulch';
        break;
    case 'TomatoTomato_mosaic_virus':
        diagnosis.textContent = 'Diagnosis: Tomato Mosaic Virus';
        treatment.textContent = 'Treatment: No cure; remove infected plants and control aphids';
        advice.textContent = 'Advice: Practice strict sanitation and avoid planting near infected crops';
        break;
    case 'Tomatohealthy':
        diagnosis.textContent = 'Diagnosis: Healthy Tomato Plant';
        treatment.textContent = 'Treatment: No specific treatment needed';
        advice.textContent = 'Advice: Maintain proper nutrition and monitor for pests or diseases';
        break;
    default:
        diagnosis.textContent = 'Diagnosis: Not Identified';
        treatment.textContent = 'Treatment: Not Available';
        advice.textContent = 'Advice: No specific advice available';
        break;
    }
}

// Shared by both the file-upload flow and the "Try Sample Images" flow:
// sends a Blob to /predict, shows it in the preview <img>, and renders
// the result via displayPredictionResult().
function sendToPredict(blob, previewSrc) {
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.src = previewSrc;
    uploadedImage.style.display = 'block';

    const formData = new FormData();
    formData.append('file', blob, 'image.jpg');

    // Relative path instead of a hardcoded localhost URL, so this works
    // both locally (served by uvicorn) and once deployed on Render,
    // since the frontend and the API are served from the same origin.
    fetch('/predict', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => displayPredictionResult(data))
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing the image.');
      });
}

function uploadImage() {
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length === 0) {
      alert('Please select an image to upload.');
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      sendToPredict(file, e.target.result);
    };
    reader.readAsDataURL(file);
}

// Runs a prediction on one of the bundled sample images instead of a
// user upload, so recruiters/visitors can try the app without needing
// to find their own plant photo. samplePath should point to a file in
// static/assets/, e.g. 'assets/sample_1.jpg'.
function trySample(samplePath) {
    fetch(samplePath)
      .then(response => response.blob())
      .then(blob => sendToPredict(blob, samplePath))
      .catch(error => {
        console.error('Error loading sample image:', error);
        alert('Could not load that sample image.');
      });
}

// ===============================
// ISL Hand Gesture Recognition
// Class 11 AI Project Prototype
// ===============================

// --------- GLOBALS ----------
let model = null;
let video = document.getElementById("video");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Class order MUST match training
const CLASSES = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  "1","2","3","4","5","6","7","8","9"
];

// Prediction smoothing
let predictionBuffer = [];
const BUFFER_SIZE = 10;

// ----------------------------
// Load TensorFlow.js model
// ----------------------------
async function loadModel() {
  try {
    model = await tf.loadLayersModel("./web_model/model.json");
    console.log("✅ Model loaded successfully");
  } catch (err) {
    console.error("❌ Failed to load model", err);
  }
}
loadModel();

// ----------------------------
// Setup Webcam
// ----------------------------
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("❌ Camera access denied", err);
  });

// ----------------------------
// Setup MediaPipe Hands
// ----------------------------
const hands = new Hands({
  locateFile: file =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

hands.onResults(onResults);

// ----------------------------
// Camera Utils
// ----------------------------
const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});
camera.start();

// ----------------------------
// Smooth Prediction Function
// ----------------------------
function smoothPrediction(index) {
  predictionBuffer.push(index);

  if (predictionBuffer.length > BUFFER_SIZE) {
    predictionBuffer.shift();
  }

  const counts = {};
  predictionBuffer.forEach(i => {
    counts[i] = (counts[i] || 0) + 1;
  });

  return parseInt(
    Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    )
  );
}

// ----------------------------
// Main Callback
// ----------------------------
function onResults(results) {
  // Resize canvas to match video
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!results.multiHandLandmarks || !model) {
    document.getElementById("letter").innerText = "None";
    return;
  }

  const landmarks = results.multiHandLandmarks[0];

  // Draw hand landmarks (optional visual)
  drawLandmarks(landmarks);

  // Convert landmarks → 63-length input
  let input = [];
  landmarks.forEach(p => {
    input.push(p.x, p.y, p.z);
  });

  const tensor = tf.tensor([input]);
  const prediction = model.predict(tensor);
  const idx = prediction.argMax(-1).dataSync()[0];

  // Smooth output
  const stableIdx = smoothPrediction(idx);
  const output = CLASSES[stableIdx];

  document.getElementById("letter").innerText = output;

  // Cleanup tensors
  tf.dispose([tensor, prediction]);
}

// ----------------------------
// Draw Hand Landmarks
// ----------------------------
function drawLandmarks(landmarks) {
  ctx.fillStyle = "red";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  landmarks.forEach(lm => {
    ctx.beginPath();
    ctx.arc(
      lm.x * canvas.width,
      lm.y * canvas.height,
      5,
      0,
      2 * Math.PI
    );
    ctx.fill();
  });
}


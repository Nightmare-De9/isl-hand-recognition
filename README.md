# 🇮🇳 ISL Alphabet Recognition (Prototype)
### **Class 11 Artificial Intelligence Project**

This project is a **prototype web app** that recognizes **Indian Sign Language (ISL) hand gestures for letters A–Z** using **MediaPipe + TensorFlow.js**, and displays the detected letter in real time through the browser.

It runs completely **client-side** (static website), so it works on GitHub Pages without any backend.

---

## 📌 Project Status
This is the **prototype / MVP version** created as part of the **Class 11 AI project** curriculum.  
The team collaboratively worked on **recording ISL videos, wireframing the app, and developing the ML + browser integration**.

**Team Members:** VISHWAJITH, DRISHTI, SAUMYA, MANYA

---

## ✨ Features

### **✔ ISL → Letter Detection**
- Uses webcam to capture hand gestures  
- MediaPipe Hands extracts 21 landmark points  
- TensorFlow.js model predicts letters A–Z  
- Fully in-browser; no backend required

### **✔ Lightweight & Fast**
- Loads instantly  
- Works on GitHub Pages  
- Runs on laptop/phone browser

### **✔ Privacy-Friendly**
- No camera data is uploaded  
- Everything happens locally

---

## 🧠 Tech Stack

| Component | Technology Used |
|----------|------------------|
| Hand Tracking | MediaPipe Hands (Google) |
| ML Model | TensorFlow / Keras |
| Browser ML | TensorFlow.js |
| Dataset | Self-recorded ISL alphabet videos |
| Frontend | HTML, CSS, JavaScript |
| Deployment | GitHub Pages |

---

## 📂 Folder Structure

```

/web_model/        → tfjs model files (model.json + shards)
/script.js         → MediaPipe + TF.js browser inference
/style.css         → UI styling
/index.html        → main webpage

```

---

## 🎯 Future Improvements  
- Add full word recognition (not just letters)  
- Add Text → ISL video/animation converter  
- Improve dataset (multiple samples per letter)  
- Add smoothing so the prediction doesn’t flicker  
- UI/UX redesign based on wireframes  
- Add instructions & visual guide for signs

---

## 📜 License  
Open for educational use. Please give credit if you use or modify this project.

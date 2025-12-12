<body>
  <div class="container">
    <h1>ISL Alphabet Recognition</h1>
    <h2>Class 11 AI Project Prototype</h2>

    <div class="section">
      <p>This is a simple prototype web app that recognizes the Indian Sign Language (ISL) alphabet letters (A-Z) using hand gestures. The app uses the webcam to detect hand landmarks and predicts the letter in real-time. Everything runs in the browser, making it fast and easy to use without any backend.</p>
    </div>

    <div class="section">
      <h2>Features</h2>
      <ul>
        <li>Detects hand gestures for letters A–Z in real-time</li>
        <li>Runs fully in-browser with no backend</li>
        <li>Lightweight and works on laptops and mobile browsers</li>
        <li>Privacy-friendly: no camera data is uploaded</li>
      </ul>
    </div>

    <div class="section">
      <h2>How to Use</h2>
      <ul>
        <li>Open <code>index.html</code> in Chrome or Edge</li>
        <li>Allow webcam access</li>
        <li>Show one ISL letter at a time in front of the camera</li>
        <li>The predicted letter will appear on the screen</li>
      </ul>
    </div>

    <div class="section">
      <h2>Team</h2>
      <p class="team">Vishwajith, Drishti, Saumya, Manya</p>
    </div>

    <div class="section">
      <h2>Technologies Used</h2>
      <div class="tech-logos">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/HTML5_logo_and_wordmark.svg" alt="HTML5" title="HTML5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" title="CSS3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" title="JavaScript">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/TensorflowLogo.png" alt="TensorFlow.js" title="TensorFlow.js">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/MediaPipe_logo.png" alt="MediaPipe" title="MediaPipe">
      </div>
    </div>

    <div class="section">
      <h2>Folder Structure</h2>
      <ul>
        <li><code>index.html</code> - main webpage</li>
        <li><code>style.css</code> - styling</li>
        <li><code>script.js</code> - MediaPipe & TensorFlow.js integration</li>
        <li><code>web_model/</code> - TensorFlow.js model files</li>
        <li><code>videos/</code> (optional for future expansion)</li>
      </ul>
    </div>

    <div class="section">
      <h2>Deployment</h2>
      <p>This app can be deployed on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> since it is fully static.</p>
    </div>

    <div class="section">
      <h2>Future Improvements</h2>
      <ul>
        <li>Recognize full words, not just letters</li>
        <li>Smoother predictions over multiple frames</li>
        <li>Enhanced UI/UX</li>
        <li>More samples per letter for better accuracy</li>
      </ul>
    </div>

  </div>
</body>

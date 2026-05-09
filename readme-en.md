<h1 align="center"> 🎈 HAPPY HOLIDAYS 🎈</h1>
<h4 align="center"><a href="https://github.com/SantyCubillos/HappyHolidays/blob/main/readme.md">📖 Lee esto en Español</a></h4>

<h2>📝 Project Description</h2>
<p align="justify">
<strong>Happy Holidays</strong> is an interactive and fully dynamic web application designed to create and share personalized greetings. With no need to create a file for each recipient, the platform automatically generates unique content through URL parameters. Users can customize messages with the celebrant's name and celebration type, then share them directly on WhatsApp or Telegram.
</p>

<h2>✨ Key Features</h2>
<ul>
  <li align="justify">🎈 <strong>Interactive Balloons: </strong>Attractive visual design with animated floating balloons on the screen.</li>
  <li align="justify">🎯 <strong>Touch Experience: </strong>Compatible with click (desktop) and tap (mobile) to pop balloons and reveal messages.</li>
  <li align="justify">🔊 <strong>Audio Effects: </strong>Realistic balloon pop sound for enhanced immersion.</li>
  <li align="justify">📱 <strong>Fully Responsive: </strong>Works perfectly on mobile devices, tablets, and desktop computers.</li>
  <li align="justify">🔗 <strong>Dynamic URLs: </strong>Generates unique personalized links for each greeting.</li>
  <li align="justify">📲 <strong>Social Integration: </strong>Direct sharing on WhatsApp and Telegram.</li>
  <li align="justify">🌐 <strong>Backend-Free: </strong>Fully client-side application (frontend only), easy to deploy.</li>
</ul>

<h2>🎮 User Experience</h2>
<ul>
  <li align="justify"><strong>1. Visualization: </strong>Two animated floating balloons are presented: one with the event name and another with the celebrant's name.</li>
  <li align="justify"><strong>2. Interaction: </strong>Users can click or touch the balloons to pop them and reveal the surprise message.</li>
  <li align="justify"><strong>3. Reveal: </strong>When balloons pop, a sound effect plays and a personalized message with the celebrant's name is displayed.</li>
  <li align="justify"><strong>4. Customization: </strong>Users can create their own message by accessing the customization form.</li>
</ul>

<h2>💻 Technologies Used</h2>
<ul>
  <li align="justify"><strong>HTML5: </strong>Semantic structure of the application, cards, and interactive elements.</li>
  <li align="justify"><strong>CSS3: </strong>Floating animations, visual effects, responsive design, and flexible layout with Flexbox.</li>
  <li align="justify"><strong>JavaScript (Vanilla): </strong>
    <ul>
      <li align="justify">URLSearchParams to capture and process dynamic URL parameters.</li>
      <li align="justify">DOM manipulation to dynamically update content.</li>
      <li align="justify">Event Listeners for user interaction handling.</li>
      <li align="justify">Web Audio API for sound effect playback.</li>
      <li align="justify">Canvas API to create particle effects in explosions.</li>
    </ul>
  </li>
  <li align="justify"><strong>FontAwesome: </strong>SVG icons for social media buttons.</li>
</ul>

<h2>📦 Available Celebrations</h2>
<ul>
  <li>🎂 Birthday</li>
  <li>👩 Mother's Day</li>
  <li>👨 Father's Day</li>
  <li>👨‍🏫 Teacher's Day</li>
  <li>🎄 Christmas</li>
  <li>🎉 New Year 2027</li>
</ul>

<h2>🚀 How to Use</h2>
<h3>Option 1: View an Existing Message</h3>
<ol>
  <li align="justify">Access the application at: <a href="https://santycubillos.github.io/HappyHolidays/">🎈 HAPPY HOLIDAYS 🎈</a></li>
  <li align="justify">Watch the animated balloons floating on the screen.</li>
  <li align="justify">Click or tap the balloons to pop them and reveal the message.</li>
</ol>

<h3>Option 2: Create a Personalized Message</h3>
<ol>
  <li align="justify"><strong>Interact with the screen: </strong>Click or tap the balloons to pop them.</li>
  <li align="justify"><strong>Access the creator: </strong>Click the <strong>"Create and Share Yours! 🚀"</strong> button in the message section.</li>
  <li align="justify"><strong>Customize: </strong>
    <ul>
      <li>Enter the celebrant's name (letters, dots, and spaces only).</li>
      <li>Select the celebration type from the dropdown.</li>
    </ul>
  </li>
  <li align="justify"><strong>Generate your link: </strong>Click <strong>"Create and Share 🚀"</strong> to generate the personalized URL.</li>
  <li align="justify"><strong>Share: </strong>Send the link via WhatsApp or Telegram using the integrated buttons.</li>
</ol>

<h2>📁 Project Structure</h2>
<pre>
HappyHolidays/
├── index.html              # Main application file
├── readme.md              # Spanish documentation
├── readme-en.md           # English documentation
├── css/
│   ├── styles.css        # Main styles
│   └── all.min.css       # FontAwesome CSS
├── js/
│   └── main.js           # Main application logic
├── audio/
│   └── balloon-burst.mp3 # Pop sound effect
├── img/
│   └── balloon.svg       # Project icon
└── webfonts/             # FontAwesome fonts
</pre>

<h2>🌐 Supported Browsers</h2>
<ul>
  <li align="justify"><strong>Chrome/Edge: </strong>Version 90+</li>
  <li align="justify"><strong>Firefox: </strong>Version 88+</li>
  <li align="justify"><strong>Safari: </strong>Version 14+</li>
  <li align="justify"><strong>Opera: </strong>Version 76+</li>
  <li align="justify"><strong>Mobile Browsers: </strong>Chrome Mobile, Safari Mobile, Firefox Mobile</li>
</ul>

<h2>🛠️ Local Installation</h2>
<ol>
  <li align="justify"><strong>Clone the repository: </strong>
    <pre><code>git clone https://github.com/SantyCubillos/HappyHolidays.git</code></pre>
  </li>
  <li align="justify"><strong>Navigate to the folder: </strong>
    <pre><code>cd HappyHolidays</code></pre>
  </li>
  <li align="justify"><strong>Open the index.html file: </strong>
    <ul>
      <li>Option A: Double-click <code>index.html</code></li>
      <li>Option B: Use a local server (Python: <code>python -m http.server</code> or Node: <code>npx http-server</code>)</li>
    </ul>
  </li>
</ol>

<h2>📋 Form Validation</h2>
<ul>
  <li align="justify"><strong>Celebrant Name: </strong>Only accepts uppercase and lowercase letters, spaces, and periods. Minimum 2 characters.</li>
  <li align="justify"><strong>Event Type: </strong>Must select an option from the celebrations dropdown.</li>
  <li align="justify"><strong>Error Messages: </strong>Clear validation messages are shown if fields are incomplete.</li>
</ul>

<h2>🔗 URL Parameters</h2>
<p align="justify">The application uses URL parameters to customize content. Example:</p>
<pre align="center"><code>https://santycubillos.github.io/HappyHolidays/?name=John&event=BIRTHDAY</code></pre>
<ul>
  <li><strong>name: </strong>Celebrant's name (required)</li>
  <li><strong>event: </strong>Celebration type (required)</li>
</ul>

<h2>📱 Responsive Design</h2>
<ul>
  <li align="justify"><strong>Desktop (1024px+): </strong>Full layout with large, well-spaced balloons.</li>
  <li align="justify"><strong>Tablet (768px - 1023px): </strong>Medium adaptation preserving the experience.</li>
  <li align="justify"><strong>Mobile (320px - 767px): </strong>Optimization for small screens with compact balloons.</li>
</ul>

<h2>💡 Use Cases</h2>
<ul>
  <li align="justify">🎂 Send birthday surprises to friends and family.</li>
  <li align="justify">👨‍👩‍👧 Create special messages for holidays (Christmas, New Year).</li>
  <li align="justify">🎓 Congratulate teachers on their special day.</li>
  <li align="justify">🎉 Create interactive experiences for corporate events.</li>
</ul>

<h2>🐛 Troubleshooting</h2>
<ul>
  <li align="justify"><strong>Balloons won't pop: </strong>Ensure your browser allows JavaScript interactions and there are no conflicts with browser extensions.</li>
  <li align="justify"><strong>No sound: </strong>Verify that device volume is enabled and the browser allows audio.</li>
  <li align="justify"><strong>Form won't open: </strong>Try refreshing the page (F5) or clearing your browser cache.</li>
  <li align="justify"><strong>Mobile issues: </strong>Ensure you're using a modern browser with support for CSS3 and ES6+ JavaScript.</li>
</ul>

<h2>♿ Accessibility</h2>
<p align="justify">Happy Holidays is designed with accessibility in mind to ensure everyone can enjoy the experience:</p>
<ul>
  <li align="justify"><strong>ARIA Attributes: </strong>Semantic tags and ARIA attributes (aria-label, aria-hidden, role) are used to enhance screen reader compatibility.</li>
  <li align="justify"><strong>Keyboard Navigation: </strong>All buttons and interactive elements are accessible using Tab and Enter keys.</li>
  <li align="justify"><strong>Color Contrast: </strong>Colors used maintain adequate contrast ratios according to WCAG AA guidelines.</li>
  <li align="justify"><strong>Alternative Text: </strong>Images and visual elements include alternative descriptions.</li>
  <li align="justify"><strong>Font Sizes: </strong>Scalable units (em, rem) are used that adapt to user preferences.</li>
  <li align="justify"><strong>Reduced Animations: </strong>The preference for reduced motion (prefers-reduced-motion) is respected.</li>
  <li align="justify"><strong>Accessible Form: </strong>The form includes properly associated labels and clear error messages.</li>
  <li align="justify"><strong>Optional Sound: </strong>While sound is part of the experience, the application works correctly without it.</li>
  <li align="justify"><strong>Compatibility: </strong>Works with screen readers such as NVDA, JAWS, and VoiceOver.</li>
</ul>

<h2>📄 License</h2>
<p align="justify">© 2026 Santiago Cubillos Sarmiento. All rights reserved. This is a proprietary and confidential project. Reproduction, modification, distribution, or use of this code is not permitted without explicit written authorization from the author.</p>

<h2>👨‍💻 Author</h2>
<ul>
  <li align="justify"><a href="https://github.com/SantyCubillos"><strong>Santiago Cubillos Sarmiento</strong></a> - Lead Developer</li>
</ul>

<h2>🙋 Contributions</h2>
<p align="justify">Contributions are welcome. If you have suggestions or find bugs, please open an <strong>Issue</strong> or <strong>Pull Request</strong> on the repository.</p>

<h2>📞 Contact</h2>
<p align="justify">For questions or comments about the project, feel free to contact me through.</p>

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=WhatsApp&logoColor=white)](https://api.whatsapp.com/send?phone=573134965153)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:santy.cubillos92@gmail.com)

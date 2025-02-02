window.onload = function() {
    // Load the header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  
    // Load the Terms section
    fetch('terms.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('terms').innerHTML = data;
      });
  
    // Load the Privacy section
    fetch('privacy.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('privacy').innerHTML = data;
      });
  
    // Load the About section
    fetch('about.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('about').innerHTML = data;
      });
  
    // Load the Gallery section
    fetch('gallery.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('gallery').innerHTML = data;
      });
  
    // Load the footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-content').innerHTML = data;
      });
  };
  
// main.js
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
  
        // Skip anchors and external links
        if (target.startsWith('#') || this.target === '_blank') return;
  
        e.preventDefault();
  
        // Add fade-out class to body
        document.body.classList.add('fade-out');
  
        // Wait for animation, then go to the new page
        setTimeout(() => {
          window.location.href = target;
        }, 300); // time in ms must match your CSS transition
      });
    });
  });
  


  

// header.js - Navigation script for Voltaic Innovation Platform
// Path: /Users/guntar/Library/CloudStorage/OneDrive-Personal/0B Projects/88 Toolbox Inovasi/PresentasiWeb/header.js

/**
 * Initialize navigation header
 */
function initHeader() {
  const header = document.createElement('nav');
  header.className = 'header-nav';

  // Create logo link
  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.className = 'logo';
  logo.innerHTML = 'Voltaic Innovation';

  // Create navigation links
  const navLinks = document.createElement('div');
  navLinks.className = 'nav-links';
  navLinks.innerHTML = `
    <a href="index.html" class="nav-home">Home</a>
  `;

  // Add elements to header
  header.appendChild(logo);
  header.appendChild(navLinks);

  // Insert header at top of body
  document.body.insertBefore(header, document.body.firstChild);

  // Add active class to current page
  const currentPage = window.location.pathname.split('/').pop();
  const links = header.querySelectorAll('.nav-links a');
  links.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeader);

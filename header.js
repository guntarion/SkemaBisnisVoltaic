// header.js - Navigation script for Voltaic Innovation Platform
// Path: /Users/guntar/Library/CloudStorage/OneDrive-Personal/0B Projects/88 Toolbox Inovasi/PresentasiWeb/header.js

/**
 * Initialize navigation header
 */
function initHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  // Create logo container
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `
    <img src="voltaic.png" alt="Voltaic Innovation Logo" />
    <span>Voltaic Innovation Platform</span>
  `;

  // Create navigation menu
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
    </ul>
  `;

  // Add elements to header
  header.appendChild(logo);
  header.appendChild(nav);

  // Insert header at top of body
  document.body.insertBefore(header, document.body.firstChild);

  // Add active class to current page
  const currentPage = window.location.pathname.split('/').pop();
  const links = nav.querySelectorAll('a');
  links.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeader);

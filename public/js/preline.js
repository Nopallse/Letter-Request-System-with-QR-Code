import 'preline/dist/preline.js';

// Initialize Preline on page load
document.addEventListener('DOMContentLoaded', () => {
  HSStaticMethods.autoInit();
});

// Initialize Preline when new content is loaded via AJAX
document.addEventListener('load', () => {
  HSStaticMethods.autoInit();
});
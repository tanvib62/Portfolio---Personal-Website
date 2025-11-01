// ContactForm.js
console.log('ContactForm script loaded');
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return; // safe-guard if script is included on pages without the form

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    // Do validation, send via fetch/ajax, or show UI feedback
    console.log('submit', { name, email });
  });
});
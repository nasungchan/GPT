const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    status.textContent = 'Message sent!';
});

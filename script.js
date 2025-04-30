document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.about-me, .quote, .projects, .contact, .experiences, .skills');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.3
  });

  elements.forEach(el => observer.observe(el));
});

// Simulando envio do formulário
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Obrigada por entrar em contato 💬');
  form.reset();
});



// Dropdown Projects Functionality
document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', function() {
    const dropdownItem = this.closest('.dropdown-item');
    const isActive = dropdownItem.classList.contains('active');
    
    // Fechar todos os dropdowns abertos
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Abrir o dropdown clicado, se não estava ativo
    if (!isActive) {
      dropdownItem.classList.add('active');
    }
  });
});

// Animação simples ao rolar
const elements = document.querySelectorAll('.dropdown-item');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const distance = window.innerHeight - 50;
    
    if (position < distance) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
});

// Inicializar elementos com opacidade 0
elements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

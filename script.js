// Aguardar o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
  
  // Dropdown Projects Functionality
  const toggleButtons = document.querySelectorAll('.dropdown-toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
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

  // Inicializar elementos com opacidade 0
  const elements = document.querySelectorAll('.dropdown-item');
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Animação simples ao rolar
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
  
  // Trigger inicial para elementos já visíveis
  window.dispatchEvent(new Event('scroll'));
  
});

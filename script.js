'use strict';

/* ========================================
   THEME MANAGER
   ======================================== */
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.storageKey = 'portfolio-theme';
    this.init();
  }

  init() {
    this.loadTheme();
    this.attachEventListener();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    this.applyTheme(theme);
  }

  applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === 'light') {
      html.classList.add('light-mode');
      this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      this.themeToggle.setAttribute('title', 'Mudar para modo escuro');
    } else {
      html.classList.remove('light-mode');
      this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      this.themeToggle.setAttribute('title', 'Mudar para modo claro');
    }
    
    localStorage.setItem(this.storageKey, theme);
  }

  attachEventListener() {
    this.themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isLightMode = html.classList.contains('light-mode');
      this.applyTheme(isLightMode ? 'dark' : 'light');
    });
  }
}

/* ========================================
   DROPDOWN MANAGER
   ======================================== */
class DropdownManager {
  constructor() {
    this.dropdownItems = document.querySelectorAll('.dropdown-item');
    this.toggles = document.querySelectorAll('.dropdown-toggle');
    this.openItems = new Set();
  }

  init() {
    this.attachEventListeners();
    this.initializeScrollAnimations();
  }

  attachEventListeners() {
    this.toggles.forEach((toggle, index) => {
      // Click event
      toggle.addEventListener('click', (e) => this.handleToggleClick(e, index));
      
      // Keyboard navigation
      toggle.addEventListener('keydown', (e) => this.handleKeydown(e, index));
    });
  }

  handleToggleClick(event, index) {
    event.preventDefault();
    const item = this.dropdownItems[index];
    const isOpen = item.classList.contains('active');

    // Fechar todos os outros
    this.closeAllDropdowns();

    // Alternar o atual
    if (!isOpen) {
      this.openDropdown(item, index);
    } else {
      this.closeDropdown(item, index);
    }
  }

  handleKeydown(event, index) {
    const key = event.key;

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.handleToggleClick(event, index);
    }

    if (key === 'ArrowDown') {
      event.preventDefault();
      this.focusNextToggle(index);
    }

    if (key === 'ArrowUp') {
      event.preventDefault();
      this.focusPreviousToggle(index);
    }

    if (key === 'Home') {
      event.preventDefault();
      this.toggles[0].focus();
    }

    if (key === 'End') {
      event.preventDefault();
      this.toggles[this.toggles.length - 1].focus();
    }
  }

  openDropdown(item, index) {
    item.classList.add('active');
    const toggle = this.toggles[index];
    const content = item.querySelector('.dropdown-content');

    toggle.setAttribute('aria-expanded', 'true');
    if (content) {
      content.removeAttribute('hidden');
    }
    this.openItems.add(index);
  }

  closeDropdown(item, index) {
    item.classList.remove('active');
    const toggle = this.toggles[index];
    const content = item.querySelector('.dropdown-content');

    toggle.setAttribute('aria-expanded', 'false');
    if (content) {
      content.setAttribute('hidden', '');
    }
    this.openItems.delete(index);
  }

  closeAllDropdowns() {
    this.dropdownItems.forEach((item, index) => {
      if (item.classList.contains('active')) {
        this.closeDropdown(item, index);
      }
    });
  }

  focusNextToggle(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.toggles.length;
    this.toggles[nextIndex].focus();
  }

  focusPreviousToggle(currentIndex) {
    const prevIndex = currentIndex === 0 ? this.toggles.length - 1 : currentIndex - 1;
    this.toggles[prevIndex].focus();
  }

  initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    this.dropdownItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });
  }
}

class Application {
  static instance = null;

  static getInstance() {
    if (!Application.instance) {
      Application.instance = new Application();
    }
    return Application.instance;
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.bootstrap());
    } else {
      this.bootstrap();
    }
  }

  bootstrap() {
    try {
      const themeManager = new ThemeManager();
      const dropdownManager = new DropdownManager();
      dropdownManager.init();
      console.log('✓ Portfólio carregado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar o portfólio:', error);
    }
  }
}

// Inicializar aplicação
const app = Application.getInstance();
app.init();

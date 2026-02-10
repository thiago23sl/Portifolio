const elements = document.querySelectorAll("[data-pt]");
let currentLang = "pt";

function setLang(lang) {
  currentLang = lang;
  elements.forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

function toggle(title) {
  const content = title.nextElementSibling;
  content.classList.toggle("open");
}

document.getElementById("year").textContent = new Date().getFullYear();
setLang("pt");

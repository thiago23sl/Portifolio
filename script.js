function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  }
  
  const texts = {
    pt: {
      subtitle: "Estudante de Análise e Desenvolvimento de Sistemas",
      aboutTitle: "Sobre mim",
      aboutText:
        "Sou estudante de tecnologia com foco em desenvolvimento de software, suporte técnico e redes.",
      techTitle: "Tecnologias",
      projectsTitle: "Projetos",
    },
    en: {
      subtitle: "Systems Analysis and Development Student",
      aboutTitle: "About me",
      aboutText:
        "I am a technology student focused on software development, IT support and networks.",
      techTitle: "Technologies",
      projectsTitle: "Projects",
    },
  };
  
  function setLang(lang) {
    document.getElementById("subtitle").innerText = texts[lang].subtitle;
    document.getElementById("about-title").innerText = texts[lang].aboutTitle;
    document.getElementById("about-text").innerText = texts[lang].aboutText;
    document.getElementById("tech-title").innerText = texts[lang].techTitle;
    document.getElementById("projects-title").innerText =
      texts[lang].projectsTitle;
  }
  
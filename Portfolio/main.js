const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container

// skills container (NEWLY ADDED ONLY THIS PART)
ScrollReveal().reveal("#skills .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal("#skills .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".timeline__item", {
  ...scrollRevealOption,
  interval: 300,
});
// skills section (newly added)
ScrollReveal().reveal(".skills-section h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".skills-text h3", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".skills-text p", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".skill", {
  ...scrollRevealOption,
  interval: 200,
});

ScrollReveal().reveal(".skills-image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
});

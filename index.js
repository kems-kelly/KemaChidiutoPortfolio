const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

const navLinks = mobileMenu.querySelectorAll("a[href^='#']");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    mobileMenu.classList.remove("active");
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const toggleBtn = document.getElementById("toggleProjects");
const allProjects = document.querySelectorAll(".project-card");
let visibleCount = 2;
const increment = 4;

allProjects.forEach((project, index) => {
  if (index < visibleCount) {
    project.classList.add("show");
  } else {
    project.classList.add("hidden");
  }
});

toggleBtn.addEventListener("click", () => {
  const hiddenProjects = document.querySelectorAll(".project-card.hidden");

  if (hiddenProjects.length > 0) {
    for (let i = 0; i < increment && i < hiddenProjects.length; i++) {
      hiddenProjects[i].classList.remove("hidden");
      hiddenProjects[i].classList.add("show");
    }

    if (document.querySelectorAll(".project-card.hidden").length === 0) {
      toggleBtn.textContent = "Show Less";
    }
  } else {
    allProjects.forEach((project, index) => {
      if (index < visibleCount) {
        project.classList.add("show");
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
        project.classList.remove("show");
      }
    });
    toggleBtn.textContent = "View More";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".projectcontainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let visibleCount = 1;
  const increment = 2;
  let expanded = false;

  projects.forEach((p, i) => {
    if (i < visibleCount) p.classList.add("visible");
    else p.classList.remove("visible");
  });

  loadMoreBtn.addEventListener("click", function () {
    if (!expanded) {
      projects.forEach((p) => p.classList.add("visible"));
      expanded = true;
      loadMoreBtn.textContent = "Show Less Case Study";
    } else {
      projects.forEach((p, i) => {
        if (i < visibleCount) p.classList.add("visible");
        else p.classList.remove("visible");
      });
      expanded = false;
      loadMoreBtn.textContent = "Show More Case Study";
    }
  });
});

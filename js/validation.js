document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments essentiels
  const backToTopBtn = document.getElementById("backToTop");
  const navbar = document.querySelector(".custom-navbar");
  const banner = document.querySelector(".banner");
  
  // Sécurité : stoppe si un élément est manquant
  if (!backToTopBtn || !navbar || !banner) {
    console.warn("Élément(s) manquant(s)", { backToTopBtn, navbar, banner });
    return;
  }

  // Calcule la hauteur réelle de la bannière
  const bannerHeight = banner.getBoundingClientRect().height;

  // Gestion du scroll
  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY > bannerHeight;

    // Affiche ou cache le bouton "retour en haut"
    backToTopBtn.classList.toggle("show", scrolled);

    // Cache la navbar quand on a scrollé en dessous de la bannière
    navbar.classList.toggle("hide-navbar", scrolled);
  });

  // Scroll fluide vers le haut au clic sur le bouton
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

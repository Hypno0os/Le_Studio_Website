document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");
  const navbar = document.querySelector(".custom-navbar");
  const banner = document.querySelector(".banner");
  if (!backToTopBtn || !navbar || !banner) {
    console.warn("Élément(s) manquant(s)", { backToTopBtn, navbar, banner });
    return;
  }
  // On récupère la hauteur réelle de la bannière après le chargement complet
  const bannerHeight = banner.getBoundingClientRect().height;
  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY > bannerHeight;
    // Affichage du bouton retour haut
    backToTopBtn.classList.toggle("show", scrolled);
    // Cacher navbar si on a scrollé
    navbar.classList.toggle("hide-navbar", scrolled);
  });
  // Scroll smooth retour en haut
  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

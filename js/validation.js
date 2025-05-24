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

 
 
  // Empêche le copier, coller et couper dans tous les champs <input> et <textarea> du formulaire #contactForm
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(el => {
    el.onpaste = el.oncopy = el.oncut = (e) => e.preventDefault();
});

// Tableau de configuration pour chaque champ à valider
const inputs = [
    {
        element: document.getElementById("nom"), // Champ NOM
        regex: /^[A-Za-z\-]+$/,                 // Autorise seulement lettres (A-Z, a-z) et tiret (-)
        errorId: "error-nom"                    // ID de l'élément <small> pour afficher l'erreur
    },
    {
        element: document.getElementById("prenom"), // Champ PRÉNOM
        regex: /^[A-Za-z\-]+$/,                    // Même règle que pour le nom
        errorId: "error-prenom"
    },
    {
        element: document.getElementById("tel"),    // Champ TÉLÉPHONE
        regex: /^[0-9]{10}$/,                      // Exactement 10 chiffres
        errorId: "error-tel"
    },
    {
        element: document.getElementById("email"),  // Champ EMAIL
        regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, // Email simple, pas de caractères spéciaux interdits
        errorId: "error-email"
    }
];

// Fonction de validation d'un champ
function validateInput(input) {
    const isValid = input.regex.test(input.element.value);   // Teste la valeur avec la regex
    const errorEl = document.getElementById(input.errorId);  // Sélectionne l'élément <small> d'erreur associé

    // Change la couleur de la bordure selon la validité
    input.element.style.borderColor = isValid ? "green" : "red";
    // Affiche ou masque le message d'erreur
    errorEl.classList.toggle("d-none", isValid);
    // Pour la validation HTML5 (empêche l'envoi si ce n'est pas valide)
    input.element.setCustomValidity(isValid ? "" : errorEl.textContent);

    return isValid;
}

// Ajoute l'événement 'input' sur chaque champ pour valider en temps réel
inputs.forEach(input => {
    input.element.addEventListener("input", () => {
        validateInput(input);
    });
});

// À la soumission du formulaire, on bloque l'envoi si un champ est invalide
document.getElementById("contactForm").addEventListener("submit", function (e) {
    let formValid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) formValid = false; // Si au moins un champ est invalide, on bloque
    });
    if (!formValid) e.preventDefault(); // Empêche la soumission du formulaire
});



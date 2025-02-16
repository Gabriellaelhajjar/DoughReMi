//alert("Bienvenue sur mon site!");

// script.js

// Function to switch languages
function switchLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguage();
  }
  
  // Function to update the page content based on the selected language
  function updateLanguage() {
    const lang = localStorage.getItem('language') || 'en';
    const translations = {
      en: {
        title: "My Order(s)",
        orderNumber: "Order number:",
        orderName: "Order name (Name under the order):",
        orderStatus: "Order status: In preparation, or Ready for pick up",
        estimatedWait: "Estimated wait time:"
      },
      fr: {
        title: "Ma commande(s)",
        orderNumber: "Numéro de commande:",
        orderName: "Nom de la commande (Nom sous la commande):",
        orderStatus: "Statut de la commande : En préparation, ou Prêt pour le retrait",
        estimatedWait: "Temps d'attente estimé:"
      }
    };
  
    document.getElementById('page-title').textContent = translations[lang].title;
    document.getElementById('order-number-label').textContent = translations[lang].orderNumber;
    document.getElementById('order-name-label').textContent = translations[lang].orderName;
    document.getElementById('order-status-label').textContent = translations[lang].orderStatus;
    document.getElementById('estimated-wait-label').textContent = translations[lang].estimatedWait;
  }
  
  // Event Listeners for language buttons
  document.querySelector('.btn-en').addEventListener('click', () => switchLanguage('en'));
  document.querySelector('.btn-fr').addEventListener('click', () => switchLanguage('fr'));
  
  // Initialize page with correct language
  document.addEventListener('DOMContentLoaded', updateLanguage);
  
  
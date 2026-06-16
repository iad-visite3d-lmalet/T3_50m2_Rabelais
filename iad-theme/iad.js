/* iad-theme/iad.js
   Ajoute les deux bandeaux IAD sans modifier la logique Marzipano.
*/

(function () {
  "use strict";

  const config = Object.assign({
    agentName: "Laurent Malet",
    role: "Votre conseiller immobilier",
    phone: "0665131037",
    email: "l.malet@iadfrance.fr",
    website: "https://www.iadfrance.fr/conseiller-immobilier/l.malet",
    websiteLabel: "iadfrance.fr/conseiller-immobilier/l.malet"
  }, window.IAD_THEME || {});

  function phoneDisplay(phone) {
    const digits = String(phone).replace(/\D/g, "");
    return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  }

  function createTopbar() {
    const topbar = document.createElement("div");
    topbar.className = "iad-topbar";
    topbar.innerHTML = `
      <div class="iad-brand">
        <div class="iad-brand-main">
          <div class="iad-brand-logo">iad</div>
          <div class="iad-brand-name">iad immobilier</div>
        </div>
        <div class="iad-brand-tagline">Ça fait du bien à l'immobilier</div>
      </div>

      <div class="iad-separator"></div>

      <div class="iad-agent">
        <strong>${config.agentName}</strong>
        <span>${config.role}</span>
      </div>

      <div class="iad-separator"></div>

      <a class="iad-contact-link" href="tel:${config.phone}">
        ☎ ${phoneDisplay(config.phone)}
        <small>Appelez-moi</small>
      </a>

      <a class="iad-contact-link" href="mailto:${config.email}">
        ✉ ${config.email}
        <small>Écrivez-moi</small>
      </a>

      <a class="iad-contact-link" href="${config.website}" target="_blank" rel="noopener">
        🌐 ${config.websiteLabel}
        <small>Visitez mon site iad</small>
      </a>

      <a class="iad-button" href="mailto:${config.email}">
        ✉ Me contacter
      </a>
    `;
    document.body.appendChild(topbar);
  }

  function createBottombar() {
    const bottombar = document.createElement("div");
    bottombar.className = "iad-bottombar";
    bottombar.innerHTML = `
      <a class="iad-bottom-link" href="tel:${config.phone}">
        ☎ ${phoneDisplay(config.phone)}
        <span>Appelez-moi</span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link" href="mailto:${config.email}">
        ✉ ${config.email}
        <span>Écrivez-moi</span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link" href="${config.website}" target="_blank" rel="noopener">
        🌐 ${config.websiteLabel}
        <span>Visitez mon site iad</span>
      </a>

      <div class="iad-bottom-spacer"></div>

      <div class="iad-bottom-logo">iad</div>

      <div class="iad-bottom-project">
        <strong>Un projet immobilier ?</strong>
        Parlons-en ensemble
      </div>

      <a class="iad-button-outline" href="mailto:${config.email}">
        Me contacter
      </a>
    `;
    document.body.appendChild(bottombar);
  }

  function init() {
    document.body.classList.add("iad-theme");

    if (!document.querySelector(".iad-topbar")) {
      createTopbar();
    }

    if (!document.querySelector(".iad-bottombar")) {
      createBottombar();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

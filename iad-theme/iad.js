/* iad-theme/iad.js — V12 */

(function () {
  "use strict";

  var config = Object.assign({
    agentName: "Laurent Malet",
    role: "Votre conseiller immobilier",
    phone: "0665131037",
    phoneDisplay: "06 65 13 10 37",
    email: "l.malet@iadfrance.fr",
    website: "https://www.iadfrance.fr/conseiller-immobilier/l.malet",
    websiteDisplay: "www.iadfrance.fr/conseiller-immobilier/l.malet"
  }, window.IAD_THEME || {});

  var icons = {
    phone: '<span class="iad-svg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.7 0 1.3.6 1.3 1.3v3.5c0 .7-.6 1.3-1.3 1.3C10.4 21.6 2.4 13.6 2.4 3.3 2.4 2.6 3 2 3.7 2h3.5c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2l-2.2 2.2Z" fill="currentColor"/></svg></span>',
    mail: '<span class="iad-svg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1Zm9 8 8-6H4l8 6Zm0 2.2L4 9.2V17h16V9.2l-8 6Z" fill="currentColor"/></svg></span>',
    globe: '<span class="iad-svg" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15.6 15.6 0 0 0-1.4-3.1A8.1 8.1 0 0 1 18.9 8ZM12 4.1c.7 1 1.3 2.3 1.7 3.9h-3.4c.4-1.6 1-2.9 1.7-3.9ZM4.3 14a8.5 8.5 0 0 1 0-4h3.4a17 17 0 0 0 0 4H4.3Zm.8 2h3c.4 1.2.8 2.3 1.4 3.1A8.1 8.1 0 0 1 5.1 16Zm3-8h-3a8.1 8.1 0 0 1 4.4-3.1A15.6 15.6 0 0 0 8.1 8ZM12 19.9c-.7-1-1.3-2.3-1.7-3.9h3.4c-.4 1.6-1 2.9-1.7 3.9ZM14.1 14H9.9a14.7 14.7 0 0 1 0-4h4.2a14.7 14.7 0 0 1 0 4Zm.4 5.1c.6-.9 1-1.9 1.4-3.1h3a8.1 8.1 0 0 1-4.4 3.1ZM16.3 14a17 17 0 0 0 0-4h3.4a8.5 8.5 0 0 1 0 4h-3.4Z" fill="currentColor"/></svg></span>'
  };

  function injectTheme() {
    if (document.body.classList.contains("iad-themed")) return;
    document.body.classList.add("iad-themed");

    var topbar = document.createElement("header");
    topbar.id = "iadTopbar";
    topbar.innerHTML = `
      <div class="iad-brand">
        <img class="iad-logo-img" src="iad-theme/logo-iad-bleu.png" alt="iad immobilier">
      </div>

      <div class="iad-agent">
        <strong>${config.agentName}</strong>
        <span>${config.role}</span>
      </div>

      <div class="iad-top-spacer"></div>

      <a class="iad-phone-top" href="tel:${config.phone}">${icons.phone} ${config.phoneDisplay}</a>
      <a class="iad-button" href="mailto:${config.email}">${icons.mail} Me contacter</a>
    `;

    var bottombar = document.createElement("footer");
    bottombar.id = "iadBottombar";
    bottombar.innerHTML = `
      <a class="iad-bottom-link" href="tel:${config.phone}">
        <span class="iad-bottom-icon">${icons.phone}</span>
        <span><strong>${config.phoneDisplay}</strong><span>Appeler</span></span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link" href="mailto:${config.email}">
        <span class="iad-bottom-icon">${icons.mail}</span>
        <span><strong>${config.email}</strong><span>Email</span></span>
      </a>

      <div class="iad-bottom-separator"></div>

      <a class="iad-bottom-link iad-bottom-site" href="${config.website}" target="_blank" rel="noopener">
        <span class="iad-bottom-icon">${icons.globe}</span>
        <span><strong>${config.websiteDisplay}</strong><span>Site IAD</span></span>
      </a>

      <div class="iad-bottom-spacer"></div>

      <img class="iad-bottom-logo-img" src="iad-theme/logo-iad-blanc.png" alt="iad immobilier">

      <div class="iad-bottom-project">
        <strong>Un projet immobilier ?</strong>
        <span>Parlons-en ensemble</span>
      </div>

      <a class="iad-bottom-button" href="mailto:${config.email}">Me contacter</a>
    `;

    document.body.insertBefore(topbar, document.body.firstChild);
    document.body.appendChild(bottombar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectTheme);
  } else {
    injectTheme();
  }
})();

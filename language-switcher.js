// Relais Tunis language switcher
// Single-source multilingual setup: the layout lives in index.html and all translations live in script.js.
// The FR / EN / IT selector changes the language in place and stores the preference.
(function () {
  const validLanguages = ['fr', 'en', 'it'];

  function getLangFromUrl() {
    const value = new URLSearchParams(window.location.search).get('lang');
    return validLanguages.includes(value) ? value : null;
  }

  function setUrlLanguage(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  }

  function switchLanguage(lang) {
    if (!validLanguages.includes(lang)) return;
    localStorage.setItem('relaisLang', lang);
    setUrlLanguage(lang);

    if (typeof applyTranslations === 'function') applyTranslations();
    if (typeof setDefaultLinks === 'function') setDefaultLinks();
  }

  function bootLanguage() {
    const saved = localStorage.getItem('relaisLang');
    const fromUrl = getLangFromUrl();
    const initial = fromUrl || (validLanguages.includes(saved) ? saved : 'fr');
    switchLanguage(initial);
  }

  function bindSelector() {
    document.querySelectorAll('[data-lang-link]').forEach((link) => {
      const lang = link.dataset.langLink;
      link.setAttribute('href', `index.html?lang=${lang}`);
      link.addEventListener('click', (event) => {
        event.preventDefault();
        switchLanguage(lang);
      });
    });
  }

  function keepSelectorVisible() {
    const style = document.createElement('style');
    style.textContent = `
      .language-selector {
        display: flex !important;
      }
      @media (max-width: 900px) {
        .site-header {
          flex-wrap: wrap;
        }
        .header-actions {
          margin-left: auto;
          gap: 8px;
        }
        .language-selector {
          display: flex !important;
          order: -1;
        }
        .language-selector a {
          padding: 7px 8px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  keepSelectorVisible();
  bindSelector();
  bootLanguage();
})();

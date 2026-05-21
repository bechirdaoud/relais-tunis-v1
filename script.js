const WHATSAPP_NUMBER = '62' + '81234586863';

function applyHeroBackground() {
  const style = document.createElement('style');
  style.textContent = `
    .hero {
      background-image:
        linear-gradient(90deg, rgba(247, 241, 232, 0.92) 0%, rgba(247, 241, 232, 0.84) 34%, rgba(247, 241, 232, 0.58) 58%, rgba(247, 241, 232, 0.24) 100%),
        url('assets/hero-courtyard.jpg');
      background-size: cover;
      background-position: center right;
      min-height: 860px;
    }
    .glow { display: none; }
    .hero-grid { align-items: center; }
    .hero-copy { padding: 1rem 0; }
    @media (max-width: 900px) {
      .hero {
        min-height: auto;
        background-position: 66% center;
        background-image:
          linear-gradient(180deg, rgba(247, 241, 232, 0.92) 0%, rgba(247, 241, 232, 0.82) 45%, rgba(247, 241, 232, 0.62) 100%),
          url('assets/hero-courtyard.jpg');
      }
    }
  `;
  document.head.appendChild(style);
}

function messageFromForm() {
  const get = (id) => document.getElementById(id)?.value?.trim() || '';
  const type = get('type') || 'Relais Maison';
  const urgency = get('urgency') || 'Cette semaine';
  const area = get('area') || 'à préciser';
  const message = get('message') || 'à préciser';
  const name = get('name') || 'à préciser';
  const phone = get('phone') || 'à préciser';
  return `Bonjour Relais Tunis, j’aimerais vous parler d’une demande.\n\nNom: ${name}\nWhatsApp: ${phone}\nType: ${type}\nUrgence: ${urgency}\nQuartier: ${area}\nBesoin: ${message}`;
}

function whatsappUrl(customMessage) {
  const baseMessage = customMessage || 'Bonjour Relais Tunis, j’aimerais vous parler d’une demande.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseMessage)}`;
}

function setDefaultLinks() {
  ['headerWhatsapp', 'heroWhatsapp', 'maisonWhatsapp'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappUrl();
  });
}

applyHeroBackground();
setDefaultLinks();

document.getElementById('requestForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.open(whatsappUrl(messageFromForm()), '_blank', 'noopener,noreferrer');
});

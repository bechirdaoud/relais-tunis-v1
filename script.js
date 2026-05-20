const WHATSAPP_NUMBER = '216XXXXXXXX';

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

setDefaultLinks();

document.getElementById('requestForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  window.open(whatsappUrl(messageFromForm()), '_blank', 'noopener,noreferrer');
});

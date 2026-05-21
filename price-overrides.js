// Relais Tunis EUR pricing overrides
// Based on the previous TND grid converted to EUR and rounded to the nearest €5.
(function () {
  const eurPricing = {
    fr: {
      missionPrice: 'à partir de 55 €',
      price1: 'à partir de 25 €',
      price2: 'à partir de 55 €',
      price3: 'à partir de 75 € / mois',
      price4: 'à partir de 135 € / mois',
      price5: 'à partir de 25 €',
      price6: 'à partir de 20 €',
      footerNote: 'Les tarifs sont indicatifs, exprimés en euros, et peuvent varier selon la mission, l’urgence, le lieu et les frais externes.',
      pricingText: 'Les prix sont exprimés en euros et peuvent varier selon la demande, le lieu, l’urgence, le temps nécessaire et les frais externes éventuels. Aucune mission n’est lancée sans accord clair.'
    },
    en: {
      missionPrice: 'from €55',
      price1: 'from €25',
      price2: 'from €55',
      price3: 'from €75 / month',
      price4: 'from €135 / month',
      price5: 'from €25',
      price6: 'from €20',
      footerNote: 'Prices are indicative, shown in euros, and may vary depending on the mission, urgency, location and external costs.',
      pricingText: 'Prices are shown in euros and may vary depending on the request, location, urgency, time required and any external costs. No mission starts without clear approval.'
    },
    it: {
      missionPrice: 'da 55 €',
      price1: 'da 25 €',
      price2: 'da 55 €',
      price3: 'da 75 € / mese',
      price4: 'da 135 € / mese',
      price5: 'da 25 €',
      price6: 'da 20 €',
      footerNote: 'Le tariffe sono indicative, espresse in euro, e possono variare secondo la missione, l’urgenza, il luogo e i costi esterni.',
      pricingText: 'I prezzi sono espressi in euro e possono variare in base alla richiesta, al luogo, all’urgenza, al tempo necessario e agli eventuali costi esterni. Nessuna missione inizia senza un accordo chiaro.'
    }
  };

  function applyEurPricing() {
    if (typeof T === 'undefined') return;
    Object.keys(eurPricing).forEach((lang) => {
      if (!T[lang]) return;
      Object.assign(T[lang], eurPricing[lang]);
    });
  }

  applyEurPricing();
})();

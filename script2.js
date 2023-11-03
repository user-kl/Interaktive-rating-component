// Sjekker om URL-en inneholder riktig side
if (window.location.pathname.includes('index2.html') || window.location.href.includes('index2.html')) {
  // Henter karakteren fra URL-en
  var rating = new URLSearchParams(window.location.search).get('rating');
  // Finn elementet hvor du vil vise hele setningen
  var ratingDisplayElement = document.getElementById('ratingDisplay');
  // Sjekker om rating faktisk ble sendt med i URL-en
  if (rating) {
    // Oppdaterer hele innholdet i <p> med den valgte karakteren ved å bruke template literals
    ratingDisplayElement.textContent = `You selected ${rating} out of 5`;
  } else {
    // Hvis ingen rating ble sendt med, kan du sette en standard tekst eller håndtere det på annen måte
    ratingDisplayElement.textContent = 'You selected no rating';
  }
}

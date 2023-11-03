// Deklarerer en variabel for å holde den valgte verdien
var valgtVerdi;

// Henter alle sirkler og legger til en klikk-event listener på hver av dem
var sirkler = document.getElementsByClassName('sirkel');
for (var i = 0; i < sirkler.length; i++) {
  sirkler[i].addEventListener('click', function() {
    // Fjerner 'valgt' klassen fra alle sirkler
    for (var j = 0; j < sirkler.length; j++) {
      sirkler[j].classList.remove('valgt');
    }
    // Legger til 'valgt' klassen til den klikkede sirkelen og lagrer verdien
    this.classList.add('valgt');
    valgtVerdi = this.textContent; // Lagrer teksten fra den valgte sirkelen
  });
}

// Legger til en klikk-event listener på 'Submit'-knappen
var submitKnapp = document.querySelector('.knapp');
submitKnapp.addEventListener('click', function() {
  // Sjekker om en verdi er valgt
  if (valgtVerdi) {
    window.location.href = 'index2.html?rating=' + valgtVerdi;
  } else {
    // Viser en advarsel hvis ingen verdi er valgt
    alert('Vennligst velg en karakter før du sender inn.');
  }
});

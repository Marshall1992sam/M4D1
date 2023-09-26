//1
function controllaNumero(numero1, numero2) {
  return numero1 === 50 || numero2 === 50 || numero1 + numero2 === 50;
}
console.log(controllaNumero(50, 25)); // true
console.log(controllaNumero(25, 25)); // true
console.log(controllaNumero(10, 20)); // false

//2
function rimuoviCarattere(stringa, posizione) {
  if (posizione < 0 || posizione >= stringa.length) {
    console.error("Posizione non valida.");
    return stringa;
  }

  return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
}

const stringaOriginale = "Hello, World!";
const posizioneDaRimuovere = 5;
const stringaModificata = rimuoviCarattere(
  stringaOriginale,
  posizioneDaRimuovere
);
console.log(stringaModificata);

//3
function controllaNumeriCompresi(num1, num2) {
  const intervallo1 = (num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60);
  const intervallo2 =
    (num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100);
  return intervallo1 || intervallo2;
}

console.log(controllaNumeriCompresi(45, 55)); // true (entrambi sono nell'intervallo 40-60)
console.log(controllaNumeriCompresi(30, 65)); // true (uno è nell'intervallo 40-60, l'altro nell'intervallo 70-100)
console.log(controllaNumeriCompresi(25, 35)); // false (entrambi sono al di fuori degli intervalli)
console.log(controllaNumeriCompresi(75, 110)); // false (entrambi sono al di fuori degli intervalli)

//4
function controllaNomeCittà(nomeCittà) {
  const nomeCittàMinuscolo = nomeCittà.toLowerCase(); // Converte il nome della città in minuscolo
  if (
    nomeCittàMinuscolo.startsWith("los") ||
    nomeCittàMinuscolo.startsWith("new")
  ) {
    return nomeCittà;
  } else {
    return false;
  }
}

console.log(controllaNomeCittà("Los Angeles")); // "Los Angeles"
console.log(controllaNomeCittà("New York")); // "New York"
console.log(controllaNomeCittà("San Francisco")); // false

//5
function sommaArray(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
}

const arrayNumeri = [1, 2, 3, 4, 5];
const risultato = sommaArray(arrayNumeri);
console.log(risultato); // Output: 15

//6
function controllaNumeriArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1 || array[i] === 3) {
      return false; // L'array contiene 1 o 3, quindi restituisce false
    }
  }
  return true; // L'array non contiene 1 o 3, quindi restituisce true
}
console.log(controllaNumeriArray([2, 4, 5])); // true (non contiene 1 o 3)
console.log(controllaNumeriArray([1, 2, 4])); // false (contiene 1)
console.log(controllaNumeriArray([2, 3, 5])); // false (contiene 3)
console.log(controllaNumeriArray([])); // true (array vuoto)

//7
function tipoAngolo(gradi) {
  if (gradi < 90) {
    return "acuto";
  } else if (gradi === 90) {
    return "retto";
  } else if (gradi > 90 && gradi < 180) {
    return "ottuso";
  } else if (gradi === 180) {
    return "piatto";
  } else {
    return "Non valido";
  }
}

console.log(tipoAngolo(45)); // "acuto"
console.log(tipoAngolo(90)); // "retto"
console.log(tipoAngolo(120)); // "ottuso"
console.log(tipoAngolo(180)); // "piatto"
console.log(tipoAngolo(200)); // "Non valido"

//8
function creaAcronimo(frase) {
  const parole = frase.split(" ");
  return parole
    .filter((parola) => parola !== ":" && parola !== "")
    .map((parola) => parola[0].toUpperCase())
    .join("");
}

const fraseFIAT = "FIAT: fabbrica italiana automobili torino";
const acronimoFIAT = creaAcronimo(fraseFIAT);
console.log(acronimoFIAT); // Output: "FIAT"

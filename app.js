do {
	var answer = prompt('Elige la opcion que deseas realizar \n 1. Encriptar \n 2. Desencriptar'); // Elegir opcion
	if (answer != "") {
		if (answer == "1") {
			caesarCipher();
		}
		else if (answer == "2") {
			caesarDecipher();
		}
		else {
			alert('Ingrese una opción válida');
		}
	}
} while (answer == "" || (answer != "1" && answer != "2"));

// Funcion encriptar
function caesarCipher() {
	do {
		var word = prompt('Ingresa una palabra');
		var asciiNumber = [];
		var convertWord = [];
		var finalWord = [];
		if (/^[a-zA-Z]*$/.test(word)) { // Expresion regular que solo permite a-z y A-Z
			for (var i = 0; i < word.length; i++) { // Crea arreglo para convertir indice por indice
				asciiNumber[i] = word[i].charCodeAt();  // Se guarda numero Ascii de cada letra en un arreglo.
				convertWord[i] = ((asciiNumber[i] - 65 + 33) % 26 + 65); // Se realiza el calculo de la formula y se guarda en un nuevo arreglo
				finalWord.push(String.fromCharCode(convertWord[i])); // El resultado de cada letra se va agregando a una variable mediante push()
				// finalWord.push(String.fromCharCode(((word[i].charCodeAt() - 65 + 33) % 26 + 65))); 
				// Lo mismo de las primeras 3 lineas pero resumido en una.
			}
		}
		else {
			alert('Ingresa un texto Válido');
		}
	}  while (/^[a-zA-Z]*$/.test(word) === false);
	return alert("Cifrado de " + word + " es: " + finalWord.join(""));
} 

// Funcion desencriptar 
function caesarDecipher() {
	do {
		var word = prompt('Ingresa una palabra');
		var asciiNumber = [];
		var convertWord = [];
		var finalWord = [];
		if (/^[a-zA-Z]*$/.test(word)) {
			for (var i = 0; i < word.length; i++) { // Crea arreglo para convertir indice por indice
				asciiNumber[i] = word[i].charCodeAt();  // Se guarda numero Ascii de cada letra en un arreglo.
				convertWord[i] = ((asciiNumber[i] - 65 - 7 + 52) % 26 + 65); // Se realiza el calculo de la formula y se guarda en un nuevo arreglo
				finalWord.push(String.fromCharCode(convertWord[i])); // El resultado de cada letra se va agregando a una variable mediante push()
				// finalWord.push(String.fromCharCode(((word[i].charCodeAt() - 65 + 33) % 26 + 65))); 
				// Lo mismo de las primeras 3 lineas pero resumido en una expresion
			}
		}
		else {
			alert('Ingresa un texto Válido');
				}
	}  while (/^[a-zA-Z]*$/.test(word) === false);
	return alert("Descifrado de " + word + " es: " + finalWord.join(""));
}

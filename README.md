## CIFRADO CESAR

### 1. Diagrama de Flujo

![Diagrama de Flujo para Cifrado César]
(https://i.imgur.com/6BN4lGt.jpg)

2. Pseudocódigo

+ Inicio
+ Entrada de datos. Se pregunta al usuario mediante un prompt() que acción desea realizar.
+ Condicional (Decisión). La respuesta del punto anterior genera 3 caminos:
  - Si el usuario digita un valor fuera del rango y condiciones establecidas en el if, retorna un alert() que le avisa que es una opción inválida y le muestra nuevamente la ventana para escribir la opción.
  - Si digita 1 en la casilla, aparecerá una ventana de prompt() donde se le solicitará la palabra a CODIFICAR
  - Si digita 2 en la casilla, aparecerá una ventana de prompt() donde se le solicitará la palabra a DECODIFICAR.

+Proceso
  - 1. Codificar 
  ```javascript variable (word) donde se almacena palabra;
 arreglo asciiNumber, finalWord;
 if (Expresion regular que solo permite a-z y A-Z) {
     ciclo for (desde indice 0 hasta el ultimo caracter) {
     convertir a codigo ASCII y almacenar en asciiNumber;
     aplicar formula cifrado cesar ((asciiNumber[i] - 65 + 33) % 26 + 65);
     }
  }
  ```
 - 2. Decodificar 
  ```javascript variable (word) donde se almacena palabra;
 arreglo asciiNumber, finalWord;
 if (Expresion regular que solo permite a-z y A-Z) {
     ciclo for (desde indice 0 hasta el ultimo caracter) {
     convertir a codigo ASCII y almacenar en asciiNumber;
     aplicar formula cifrado cesar ((asciiNumber[i] - 65 -7 +52) % 26 + 65);
     }
  }
  ```
+ El programa devuelve mediante un alert el resultado. 
+ Fin

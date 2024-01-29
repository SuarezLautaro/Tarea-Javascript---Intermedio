
/*Creador de Nombres de Bandas Aleatorios:

● Instrucciones: Escribe una función que genere nombres de bandas aleatorios
y únicos cada vez que se llama. Puedes combinar palabras inusuales,
colores extravagantes y animales exóticos para hacerlos sonar realmente
interesantes. */

//Inicializo las variables contenedoras de arrays.
let palabrasInusuales = ['Vichar', 'Bahorrina', 'Acecinar', 'Ataraxia', 'Melifluo', 'Sempiterno', 'Bonhomía'];
let coloresExtravagantes = ['Lila', 'Azul Turquesa', 'Ambar', 'Glauco', 'Sarcoline', 'Incardine', 'Falun'];
let animalesExoticos = ['Jaguar', 'Pecarí', 'Tapir', 'Hurón', 'Erizo', 'Capibara'];

//Inicializo una función con el fin de generar dicha banda aleatoria dando uso de los array's previos.
function generarBandaAleatoria(){
  // Llama a un elemento del array palabrasInusuales para indicarle que 
  let palabraAleatoria = palabrasInusuales[Math.floor(Math.random() * palabrasInusuales.length)];
  let colorAleatorio = coloresExtravagantes[Math.floor(Math.random() * coloresExtravagantes.length)];
  let animalAleatorio = animalesExoticos[Math.floor(Math.random() * animalesExoticos.length)];

  // Hago uso de la combinación de los elementos obtenidos aleatoriamente de cada array en la variable banda.
  let banda = palabraAleatoria + ' '+ colorAleatorio + ' de '+ animalAleatorio;

  //Devuelvo la banda generada aleatoriamente
  return banda;
}

//Llamo a la función para generar aleatoriamente una banda y guardarla en  la variable bandaAleatoria;
let bandaAleatoria = generarBandaAleatoria();
console.log(bandaAleatoria);
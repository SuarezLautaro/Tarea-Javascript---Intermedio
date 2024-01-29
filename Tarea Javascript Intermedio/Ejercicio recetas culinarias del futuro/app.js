/*Creador de Recetas Culinarias del Futuro:
● Instrucciones: Escribe una función que genere recetas culinarias futuristas
combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
que la comida del futuro sea emocionante y deliciosa
*/

function crearReceta() {
  // Listas de ingredientes inusuales y técnicas de cocina avanzadas
  var ingredienteUno = ["corazón de alienigena","cristal solar","algas bioluminiscentes", "hongos espaciales", "gusano radioactivo", "polvo de luna", "ojo de cerdo mutante", "agua de nube"];
  var ingredienteDos = ["criptonita","hígado de oso vegano","nucleo solar", "brasas lunares", "efigie humana", "humanidad"];
  var tecnicasAvanzadas = ["hervir con lava","fritar con agua de coco","cocción telepática","cocción molecular", "desconstrucción", "cocción bendita", "cocción maldita", "pacto oscuro", "teletransportación culinaria"];

  // Selecciono aleatoriamente un ingrediente para guardar en la variable.
  var primerIngrediente = ingredienteUno.splice(Math.floor(Math.random() * ingredienteUno.length), 1)[0];
  // Selecciono aleatoriamente otro ingrediente para guardar en la variable.
  var segundoIngrediente = ingredienteDos.splice(Math.floor(Math.random() * ingredienteDos.length), 1)[0];

  //  Añado un título a la variable de la receta
  var recetaFuturista = "Receta del Futuro:\n\n";
  // Ordeno la lista de ingredientes a mostrar
  recetaFuturista += "Ingredientes:\n" + "- "+primerIngrediente+"\n"+"- "+segundoIngrediente+"\n";

  // Selecciono una técnica culinaria aleatoria.
  var tecnicaCulinariaAleatoria = tecnicasAvanzadas.splice(Math.floor(Math.random() * tecnicasAvanzadas.length), 1)[0];

  // Le agrego a la variable la tecnica generada aleatoriamente
  recetaFuturista += "\nTécnica Culinaria: " + tecnicaCulinariaAleatoria;
  
  // Retorno la receta completa
  return recetaFuturista;
}

// Llamo a la función para guardar lo generado en la variable recetaFuturista
var recetaFuturista = crearReceta();
// Muestro en consola la receta generada aleatoriamente y almacenada dentro de la variable.
console.log(recetaFuturista);
/*
Conversor de Emociones a Emoji:
● Instrucciones: Crea una función que tome una cadena de texto que exprese
emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
correspondiente. ¡Añade una dosis de humor a tus emociones
*/

/*------------------NO TOMAR EN CUENTA ESTO---------------------
let emociones = ['feliz', 'triste', 'sorprendido', 'confundido', 'enfado', 'miedo', 'seguridad'];
--------------------------------------------------------------*/

//Funcion para convertir emociones en emoji's
function convertirEmoji(emociones){

    switch (emociones){  
      case 'feliz':
        return "😄";
        break;
      case 'triste':
        return "😔";
        break;
      case 'confundido':
        return "😕";
        break;
      case 'sorprendido':
        return "😮";
        break;
      case 'enfadado':
        return "😠";
        break;
      case 'miedo':
        return "😨";
        break;
      case 'seguro':
        return "😎";
        break;
      default:
        return "No es una emoción registrada en el switch. Prueba: feliz; triste; confundido; sorprendido; enfadado; miedo; seguro";
    }
}

var emocion = 'seguro'; //Cambiar por lo que se quiera probar
var emoji = convertirEmoji(emocion); //Llamo a la función dandole por parametro la variable a la que se asigna la emoción a buscar
console.log("La emocion elegida es '"+emocion+"': "+emoji); //Muestro la emoción elegida y su respectivo emoji

/* --------NO TOMAR EN CUENTA ESTO-------
for(i=0; i < 7; i++){
    if(emocion === emociones[i]){
        var emoji = convertirEmoji(emocion);
        console.log("La emocion elegida es "+emocion+" y su emoji es "+emoji);
    }
}
*/
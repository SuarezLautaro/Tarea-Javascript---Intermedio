/*Generador de Planetas Fantásticos:
● Instrucciones: Escribe una función que genere nombres y características
únicas para planetas imaginarios. Combina elementos como colores,
elementos químicos y fenómenos cósmicos para crear mundos asombrosos
*/

function generarPlaneta(){
  
    //Establezco arrays para darle nombres y carácteristicas aleatorias a los planetas generados
    
    //Parte 1: Mitad inicial del nombre del planeta
    let nombreUno = ['Trun', 'Kla', 'Siny', 'Cugh', 'Myso', 'volu', 'Frei', 'Godri', 'Fata', 'Kulp', 'Zeth'];
    
    //Parte 2 : Mitad final del nombre del planeta
    let nombreDos = ['dleh', 'yije', 'holum', 'plez', 'gorl', 'hyxz', 'scu-33', 'rfa-8', 'zeh', 'fuhz'];
    
    //Parte 3 : Color
    let caracteristicaUno = ['Violeta cobalto', 'Naranja coral', 'Amarillo neón', 'Amarillo chartreuse', 'Ámbar', 'Cian', 'Magenta', 'Lavanda'];
    
    //Parte 4 : Elemento Químico
    let caracteristicaDos = ['Prometio(Pm)', 'Francio(Fr)', 'Helio-3(He-3)', 'Telurio(Te)', 'Escandio(Sc)', 'Astato(At)'];
  
    //Parte 5 : Fenómenos cósmicos
    let caracteristicaTres = ['Muestra señales de desastre cósmico por colisión de asteroides', 'Muestra señales de vida con tecnología avanzada', 'Muestra señales de días y noches de eclipses por luna de sangre', 'Muestras señales de auroras en todas sus regiones habitables', 'Muestra señales de estar rodeado de quásares', 'Muestra señales de peligro debido a los agujeros negros cercanos'];
  
    
    // Funcion para tomar un elemento de forma aleatoria de un array
    function obtenerElementoRandom(elemento) {
      return elemento[Math.floor(Math.random() * elemento.length)];
    }
    
    // Logro obtener un elemento aleatorio del array inicial pero en diferentes partes para unirlas al final.
    let parteUno = obtenerElementoRandom(nombreUno);
    let parteDos = obtenerElementoRandom(nombreDos);
    let parteTres = obtenerElementoRandom(caracteristicaUno);
    let parteCuatro = obtenerElementoRandom(caracteristicaDos);
    let parteCinco = obtenerElementoRandom(caracteristicaTres);
    
    //Unifico los datos elegidos aleatoriamente de cada array en una cadena de texto dentro de una variable
    let planetaAleatorio = "Planeta generado: " + parteUno + parteDos +"\n\n";  //  Añado un título a la variable del planeta generado
  
    planetaAleatorio += "Caracteristicas:\n- Color: " + parteTres + "\n- Elemento químico abundante: " + parteCuatro + "\n- Fénomeno cósmico: " + parteCinco; 

        
    //Retorno la variable contenedora de todos los datos elegidos aleatoriamente de los arrays
    return planetaAleatorio;
  }
  
  //Llamo a la función dentro de una variable para generar un planeta aleatorio
  let planeta = generarPlaneta();
  //Muestro por consola el planeta aleatorio
  console.log(planeta);
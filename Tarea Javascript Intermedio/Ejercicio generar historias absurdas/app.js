/*Generador de Historias Absurdas:
● Instrucciones: Desarrolla una función que genere historias absurdas
combinando elementos inesperados, como pingüinos que hablan francés,
robots enamorados de plantas y astronautas perdidos en el espacio con una
mascota alienígena.*/

function generarHistoriaAbsurda(){
  
    //Establezco el array de cada parte de la historia a generar.
    
    //Parte 1
    let historiaInicio = ['Erase una vez un aventurero perdido en ', 'Una niña se encontraba cerca de ', 'Una diosa admiraba a su fiel seguidor que estaba por ', 'Los politicos de una ciudad se estaban volviendo locos porque de un día para el otro estaban en ', 'Los caracoles estaban planeando dominar el mundo, iniciando por crear bases por '];
    
    //Parte 2
    let historiaMitad = ['la selva que muy peligrosa parecía con todos esos ', 'la casa de su abuela que rico pan vendía, en la que había muchos ', 'la montaña de gelatina más grande del mundo hecha en Japón que contiene ', 'los tuneles de la vieja casa de la vecina Ruperta, en la que habitaban '];
    
    //Parte 3
    let historiaCasiFinal = ['Jaguares con', 'Pecaríes en', 'Tapires con', 'Hurones en', 'Erizos con', 'Capibaras en'];
    
    //Parte 4
    let historiaFinal = [' su pelo teñido de rosa pastel', ' camisas hawaianas', ' marcas de grafitti naranjas y azules', ' ropa interior femenina amarilla', ' hamacas bajo la sombra y con música de la sensación del momento, el buen Alberto Barreda', 'problemas por el alcohol y las drogas'];
  
    
    // funcion para tomar un elemento random
    function obtenerElementoRandom(elemento) {
      return elemento[Math.floor(Math.random() * elemento.length)];
    }
    
    // Logro obtener un elemento aleatorio del array inicial pero en diferentes partes para unirlas al final.
    let parteUno = obtenerElementoRandom(historiaInicio);
    let parteDos = obtenerElementoRandom(historiaMitad);
    let parteTres = obtenerElementoRandom(historiaCasiFinal);
    let parteCuatro = obtenerElementoRandom(historiaFinal);
    
    //Consigo unir todas las partes de la historia en una variable
    let historia = parteUno + parteDos + parteTres + parteCuatro;
    
    //retorno la historia completa.
    return historia;
  }
  
  //genero la historia absurda aleatoria
  let historiaAbsurda = generarHistoriaAbsurda();
  //muestro la historia absurda generada
  console.log(historiaAbsurda);

  
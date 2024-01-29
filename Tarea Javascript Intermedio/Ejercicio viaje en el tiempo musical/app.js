/*Simulador de Viaje en el Tiempo Musical:
● Instrucciones: Escribe una función que, dado un año, devuelva una
recomendación de canciones populares de esa época. Puedes mezclar
diferentes géneros y hacer recomendaciones basadas en eventos históricos
de ese año
*/


//Inicializo una función para recomendar una canción dependiendo del año.
function recomendarCancion(anio){
  
  //Inicializo una variable la cual va a ser un objeto contenedor de varios elementos manipulados por años.
  let recomendacionPorAnio = {
  1950: ["Elvis Presley - Hound Dog", "Chuck Berry - Johnny B. Goode"],
  1951: ["Nat King Cole - Unforgettable", "The Weavers - On Top of Old Smoky"],
  1952: ["Patti Page - How Much Is That Doggie in the Window", "Hank Williams - Jambalaya (On the Bayou)"],
  1953: ["Frank Sinatra - I've Got the World on a String", "Les Paul & Mary Ford - Vaya con Dios"],
  1954: ["Bill Haley & His Comets - Rock Around the Clock", "Doris Day - Secret Love"],
  1955: ["Chuck Berry - Maybellene", "Elvis Presley - Heartbreak Hotel"],
  1956: ["Little Richard - Tutti Frutti", "Johnny Cash - I Walk the Line"],
  1957: ["Buddy Holly - Peggy Sue", "Jerry Lee Lewis - Great Balls of Fire"],
  1958: ["The Everly Brothers - All I Have to Do Is Dream", "Chuck Berry - Johnny B. Goode"],
  1959: ["The Drifters - There Goes My Baby", "Santana - Smooth"],
  1960: ["The Beatles - Hey Jude", "The Supremes - Baby Love"],
  1961: ["Elvis Presley - Can't Help Falling in Love", "Ben E. King - Stand By Me"],
  1962: ["The Four Seasons - Sherry", "Roy Orbison - Crying"],
  1963: ["The Beach Boys - Surfin' U.S.A.", "The Ronettes - Be My Baby"],
  1964: ["The Rolling Stones - (I Can't Get No) Satisfaction", "The Supremes - Where Did Our Love Go"],
  1965: ["The Beatles - Yesterday", "Bob Dylan - Like a Rolling Stone"],
  1966: ["The Beach Boys - Good Vibrations", "The Mamas & The Papas - California Dreamin'"],
  1967: ["The Doors - Light My Fire", "The Beatles - All You Need Is Love"],
  1968: ["Simon & Garfunkel - Mrs. Robinson", "The Rolling Stones - Jumpin' Jack Flash"],
  1969: ["Led Zeppelin - Whole Lotta Love", "The Beatles - Come Together"],
  1970: ["Queen - Bohemian Rhapsody", "ABBA - Dancing Queen"],
  1971: ["John Lennon - Imagine", "The Rolling Stones - Brown Sugar"],
  1972: ["Elton John - Rocket Man", "David Bowie - Starman"],
  1973: ["Pink Floyd - The Dark Side of the Moon", "Stevie Wonder - Superstition"],
  1974: ["ABBA - Waterloo", "Elton John - Bennie and the Jets"],
  1975: ["Queen - Bohemian Rhapsody", "Bruce Springsteen - Born to Run"],
  1976: ["Led Zeppelin - Stairway to Heaven", "ABBA - Dancing Queen"],
  1977: ["Sex Pistols - God Save the Queen", "Bee Gees - Stayin' Alive"],
  1978: ["The Police - Roxanne", "Blondie - Heart of Glass"],
  1979: ["Pink Floyd - Another Brick in the Wall", "The Sugarhill Gang - Rapper's Delight"],
  1980: ["Michael Jackson - Thriller", "Queen - Another One Bites the Dust"],
  1981: ["Journey - Don't Stop Believin'", "Rick Springfield - Jessie's Girl"],
  1982: ["Michael Jackson - Billie Jean", "Survivor - Eye of the Tiger"],
  1983: ["David Bowie - Let's Dance", "The Police - Every Breath You Take"],
  1984: ["Prince - Purple Rain", "Madonna - Like a Virgin"],
  1985: ["Whitney Houston - Saving All My Love for You", "Dire Straits - Money for Nothing"],
  1986: ["Bon Jovi - Livin' on a Prayer", "Peter Gabriel - Sledgehammer"],
  1987: ["U2 - With or Without You", "Guns N' Roses - Sweet Child o' Mine"],
  1988: ["George Michael - Faith", "Guns N' Roses - Paradise City"],
  1989: ["Madonna - Like a Prayer", "Phil Collins - Another Day in Paradise"],
  1990: ["Nirvana - Smells Like Teen Spirit", "MC Hammer - U Can't Touch This"],
  1991: ["Metallica - Enter Sandman", "R.E.M. - Losing My Religion"],
  1992: ["Whitney Houston - I Will Always Love You", "Dr. Dre - Nuthin' But a 'G' Thang"],
  1993: ["Aerosmith - Cryin'", "Tag Team - Whoomp! (There It Is)"],
  1994: ["Ace of Base - The Sign", "Green Day - Basket Case"],
  1995: ["Oasis - Wonderwall", "Coolio - Gangsta's Paradise"],  //La de oasis me hizo recordar a mi ex. :'(
  1996: ["Spice Girls - Wannabe", "Los del Río - Macarena"],
  1997: ["Hanson - MMMBop", "Radiohead - Paranoid Android"],
  1998: ["Britney Spears - ...Baby One More Time", "Beastie Boys - Intergalactic"],
  1999: ["Backstreet Boys - I Want It That Way", "Eminem - My Name Is"],
  2000: ["Eminem - Lose Yourself", "Britney Spears - Oops!... I Did It Again"],
  2001: ["Destiny's Child - Bootylicious", "Linkin Park - In the End"],
  2002: ["Nelly - Hot in Herre", "Avril Lavigne - Complicated"],
  2003: ["Beyoncé - Crazy in Love", "OutKast - Hey Ya!"],
  2004: ["Usher - Yeah!", "Green Day - American Idiot"],
  2005: ["The Black Eyed Peas - My Humps", "Kanye West - Gold Digger"],
  2006: ["Shakira - Hips Don't Lie", "Gnarls Barkley - Crazy"],
  2007: ["Rihanna - Umbrella", "Amy Winehouse - Rehab"],
  2008: ["Coldplay - Viva la Vida", "Lil Wayne - Lollipop"],
  2009: ["Lady Gaga - Poker Face", "The Black Eyed Peas - I Gotta Feeling"],
  2010: ["Katy Perry - Firework", "Eminem - Love the Way You Lie"],
  2011: ["Adele - Rolling in the Deep", "LMFAO - Party Rock Anthem"],
  2012: ["Gotye - Somebody That I Used to Know", "Carly Rae Jepsen - Call Me Maybe"],
  2013: ["Robin Thicke - Blurred Lines", "Daft Punk - Get Lucky"],
  2014: ["Taylor Swift - Shake It Off", "Pharrell Williams - Happy"],
  2015: ["Ed Sheeran - Thinking Out Loud", "Mark Ronson - Uptown Funk"]
  };
    
  // Buscar la recomendación correspondiente al año proporcionado
  var recomendacion = recomendacionPorAnio[anio];
  
  if(anio < 1950 || anio > 2015){
      recomendacion = console.log("Solo contengo registros de canciones desde 1950 hasta 2015. Reintente con un año registrado.");
      alert("Solo contengo registros de canciones desde 1950 hasta 2015. Reintente con un año registrado.")
  }
  else{
    // Construir mensaje final
    var cancion = anio + ": " + recomendacion.join(", otra canción recomendada es: ");
  }


  return cancion;
}

//do{ //Ignorar el do while dado que intenté darle más interactividad sin pausa a través de prompt pero desconozco si era válido para el ejercicio.

//Año del que se va a buscar la canción
var year = prompt("Ingrese el año del que desea una recomendación musical"); //Solo dejé este prompt dado que me parecía lo correcto dado que en el ejercicio no especificaba que debía asignarle desde el mismo código un año a buscar.

//Añado el contenido de la función dependiendo del año a una variable
var recomendar = recomendarCancion(year);

if(recomendar != undefined) { //Verifico si la variable recomendar contiene algo o no.
//Llamo a la variable recomendar para que muestre el contenido de la función recomendarCancion.
console.log(recomendar);
alert(recomendar);
}

//  var pregunta = prompt("¿Desea solicitar otra recomendación? si/no");  //Pregunta al usuario si desea otra recomendación o no para saber si debe repetir o no el do while.
//} while(pregunta === 'si');
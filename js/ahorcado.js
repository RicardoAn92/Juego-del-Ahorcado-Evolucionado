//# BANCO DE PALABRAS CLASIFICADAS POR CATEGORIAS Y DIFICULTAD
window.categorias = {
   Facil: ["Animales", "Frutas", "Colores", "Deportes", "Comida", "Clima"],
   Medio: [
      "Países",
      "Profesiones",
      "Transportes",
      "Instrumentos Musicales",
      "Computación",
   ],
   Dificil: [
      "Películas",
      "Ciudades",
      "Cuerpo Humano",
      "Elementos Químicos",
      "Personajes",
   ],
};

window.palabrasPorCategoria = {
   //# FACIL
   Animales: [
      "Camaleón",
      "Elefante",
      "Jirafa",
      "Tiburón",
      "Mariposa",
      "Cocodrilo",
      "Perro",
      "Murciélago",
      "Gato",
   ],
   Frutas: ["Manzana", "Piña", "Papaya", "Fresa", "Kiwi", "Mango", "Sandía"],
   Colores: ["Rojo", "Azul", "Verde", "Amarillo", "Morado", "Celeste"],
   Deportes: [
      "Fútbol",
      "Baloncesto",
      "Tenis",
      "Hockey",
      "Ciclismo",
      "Natación",
   ],
   Comida: [
      "Pizza",
      "Hamburguesa",
      "Encebollado",
      "Lasaña",
      "Empanada",
      "Ceviche",
   ],
   Clima: ["Lluvia", "Sol", "Nublado", "Nieve", "Tormenta"],
   //# MEDIO
   Países: [
      "Ecuador",
      "Rusia",
      "Francia",
      "Italia",
      "Australia",
      "Japón",
      "Brasil",
      "Estados Unidos",
   ],
   Profesiones: [
      "Médico",
      "Profesor",
      "Bombero",
      "Policía",
      "Carpintero",
      "Abogado",
   ],
   Transportes: ["Coche", "Avión", "Barco", "Bicicleta", "Tren", "Helicóptero"],
   "Instrumentos Musicales": [
      "Guitarra",
      "Piano",
      "Violín",
      "Trompeta",
      "Tambor",
      "Flauta",
   ],
   Computación: [
      "Teclado",
      "Mouse",
      "Monitor",
      "Impresora",
      "Disco Duro",
      "Memoria RAM",
   ],
   //# DIFICIL
   Películas: [
      "Titanic",
      "Shrek",
      "Avatar",
      "King Kong",
      "Toy Story",
      "El Rey León",
      "Harry Potter",
      "Crepúsculo",
      "Rambo",
   ],
   Ciudades: ["Tokio", "Londres", "París", "Roma", "Barcelona", "Guayaquil"],
   "Cuerpo Humano": [
      "Cerebro",
      "Corazón",
      "Estómago",
      "Hígado",
      "Pulmones",
      "Nariz",
   ],
   "Elementos Químicos": [
      "Hidrógeno",
      "Oxígeno",
      "Carbono",
      "Helio",
      "Plata",
      "Plomo",
   ],
   Personajes: [
      "Homero Simpson",
      "Bart Simpson",
      "Buzz Lightyear",
      "Mickey Mouse",
      "Bob Esponja",
      "Patricio",
      "Calamardo",
   ],
};

var intento = 0;
var endgame = false;
var acertados = 0;
var modoOscuro = false;

window.estadoYouWin = false;
window.estadoOscuro = false;
window.modoEstado = false;
window.countdownElement = document.getElementById("countdown");
let audio2 = null;

function pistas() {
   const categoriaDiv = document.getElementById("categoria");
   window.audioPista = document.querySelector("#audioPista");
   categoriaDiv.classList.remove("no-display");
   audioPista.classList.add("no-display");

   if (palabra === "Perro") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/perro.mp3";
   } else if (palabra === "Tren") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/tren.mp3";
   } else if (palabra === "Homero Simpson") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/homero.mp3";
   } else if (palabra === "Bart Simpson") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/bart.mp3";
   } else if (palabra === "Buzz Lightyear") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/buzz lightyear.mp3";
   } else if (palabra === "Mickey Mouse") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/mickey mouse.mp3";
   } else if (palabra === "Bob Esponja") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/bob esponja.mp3";
   } else if (palabra === "Patricio Estrella") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/patricio.mp3";
   } else if (palabra === "Calamardo") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/calamardo.mp3";
   } else if (palabra === "Gato") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/gato.mp3";
   } else if (palabra === "Helicóptero") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/helicoptero.mp3";
   } else if (palabra === "Lluvia") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/lluvia.mp3";
   } else if (palabra === "Flauta") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/flauta.mp3";
   } else if (palabra === "Corazón") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/corazon.mp3";
   } else if (palabra === "Tambor") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/tambor.mp3";
   } else if (palabra === "Guitarra") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/guitarra.mp3";
   } else if (palabra === "Mouse") {
      categoriaDiv.classList.add("no-display");
      audioPista.classList.remove("no-display");
      audioPista.src = "../audio/audio-palabras/mouse.mp3";
   } else if (palabra === "Sandía") {
      categoriaDiv.textContent = "Es verde por fuera y roja por dentro";
   } else if (palabra === "Teclado") {
      categoriaDiv.textContent = "Lo usas para escribir, pero no es una pluma";
   } else if (palabra === "Nieve") {
      categoriaDiv.textContent = "Es blanco y frío, cae del cielo en invierno";
   } else if (palabra === "Jirafa") {
      categoriaDiv.textContent = "Es el animal más alto de la tierra";
   } else if (palabra === "Brasil") {
      categoriaDiv.textContent =
         "Conocido por el famoso Carnaval de Río de Janeiro";
   } else if (palabra === "Estado Unidos") {
      categoriaDiv.textContent =
         "Conocido por la Estatua de la Libertad y hamburguesas";
   } else if (palabra === "Francia") {
      categoriaDiv.textContent =
         "En Europa, conocido por la Torre Eiffel y baguettes";
   } else if (palabra === "Camaleón") {
      categoriaDiv.textContent = "Un reptil que puede cambiar de color";
   } else if (palabra === "Oxígeno") {
      categoriaDiv.textContent = "Elemento presente en el agua";
   } else if (palabra === "Corazón") {
      categoriaDiv.textContent = "Órgano que bombea sangre";
   } else if (palabra === "Abogado") {
      categoriaDiv.textContent = "Lucha por justicia y leyes. ¿Quién es?";
   } else if (palabra === "Bombero") {
      categoriaDiv.textContent = "Combate el fuego, héroe sin capa. ¿Quién es?";
   } else if (palabra === "Titanic") {
      categoriaDiv.textContent =
         "Gigante en el océano, trágico hundimiento. ¿Cuál es el barco?";
   } else if (palabra === "Hockey") {
      categoriaDiv.textContent =
         "Disco deslizante, palos y patines, ¿qué deporte es?";
   } else if (palabra === "Fresa") {
      categoriaDiv.textContent =
         "Roja y dulce, en la planta crece. ¿Qué fruta soy?";
   } else {
      categoriaDiv.textContent = categoriaRandom;
   }
   return;
}

//# FUNCIONES PARA REPRODUCIR SONIDOS
//# FUNCION PARA LA MUSICA
function play(dir) {
   audio = new Audio(dir);
   audio.play();
}

//# FUNCION PARA EL CONTADOR
function play2(dir) {
   audio2 = new Audio(dir);
   audio2.play();
}

//# FUNCION PARA LOS EFECTOS DE SONIDO
function play3(dir) {
   audio3 = new Audio(dir);
   audio3.play();
}

//# FUNCION PARA EL CLICK
function play4(dir) {
   audio4 = new Audio(dir);
   audio4.play();
}

//# FUNCION PARA CADA LETRA INGRESADA EN EL TECLADO
function teclado(btn, palabra) {
   if (window.endgame == false) {
      let encontrado = false;
      let letra = btn.textContent;
      for (let i = 0; i < palabra.length; i++) {
         if (
            palabra[i].toUpperCase() == letra ||
            (tieneTilde(palabra[i]) &&
               quitarTilde(palabra[i]).toUpperCase() === letra)
         ) {
            let correcta = document.querySelector("#letra" + i);
            correcta.textContent = palabra[i];
            encontrado = true;
            window.acertados += 1;

            //# AUMENTA 10 PUNTOS POR CADA LETRA ACERTADA
            puntuacionValor += 10;

            const letrasAcertadas = document.querySelector("#letrasAcertadas");
            if (jugadorEstado == false) {
               contTurnos % 2 == 0 ? aciertos_j2++ : aciertos_j1++;
               contTurnos % 2 == 0
                  ? (totalLetras_j2 += 1)
                  : (totalLetras_j1 += 1);
               contTurnos % 2 == 0
                  ? (puntosGanados_j2 += 10)
                  : (puntosGanados_j1 += 10);
               contTurnos % 2 == 0
                  ? (puntuacion_j1 += 10)
                  : (puntuacion_j2 += 10);
               contTurnos % 2 == 0
                  ? (puntuacionValor_j2 += 10)
                  : (puntuacionValor_j1 += 10);
            } else {
               aciertos++;
               totalLetras++;
               letrasAcertadas.textContent = aciertos;
               puntosGanados += 10;
            }
            updatePuntuacion();
         }
      }

      if (encontrado == true) {
         btn.disabled = true;
         btn.classList.remove("tecla");
         btn.classList = "teclaUsadaCorrecta";
         play3("audio/acertada.mp3");
      } else {
         btn.disabled = true;
         btn.classList.remove("tecla");
         btn.classList = "teclaUsadaIncorrecta";
         play3("audio/error.mp3");

         const letrasIncorrectas = document.querySelector("#letrasIncorrectas");
         if (jugadorEstado == false) {
            contTurnos % 2 == 0 ? errores_j2++ : errores_j1++;
            contTurnos % 2 == 0
               ? (puntosPerdidos_j2 += 10)
               : (puntosPerdidos_j1 += 10);
            contTurnos % 2 == 0 ? (totalLetras_j2 += 1) : (totalLetras_j1 += 1);
            contTurnos % 2 == 0
               ? (puntuacionValor_j2 -= 10)
               : (puntuacionValor_j1 -= 10);
         } else {
            errores++;
            totalLetras++;
            letrasIncorrectas.textContent = errores;
            puntosPerdidos += 10;
         }
         drawGame();
      }

      if (
         window.acertados == palabra.replace(/ /g, "").length &&
         nivel <= maxNivel
      ) {
         youWin();
      }
   }
   return;
}

//# FUNCION PARA VERIFICAR SI UNA LETRA TIENE TILDE
function tieneTilde(letra) {
   const tildes = ["á", "é", "í", "ó", "ú"];
   return tildes.includes(letra.toLowerCase());
}

//# FUNCION PARA QUITAR LA TILDE DE UNA LETRA
function quitarTilde(letra) {
   const tildes = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      ü: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
   };

   return tildes[letra] || letra;
}

function initGame() {
   //# OBTENGO LAS PROPIEDADES DEL OBJETO CATEGORIAS
   const dificultades = Object.keys(window.categorias);
   const pausasvg = document.querySelector("#pausasvg");

   //# OBTENGO LA DIFFICULTAD ELEGIDA
   window.dificultadElegida = dificultades[window.dificultad];

   pausaEstado = false;

   if (jugadorEstado == false) {
      deteccionTeclasActivada = false;
      pausasvg.disabled = true;
      window.turnoJugador = document.querySelector(".state-nodisplay2");
      turnoJugador.classList.remove("state-nodisplay2");

      const turno = document.createElement("div");
      turno.style.fontSize = "3.2rem";
      turno.textContent = "Turno de: ";
      const jugador = document.createElement("div");
      jugador.style.fontSize = "3.2rem";
      jugador.textContent = contTurnos % 2 == 0 ? jugador1 : jugador2;

      contTurnos++;

      turnoJugador.append(turno);
      turnoJugador.append(jugador);

      turnoJugador.classList.add("stateAnimation", "youWin");

      if (dificultadElegida === "Facil") {
         countdownElement.textContent = 30;
      } else if (dificultadElegida === "Medio") {
         countdownElement.textContent = 25;
      } else if (dificultadElegida === "Dificil") {
         countdownElement.textContent = 20;
      }
      if (contTurnos == 1) {
         setTimeout(function () {
            deteccionTeclasActivada = true;
            pausasvg.disabled = false;

            turnoJugador.classList.add("no-display");

            if (dificultadElegida === "Facil") {
               startCountdown(30);
            } else if (dificultadElegida === "Medio") {
               startCountdown(25);
            } else if (dificultadElegida === "Dificil") {
               startCountdown(20);
            }
         }, 5000);
      } else if (contTurnos == 2) {
         deteccionTeclasActivada = true;
         pausasvg.disabled = false;
         turnoJugador.classList.add("no-display");

         if (dificultadElegida === "Facil") {
            startCountdown(30);
         } else if (dificultadElegida === "Medio") {
            startCountdown(25);
         } else if (dificultadElegida === "Dificil") {
            startCountdown(20);
         }
      } else if (contTurnos == 3) {
         deteccionTeclasActivada = true;
         pausasvg.disabled = false;
         turnoJugador.classList.add("no-display");

         if (dificultadElegida === "Facil") {
            startCountdown(30);
         } else if (dificultadElegida === "Medio") {
            startCountdown(25);
         } else if (dificultadElegida === "Dificil") {
            startCountdown(20);
         }
      } else if (contTurnos == 4) {
         deteccionTeclasActivada = true;
         pausasvg.disabled = false;
         turnoJugador.classList.add("no-display");

         if (dificultadElegida === "Facil") {
            startCountdown(30);
         } else if (dificultadElegida === "Medio") {
            startCountdown(25);
         } else if (dificultadElegida === "Dificil") {
            startCountdown(20);
         }
      } else if (contTurnos == 5) {
         deteccionTeclasActivada = true;
         pausasvg.disabled = false;
         turnoJugador.classList.add("no-display");

         if (dificultadElegida === "Facil") {
            startCountdown(30);
         } else if (dificultadElegida === "Medio") {
            startCountdown(25);
         } else if (dificultadElegida === "Dificil") {
            startCountdown(20);
         }
      } else if (contTurnos == 6) {
         deteccionTeclasActivada = true;
         pausasvg.disabled = false;
         turnoJugador.classList.add("no-display");

         if (dificultadElegida === "Facil") {
            startCountdown(30);
         } else if (dificultadElegida === "Medio") {
            startCountdown(25);
         } else if (dificultadElegida === "Dificil") {
            startCountdown(20);
         }
      } else if (contTurnos == 7) {
         pausasvg.disabled = false;
         youWin();
      }
   } else {
      if (dificultadElegida === "Facil") {
         startCountdown(30);
      } else if (dificultadElegida === "Medio") {
         startCountdown(25);
      } else if (dificultadElegida === "Dificil") {
         startCountdown(20);
      }
   }

   //# OBTENGO TODO EL ARRAY DE LA DIFICULTAD ELEGIDA
   const categoria = categorias[dificultadElegida];

   //# OBTENGO UNA CATEGORIA ALEATORIA DEL ARRAY DE LA DIFICULTAD ELEGIDA
   window.categoriaRandom =
      categoria[Math.floor(Math.random() * categoria.length)];

   //# OBTENGO TODO EL ARRAY DE LA CATEGORIA ELEGIDA
   const palabrasCategoria = palabrasPorCategoria[categoriaRandom];

   //# OBTENGO UNA PALABRA ALEATORIA DEL ARRAY DE LA CATEGORIA ELEGIDA
   window.palabra =
      palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
   console.log("Palabra:", palabra);

   // # ELIMINAR PARA QUE NO SALGAN PALABRAS REPETIDAS
   var indicePalabra = palabrasCategoria.indexOf(palabra);
   if (indicePalabra !== -1) {
      palabrasCategoria.splice(indicePalabra, 1);
   }

   drawGame();

   let correctas = document.querySelector(".correctas");
   for (let i = 0; i < palabra.length; i++) {
      const letra = document.createElement("div");
      letra.id = "letra" + i;
      letra.classList = "letraCorrecta";
      letra.textContent = "";

      //# Verifica si el caracter es un espacio en blanco y lo oculta
      if (palabra[i] === " ") {
         letra.style.visibility = "hidden";
      }
      correctas.append(letra);
   }

   let teclado_f1 = "qwertyuiop";
   let teclado_f2 = "asdfghjklñ";
   let teclado_f3 = "zxcvbnm";

   let f1 = document.querySelector(".fila1");
   for (let i = 0; i < teclado_f1.length; i++) {
      const tecla = document.createElement("button");
      tecla.classList = "tecla";
      tecla.textContent = teclado_f1[i].toUpperCase();
      tecla.id = teclado_f1[i].toString();
      tecla.addEventListener("click", function () {
         teclado(this, palabra);
      });
      f1.append(tecla);
   }

   let f2 = document.querySelector(".fila2");
   for (let i = 0; i < teclado_f2.length; i++) {
      const tecla = document.createElement("button");
      tecla.classList = "tecla";
      tecla.textContent = teclado_f2[i].toUpperCase();
      tecla.id = teclado_f2[i].toString();
      tecla.addEventListener("click", function () {
         teclado(this, palabra);
      });
      f2.append(tecla);
   }

   let f3 = document.querySelector(".fila3");
   for (let i = 0; i < teclado_f3.length; i++) {
      const tecla = document.createElement("button");
      tecla.classList = "tecla";
      tecla.textContent = teclado_f3[i].toUpperCase();
      tecla.id = teclado_f3[i].toString();
      tecla.addEventListener("click", function () {
         teclado(this, palabra);
      });
      f3.append(tecla);
   }

   updatePuntuacion();
   return;
}

function updatePuntuacion() {
   if (jugadorEstado == true) {
      const puntuacionValorElement = document.getElementById("puntuacionValor");

      if (window.puntuacionValor < 0) {
         window.puntuacionValor = 0;
      }
      puntuacionValorElement.textContent = window.puntuacionValor;

      puntuacionEst = document.querySelector("#puntuacionEst");
      puntuacionEst.textContent = window.puntuacionValor;

      if (window.puntuacionValor == 0) {
         gameOver();
         return;
      }
   } else {
      const puntuacionValorElement = document.getElementById("puntuacionValor");
      contTurnos % 2 == 0
         ? (puntuacionValorElement.textContent = puntuacionValor_j2)
         : (puntuacionValorElement.textContent = puntuacionValor_j1);

      if (window.puntuacionValor_j1 == 0) {
         play3("audio/lose.mp3");
         deteccionTeclasActivada = true;
         window.gana_player = document.querySelector(".state-nodisplay4");
         gana_player.classList.remove("state-nodisplay4");
         const gana = document.createElement("div");
         gana.style.fontSize = "4.5rem";
         gana.textContent = "Gana";

         const player = document.createElement("div");
         player.style.fontSize = "4.5rem";
         player.textContent = jugador2;

         gana_player.append(gana);
         gana_player.append(player);
         gana_player.classList.add("stateAnimation", "youWin");
         clearInterval(countdownInterval);

         setTimeout(function () {
            deteccionTeclasActivada = false;
            gana_player.classList.add("state-nodisplay4");
            calcularEstadisticas();
         }, 4000);
         return;
      }

      if (window.puntuacionValor_j2 == 0) {
         play3("audio/lose.mp3");
         deteccionTeclasActivada = true;
         window.gana_player = document.querySelector(".state-nodisplay4");
         gana_player.classList.remove("state-nodisplay4");
         const gana = document.createElement("div");
         gana.style.fontSize = "4.5rem";
         gana.textContent = "Gana";

         const player = document.createElement("div");
         player.style.fontSize = "4.5rem";
         player.textContent = jugador1;

         gana_player.append(gana);
         gana_player.append(player);
         gana_player.classList.add("stateAnimation", "youWin");
         clearInterval(countdownInterval);

         setTimeout(function () {
            deteccionTeclasActivada = false;
            gana_player.classList.add("state-nodisplay4");
            calcularEstadisticas();
         }, 4000);
         return;
      }
   }
}

function removeChilds(nodo) {
   if (nodo.hasChildNodes) {
      while (nodo.childNodes.length >= 1) {
         nodo.removeChild(nodo.firstChild);
      }
   }
   return;
}

function newGame() {
   let pantalla = document.querySelector("canvas");
   let pincel = pantalla.getContext("2d");
   pincel.clearRect(0, 0, pantalla.width, pantalla.height);

   window.intento = 0;
   window.endgame = false;
   window.acertados = 0;

   let f1 = document.querySelector(".fila1");
   removeChilds(f1);
   let f2 = document.querySelector(".fila2");
   removeChilds(f2);
   let f3 = document.querySelector(".fila3");
   removeChilds(f3);
   let correctas = document.querySelector(".correctas");
   removeChilds(correctas);

   if (document.querySelector(".stateAnimation") != null) {
      let gameOver = document.querySelector(".stateAnimation");
      gameOver.classList.remove(".gameOver");
      gameOver.classList.remove(".youWin");
      gameOver.classList.remove(".stateAnimation");
      gameOver.classList = "state-nodisplay";
      removeChilds(gameOver);
   }

   if (jugadorEstado == false) {
      turnoJugador.classList.add("state-nodisplay2");
   }
   initGame();

   return;
}

function gameOver() {
   //# PAUSA LA CUENTA REGRESIVA CUANDO PIERDE
   clearInterval(countdownInterval);
   //# MUESTRA LAS LETRAS QUE FALTABAN POR ADIVINAR
   for (let i = 0; i < palabra.length; i++) {
      window.letraElement = document.getElementById("letra" + i);
      if (letraElement.textContent === "") {
         letraElement.textContent = palabra[i];
         if (modoEstado == false) {
            letraElement.style.color = "#012121";
         } else {
            letraElement.style.color = "white";
         }
         letraElement.classList.add("blink2");
      }
   }

   countdownElement.classList.remove("blink");

   if (seconds > 0 && seconds <= 5) {
      audio2.pause();
   }

   if (document.querySelector(".state-nodisplay") != null) {
      let gameOver = document.querySelector(".state-nodisplay");
      gameOver.classList.remove("state-nodisplay");

      const game = document.createElement("div");
      game.textContent = "GAME";

      const over = document.createElement("div");
      over.textContent = "OVER";

      gameOver.append(game);
      gameOver.append(over);

      gameOver.classList.add("stateAnimation", "gameOver");

      window.endgame = true;
      play3("audio/lose.mp3");
   }

   pausasvg.disabled = true;
   setTimeout(function () {
      pausasvg.disabled = false;
      audio.currentTime = 0;
      audio.play();
      calcularEstadisticas();
   }, 6500);
   return;
}

function drawGame() {
   let pantalla = document.querySelector("canvas");
   let pincel = pantalla.getContext("2d");

   pincel.beginPath();
   if (window.intento == 0) {
      // BASE
      pincel.moveTo(355, 350);
      pincel.lineTo(0, 350);
      pistas();
   }
   if (window.intento == 1) {
      // COL
      pincel.moveTo(105, 0);
      pincel.lineTo(105, 350);
      pincel.moveTo(135, 350);
      pincel.lineTo(105, 320);
      pincel.moveTo(75, 350);
      pincel.lineTo(105, 320);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }
   if (window.intento == 2) {
      // VIGA
      pincel.moveTo(155, 0);
      pincel.lineTo(105, 50);
      pincel.moveTo(257, 3);
      pincel.lineTo(103, 3);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 3) {
      // CUERDA
      pincel.moveTo(255, 80);
      pincel.lineTo(255, 0);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 4) {
      // CABEZA
      pincel.moveTo(255, 50);
      pincel.arc(255, 110, 30, -Math.PI / 2, (Math.PI * 3) / 2, true);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }
   if (window.intento == 5) {
      // TORSO
      pincel.moveTo(255, 225);
      pincel.lineTo(255, 140);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 6) {
      // BR_I
      pincel.moveTo(275, 200);
      pincel.lineTo(255, 150);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 7) {
      // BR_D
      pincel.moveTo(235, 200);
      pincel.lineTo(255, 150);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 8) {
      // PI_I
      pincel.moveTo(275, 270);
      pincel.lineTo(255, 225);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
      } else {
         window.puntuacionValor -= 10;
      }
      updatePuntuacion();
   }

   if (window.intento == 9) {
      // PI_D
      pincel.moveTo(235, 270);
      pincel.lineTo(255, 225);

      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? (puntuacion_j1 -= 10) : (puntuacion_j2 -= 10);
         play3("audio/lose.mp3");
         deteccionTeclasActivada = true;
         window.gana_player = document.querySelector(".state-nodisplay4");
         gana_player.classList.remove("state-nodisplay4");
         const gana = document.createElement("div");
         gana.style.fontSize = "4.5rem";
         gana.textContent = "Gana";

         const player = document.createElement("div");
         player.style.fontSize = "4.5rem";
         player.textContent = contTurnos % 2 == 0 ? jugador1 : jugador2;

         gana_player.append(gana);
         gana_player.append(player);
         gana_player.classList.add("stateAnimation", "youWin");
         clearInterval(countdownInterval);

         setTimeout(function () {
            deteccionTeclasActivada = false;
            gana_player.classList.add("state-nodisplay4");
            calcularEstadisticas();
         }, 4000);
      } else {
         window.puntuacionValor -= 10;
         gameOver();
      }
      updatePuntuacion();
   }

   pincel.lineWidth = 6;
   var r = document.querySelector(":root");
   var rs = getComputedStyle(r);
   if (window.modoOscuro == false) {
      pincel.strokeStyle = rs.getPropertyValue("--color5");
   } else {
      pincel.strokeStyle = rs.getPropertyValue("--color1");
   }
   pincel.stroke();
   window.intento += 1;
   return;
}

function youWin() {
   if (jugadorEstado == true) {
      if (nivel < maxNivel) {
         nivel++;
         clearInterval(countdownInterval);

         round = document.querySelector(".state-nodisplay");
         round.classList.remove("state-nodisplay");

         const you = document.createElement("div");

         you.style.fontSize = "3.5rem";
         you.textContent = "Round " + nivel;

         round.append(you);
         round.classList.add("stateAnimation", "youWin");
         window.endgame = true;
         play3("audio/win.mp3");

         const pausasvg = document.querySelector("#pausasvg");
         pausasvg.disabled = true;
         setTimeout(function () {
            if (nivel == 2) {
               puntuacionValor += 10;
            } else if (nivel == 3) {
               puntuacionValor += 10;
            } else if (nivel == 4) {
               puntuacionValor += 10;
            } else if (nivel == 5) {
               puntuacionValor += 10;
            }
            puntosGanados += puntuacionValor;
            document.getElementById("nivelValor").textContent = nivel;
            pausasvg.disabled = false;
            newGame();
         }, 4000);
      } else {
         if (document.querySelector(".state-nodisplay") != null) {
            const youWin = document.querySelector(".state-nodisplay");
            youWin.classList.remove("state-nodisplay");

            const you = document.createElement("div");
            you.textContent = "YOU"; /*palabra[i].toUpperCase()*/

            const win = document.createElement("div");
            win.textContent = "WIN!"; /*palabra[i].toUpperCase()*/

            youWin.append(you);
            youWin.append(win);

            youWin.classList.add("stateAnimation", "youWin");
            window.endgame = true;
            play3("../audio/you-win.wav");
         }

         //# PAUSA LA CUENTA REGRESIVA CUANDO GANA
         clearInterval(countdownInterval);

         estadoYouWin = true;

         countdownElement.classList.remove("blink");
         pausasvg.disabled = true;

         setTimeout(function () {
            pausasvg.disabled = false;
            audio.currentTime = 0;
            audio.play();
            calcularEstadisticas();
         }, 6500);
      }
   } else {
      if (contTurnos <= 6) {
         clearInterval(countdownInterval);

         round = document.querySelector(".state-nodisplay");
         round.classList.remove("state-nodisplay");

         if (contTurnos < 6) {
            const you = document.createElement("div");
            you.style.fontSize = "3.5rem";
            you.textContent = "Turno de: ";

            const win = document.createElement("div");
            win.style.fontSize = "3.5rem";

            win.textContent = contTurnos % 2 == 0 ? jugador1 : jugador2;
            play3("../audio/turno.wav");

            round.append(you);
            round.append(win);
            round.classList.add("stateAnimation", "youWin");
            document.getElementById("nivelTexto").textContent = "Turno de: ";
            contTurnos % 2 == 0
               ? (document.getElementById("nivelValor").textContent = jugador1)
               : (document.getElementById("nivelValor").textContent = jugador2);
         }
         window.endgame = true;
         pausasvg.disabled = true;

         if (contTurnos >= 6) {
            round.classList.add("state-nodisplay");
            const youWin = document.querySelector(".state-nodisplay3");
            youWin.classList.remove("state-nodisplay3");
            play3("../audio/you-win.wav");
            const you = document.createElement("div");
            you.style.fontSize = "4.5rem";
            you.textContent = "END";

            const win = document.createElement("div");
            win.style.fontSize = "4.5rem";
            win.textContent = "GAME!";

            youWin.append(you);
            youWin.append(win);

            youWin.classList.add("stateAnimation", "youWin");
            window.endgame = true;

            const pausasvg = document.querySelector("#pausasvg");
            pausasvg.disabled = true;

            setTimeout(function () {
               pausasvg.disabled = false;
               audio.currentTime = 0;
               audio.play();
               youWin.classList.add("no-display");
               calcularEstadisticas();
            }, 6500);
         } else {
            setTimeout(function () {
               turnoJugador.classList.add("state-nodisplay2");
               newGame();
            }, 4000);
         }
      }
   }
   return;
}

document.addEventListener(
   "keydown",
   (event) => {
      if (deteccionTeclasActivada) {
         let name = event.key;
         if (document.getElementById(name.toLowerCase()) != null) {
            document.getElementById(name.toLowerCase()).click();
         }
      }
      if (event.key === "Enter") {
         event.preventDefault();
      }
   },
   false
);

const newgame = document.querySelector("#new");
const abandonar = document.querySelector("#des");
newgame.addEventListener("click", function () {
   newgame.classList.add("no-display");
   abandonar.classList.add("no-display");

   deteccionTeclasActivada = true;

   estadoYouWin = false;

   if (jugadorEstado == true) {
      play4("../audio/click.mp3");
      puntuacionValor = inicial;
      nivel = 1;
      document.getElementById("nivelValor").textContent = window.nivel;
      newGame();
   } else {
      window.newTurno = document.querySelector(".state-nodisplay5");
      newTurno.classList.remove("state-nodisplay5");

      const turno = document.createElement("div");
      turno.style.fontSize = "3.2rem";
      turno.textContent = "Turno de: ";
      const jugador = document.createElement("div");
      jugador.style.fontSize = "3.2rem";
      jugador.textContent = jugador1;

      newTurno.append(turno);
      newTurno.append(jugador);
      newTurno.classList.add("stateAnimation", "youWin");

      if (dificultadElegida === "Facil") {
         countdownElement.textContent = 30;
      } else if (dificultadElegida === "Medio") {
         countdownElement.textContent = 25;
      } else if (dificultadElegida === "Dificil") {
         countdownElement.textContent = 20;
      }

      setTimeout(function () {
         // newTurno = document.querySelector(".stateAnimation");
         // newTurno.classList.remove(".gameOver");
         // newTurno.classList.remove(".youWin");
         // newTurno.classList.remove(".stateAnimation");
         newTurno.classList = "state-nodisplay5";
         removeChilds(newTurno);
         contTurnos++;
         newGame();
      }, 4500);
   }
});
abandonar.addEventListener("click", function () {
   play4("../audio/click.mp3");
   //# AGREGAR EL BOTON "EMPEZAR JUEGO" y "AGREGAR PALABRA"
   const menu = document.querySelector("#menu");
   menu.classList.remove("no-display");

   //# QUITAR EL MENU CUANDO PRESIONO EL BOTON ABANDONAR
   menu.classList.add("menu");

   //# AGREGAR EL LOGO CUANDO PRESIONO EL BOTON ABANDONAR
   const logo = document.querySelector("#logo");
   logo.classList.remove("no-display");

   //# QUITAR EL BOTON DE PAUSA CUANDO PRESIONO EL BOTON ABANDONAR
   const pausa = document.querySelector("#pausa");
   pausa.classList.add("no-display");

   //# QUITAR EL JUEGO CUANDO PRESIONO EL BOTON ABANDONAR
   const juego = document.querySelector("#juego");
   juego.classList.add("no-display");

   //# AGREGAR EL JUEGO CUANDO PRESIONO EL BOTON ABANDONAR
   juego.classList.remove("juego");

   //# AGREGAR EL BOTON DE MODO OSCURO CUANDO PRESIONO EL BOTON ABANDONAR
   const modo = document.querySelector("#modo");
   modo.classList.remove("no-display");

   //# AGREGAR EL TEXTO DE MODO OSCURO CUANDO PRESIONO EL BOTON ABANDONAR
   const text_modo = document.querySelector("#text_modo");
   text_modo.classList.remove("no-display");

   //# QUITAR CUENTA REGRESIVA CUANDO PRESIONO EL BOTON ABANDONAR
   const cuenta_regresiva = document.querySelector("#clock");
   cuenta_regresiva.classList.add("no-display");

   //# QUITAR PUNTUACION CUANDO PRESIONO EL BOTON ABANDONAR
   const puntuacion = document.querySelector("#puntuacion");
   puntuacion.classList.add("no-display");

   //# QUITAR NIVEL CUANDO PRESIONO EL BOTON ABANDONAR
   const nivel = document.querySelector("#nivel");
   nivel.classList.add("no-display");

   //# LIMPIA LA CUENTA REGRESIVA CUANDO ABANDONA
   clearInterval(countdownInterval);

   //# QUITA EL FONDO OSCURO
   fondoOscuro.style.display = "none";

   deteccionTeclasActivada = true;

   if (jugadorEstado == false) {
      jugador1 = document.querySelector("#jugador1");
      jugador1.textContent = "Valor";

      jugador2 = document.querySelector("#jugador2");
      jugador2.classList.add("no-display");

      letrasAcertadas_j2 = document.querySelector("#letrasAcertadas2");
      letrasAcertadas_j2.classList.add("no-display");

      letrasIncorrectas_j2 = document.querySelector("#letrasIncorrectas2");
      letrasIncorrectas_j2.classList.add("no-display");

      presicion_j2 = document.querySelector("#presicion2");
      presicion_j2.classList.add("no-display");

      puntuacionEst_j2 = document.querySelector("#puntuacionEst2");
      puntuacionEst_j2.classList.add("no-display");

      puntosGanados2 = document.querySelector("#puntosGanados2");
      puntosGanados2.classList.add("no-display");

      puntosPerdidos2 = document.querySelector("#puntosPerdidos2");
      puntosPerdidos2.classList.add("no-display");

      duracionTotal_j2 = document.querySelector("#tiempoDuracion2");
      duracionTotal_j2.classList.add("no-display");

      gana_player.classList.add("no-display");
      turnoJugador.classList.add("state-nodisplay2");
   }

   window.abandonarEstado = true;
});

const start = document.querySelector("#start");
start.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const fondoOscuro2 = document.querySelector("#fondoOscuro2");
   fondoOscuro2.style.display = "block";
   estadoYouWin = false;

   window.jugadorEstado = true;
});

const modo = document.querySelector("#modo");
modo.addEventListener("click", function () {
   play4("../audio/click.mp3");
   if (window.modoOscuro == false) {
      let r = document.querySelector(":root");
      r.style.setProperty("--color1", "#A2ABC8");
      r.style.setProperty("--color2", "#6F7488");
      r.style.setProperty("--color3", "#3B3E49");
      r.style.setProperty("--color4", "#292B33");
      r.style.setProperty("--color5", "#31333C");
      r.style.setProperty("--color6", "#3B3E49");
      r.style.setProperty("--color7", "#a2abc8");

      const svg = document.querySelector("#logo");
      svg.setAttribute("stroke", "#A2ABC8");

      const pausasvg = document.querySelector("#pausasvg");
      pausasvg.src = "../img/icono pausa/pausa2.svg";
      window.estadoOscuro = true;

      window.modoOscuro = true;
      this.src = "./img/sun.png";
      let intento_back = window.intento;
      window.intento = 0;
      for (let i = 0; i < intento_back; i++) {
         drawGame();
      }
      const text_modo = document.querySelector("#text_modo");
      text_modo.textContent = "Modo Claro";
      window.modoEstado = true;
   } else {
      let r = document.querySelector(":root");
      r.style.setProperty("--color1", "#C7FFED");
      r.style.setProperty("--color2", "#D8FFDB");
      r.style.setProperty("--color3", "#008F8C");
      r.style.setProperty("--color4", "#015958");
      r.style.setProperty("--color5", "#023535");
      r.style.setProperty("--color6", "#012121");
      r.style.setProperty("--color7", "#333");

      const pausasvg = document.querySelector("#pausasvg");
      pausasvg.src = "../img/icono pausa/pausa.svg";
      window.estadoOscuro = false;
      window.modoEstado = false;

      const svg = document.querySelector("#logo");
      svg.setAttribute("stroke", "#fbfbfe");
      window.modoOscuro = false;
      this.src = "./img/moon.png";
      let intento_back = window.intento;
      window.intento = 0;
      for (let i = 0; i < intento_back; i++) {
         drawGame();
      }
      const text_modo = document.querySelector("#text_modo");
      text_modo.textContent = "Modo Oscuro";
   }
});

//# FUNCION PARA LA CUENTA REGRESIVA
function updateCountdown(seconds) {
   if (seconds >= 0) {
      countdownElement.textContent = seconds;
   }

   // Agrega la clase "blink" cuando faltan 5 segundos o menos
   if (seconds == 0 || seconds > 5) {
      countdownElement.classList.remove("blink");
   } else {
      countdownElement.classList.add("blink");
   }
}

window.abandonarEstado = false;
// Función para iniciar la cuenta regresiva
function startCountdown(duration) {
   if (abandonarEstado == true) {
      return;
   }

   window.seconds = duration;

   updateCountdown(seconds);

   window.countdownInterval = setInterval(function () {
      if (jugadorEstado == false) {
         contTurnos % 2 == 0 ? tiempoDuracion_j2++ : tiempoDuracion_j1++;
      } else {
         tiempoDuracion++;
      }
      seconds--;

      if (seconds === 5) {
         play2("../audio/5seconds.mp3");
      }

      if (seconds >= 0) {
         updateCountdown(seconds);
      } else {
         if (jugadorEstado == false) {
            contTurnos % 2 == 0 ? tiempoDuracion_j2++ : tiempoDuracion_j1++;
            youWin();
         } else {
            tiempoDuracion++;
            gameOver();
         }
         return;
      }
   }, 1000);
}

// Rutas de las imágenes
window.pausa = "../img/icono pausa/pausa.svg";
window.reanudar = "../img/icono pausa/reanudar.svg";
window.deteccionTeclasActivada = true;

//# EVENTO DEL BOTON PAUSA
let fondoOscuro = document.getElementById("fondoOscuro");
let pausaButton = document.getElementById("pausasvg");

pausaButton.addEventListener("click", function () {
   play4("../audio/click.mp3");
   audioPista.pause();
   fondoOscuro.style.display = "block";

   window.pausaEstado = true;

   //# Cambiar el contenido SVG al hacer clic
   pausaButton.src = reanudar;

   if (estadoYouWin !== true && endgame !== true) {
      audio.currentTime = 0;
   }

   audio.play();

   //# PAUSA LA CUENTA REGRESIVA CUANDO PRESIONA EL BOTON DE PAUSA
   clearInterval(countdownInterval);

   window.deteccionTeclasActivada = false;

   newgame.classList.remove("no-display");
   abandonar.classList.remove("no-display");

   const tablaEstadisticas = document.querySelector("#tablaEstadisticas");
   tablaEstadisticas.style.display = "none";

   window.deteccionTeclasActivada = false;

   if (audio2 !== null) {
      audio2.pause();
   }
});

// EVENTO DEL FONDO OSCURO
fondoOscuro.addEventListener("click", function () {
   // Oculta el fondo oscuro al hacer clic en él
   fondoOscuro.style.display = "none";
   // Vuelve al contenido SVG original
   pausaButton.src = estadoOscuro ? "../img/icono pausa/pausa2.svg" : pausa;
   deteccionTeclasActivada = true;

   if (abandonarEstado != true && estadoYouWin != true && endgame != true) {
      audio.pause();
   }

   newgame.classList.add("no-display");
   abandonar.classList.add("no-display");

   if (estadoYouWin != true && endgame != true && jugadorEstado == true) {
      if (pausaEstado == true || abandonarEstado == true) {
         startCountdown(window.seconds);
      }
   }

   if (estadoYouWin == true) {
      clearInterval(countdownInterval);
   }

   if (seconds > 0 && seconds <= 5 && abandonarEstado != true) {
      play2("../audio/5seconds.mp3");
   }
});

const fondoOscuro2 = document.querySelector("#fondoOscuro2");

fondoOscuro2.addEventListener("click", function () {
   fondoOscuro2.style.display = "none";
});

const facil = document.querySelector("#facil");
facil.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const menu = document.querySelector("#menu");
   const juego = document.querySelector("#juego");
   const logo = document.querySelector("#logo");
   const pausa = document.querySelector("#pausa");
   const modo = document.querySelector("#modo");
   const text_modo = document.querySelector("#text_modo");
   const cuenta_regresiva = document.querySelector("#clock");
   const puntuacion = document.querySelector("#puntuacion");
   const nivel = document.querySelector("#nivel");
   const addWord = document.querySelector("#addWord");

   menu.classList.remove("menu");
   menu.classList.add("no-display");
   juego.classList.remove("no-display");
   juego.classList.add("juego");
   logo.classList.add("no-display");
   pausa.classList.remove("no-display");
   modo.classList.add("no-display");
   text_modo.classList.add("no-display");
   cuenta_regresiva.classList.remove("no-display");
   puntuacion.classList.remove("no-display");
   nivel.classList.remove("no-display");
   newgame.classList.add("no-display");
   abandonar.classList.add("no-display");

   abandonarEstado = false;
   audio.pause();

   window.dificultad = 0;
   window.puntuacionValor = 70;
   window.puntuacionValor_j1 = 70;
   window.puntuacionValor_j2 = 70;
   window.inicial = puntuacionValor;
   const puntuacionValorElement = document.getElementById("puntuacionValor");

   window.aciertos = 0;
   window.errores = 0;
   window.puntosGanados = 0;
   window.puntosPerdidos = 0;
   window.tiempoDuracion = 0;
   window.totalLetras = 0;
   window.nivel = 1;

   if (jugadorEstado == true) {
      document.getElementById("nivelTexto").textContent = "Nivel: ";
      document.getElementById("nivelValor").textContent = window.nivel;
      puntuacionValorElement.textContent = puntuacionValor;
      window.maxNivel = 6;
      newGame();
   } else {
      puntuacionValorElement.textContent = puntuacion_j1;
      turnoJugador.classList.add("state-nodisplay2");
      document.getElementById("nivelTexto").textContent = "Turno de: ";
      document.getElementById("nivelValor").textContent = jugador1;
      window.maxNivel = 4;

      addWord.classList.add("no-display");
      addWord.classList.remove("addWord");
      newGame();
   }
});

const medio = document.querySelector("#medio");

medio.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const menu = document.querySelector("#menu");
   const juego = document.querySelector("#juego");
   const logo = document.querySelector("#logo");
   const pausa = document.querySelector("#pausa");
   const modo = document.querySelector("#modo");
   const text_modo = document.querySelector("#text_modo");
   const cuenta_regresiva = document.querySelector("#clock");
   const puntuacion = document.querySelector("#puntuacion");
   const nivel = document.querySelector("#nivel");
   const addWord = document.querySelector("#addWord");

   menu.classList.remove("menu");
   menu.classList.add("no-display");
   juego.classList.remove("no-display");
   juego.classList.add("juego");
   logo.classList.add("no-display");
   pausa.classList.remove("no-display");
   modo.classList.add("no-display");
   text_modo.classList.add("no-display");
   cuenta_regresiva.classList.remove("no-display");
   puntuacion.classList.remove("no-display");
   nivel.classList.remove("no-display");
   newgame.classList.add("no-display");
   abandonar.classList.add("no-display");

   abandonarEstado = false;
   audio.pause();

   window.dificultad = 1;
   window.puntuacionValor = 60;
   window.puntuacionValor_j1 = 60;
   window.puntuacionValor_j2 = 60;
   window.inicial = puntuacionValor;
   const puntuacionValorElement = document.getElementById("puntuacionValor");

   window.aciertos = 0;
   window.errores = 0;
   window.puntosGanados = 0;
   window.puntosPerdidos = 0;
   window.tiempoDuracion = 0;
   window.totalLetras = 0;
   window.nivel = 1;

   if (jugadorEstado == true) {
      puntuacionValorElement.textContent = puntuacionValor;
      document.getElementById("nivelTexto").textContent = "Nivel: ";
      document.getElementById("nivelValor").textContent = window.nivel;
      window.maxNivel = 6;
      newGame();
   } else {
      puntuacionValorElement.textContent = puntuacion_j1;
      document.getElementById("nivelTexto").textContent = "Turno de: ";
      document.getElementById("nivelValor").textContent = jugador1;
      window.maxNivel = 4;
      turnoJugador.classList.add("state-nodisplay2");

      addWord.classList.add("no-display");
      addWord.classList.remove("addWord");
      newGame();
   }
});

const dificil = document.querySelector("#dificil");

dificil.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const menu = document.querySelector("#menu");
   const juego = document.querySelector("#juego");
   const logo = document.querySelector("#logo");
   const pausa = document.querySelector("#pausa");
   const modo = document.querySelector("#modo");
   const text_modo = document.querySelector("#text_modo");
   const cuenta_regresiva = document.querySelector("#clock");
   const puntuacion = document.querySelector("#puntuacion");
   const nivel = document.querySelector("#nivel");
   const addWord = document.querySelector("#addWord");

   menu.classList.remove("menu");
   menu.classList.add("no-display");
   juego.classList.remove("no-display");
   juego.classList.add("juego");
   logo.classList.add("no-display");
   pausa.classList.remove("no-display");
   modo.classList.add("no-display");
   text_modo.classList.add("no-display");
   cuenta_regresiva.classList.remove("no-display");
   puntuacion.classList.remove("no-display");
   nivel.classList.remove("no-display");
   newgame.classList.add("no-display");
   abandonar.classList.add("no-display");

   abandonarEstado = false;
   audio.pause();

   window.dificultad = 2;
   window.puntuacionValor = 50;
   window.puntuacionValor_j1 = 50;
   window.puntuacionValor_j2 = 50;
   window.inicial = puntuacionValor;
   const puntuacionValorElement = document.getElementById("puntuacionValor");

   window.aciertos = 0;
   window.errores = 0;
   window.puntosGanados = 0;
   window.puntosPerdidos = 0;
   window.tiempoDuracion = 0;
   window.totalLetras = 0;
   window.nivel = 1;

   if (jugadorEstado == true) {
      puntuacionValorElement.textContent = puntuacionValor;
      document.getElementById("nivelTexto").textContent = "Nivel: ";
      document.getElementById("nivelValor").textContent = window.nivel;
      window.maxNivel = 6;
      newGame();
   } else {
      puntuacionValorElement.textContent = puntuacion_j1;
      turnoJugador.classList.add("state-nodisplay2");
      document.getElementById("nivelTexto").textContent = "Turno de: ";
      document.getElementById("nivelValor").textContent = jugador1;
      window.maxNivel = 4;

      addWord.classList.add("no-display");
      addWord.classList.remove("addWord");

      newGame();
   }
});

tablaEstadisticas = document.querySelector("#tablaEstadisticas");
tablaEstadisticas.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const tablaEstadisticas = document.querySelector("#tablaEstadisticas");
   tablaEstadisticas.style.display = "none";

   clearInterval(countdownInterval);
});

function calcularEstadisticas() {
   if (jugadorEstado == true) {
      puntosWin = document.querySelector("#puntosGanados");
      puntosWin.textContent = window.puntosGanados;

      puntosGameOver = document.querySelector("#puntosPerdidos");
      puntosGameOver.textContent = window.puntosPerdidos;

      duracionTotal = document.querySelector("#tiempoDuracion");
      duracionTotal.textContent = window.tiempoDuracion + "s";

      const tablaEstadisticas = document.querySelector("#tablaEstadisticas");
      tablaEstadisticas.style.display = "block";

      presicion = document.querySelector("#presicion");
      porcentajePrecision = (aciertos / totalLetras) * 100;

      if (totalLetras == 0) {
         porcentajePrecision.textContent = "0%";
      } else {
         presicion.textContent = porcentajePrecision.toFixed(0) + "%";
      }
   } else {
      const tablaEstadisticas = document.querySelector("#tablaEstadisticas");
      tablaEstadisticas.style.display = "block";

      player1 = document.querySelector("#jugador1");
      player1.textContent = window.jugador1;
      player2 = document.querySelector("#jugador2");
      player2.classList.remove("no-display");
      player2.textContent = window.jugador2;

      const letrasAcertadas = document.querySelector("#letrasAcertadas");
      letrasAcertadas.textContent = window.aciertos_j1;
      window.letrasAcertadas_j2 = document.querySelector("#letrasAcertadas2");
      letrasAcertadas_j2.classList.remove("no-display");
      letrasAcertadas_j2.textContent = window.aciertos_j2;

      const letrasIncorrectas = document.querySelector("#letrasIncorrectas");
      letrasIncorrectas.textContent = window.errores_j1;
      window.letrasIncorrectas_j2 = document.querySelector(
         "#letrasIncorrectas2"
      );
      letrasIncorrectas_j2.classList.remove("no-display");
      letrasIncorrectas_j2.textContent = window.errores_j2;

      window.puntuacionEst_j1 = document.querySelector("#puntuacionEst");
      puntuacionEst_j1.textContent = window.puntuacionValor_j1;
      window.puntuacionEst_j2 = document.querySelector("#puntuacionEst2");
      puntuacionEst_j2.classList.remove("no-display");
      puntuacionEst_j2.textContent = window.puntuacionValor_j2;

      puntosWin = document.querySelector("#puntosGanados");
      puntosWin.textContent = window.puntosGanados_j1;
      puntosGanados2 = document.querySelector("#puntosGanados2");
      puntosGanados2.classList.remove("no-display");
      puntosGanados2.textContent = window.puntosGanados_j2;

      puntosGameOver = document.querySelector("#puntosPerdidos");
      puntosGameOver.textContent = window.puntosPerdidos_j1;
      puntosPerdidos2 = document.querySelector("#puntosPerdidos2");
      puntosPerdidos2.classList.remove("no-display");
      puntosPerdidos2.textContent = window.puntosPerdidos_j2;

      const duracionTotal_j1 = document.querySelector("#tiempoDuracion");
      duracionTotal_j1.textContent = window.tiempoDuracion_j1 + "s";
      window.duracionTotal_j2 = document.querySelector("#tiempoDuracion2");
      duracionTotal_j2.classList.remove("no-display");
      duracionTotal_j2.textContent = window.tiempoDuracion_j2 + "s";

      presicion = document.querySelector("#presicion");
      porcentajePrecision_j1 = (aciertos_j1 / totalLetras_j1) * 100;
      porcentajePrecision_j2 = (aciertos_j2 / totalLetras_j2) * 100;
      if (totalLetras_j1 == 0) {
         porcentajePrecision.textContent = "0%";
      } else {
         presicion.textContent = porcentajePrecision_j1.toFixed(0) + "%";
      }

      presicion_j2 = document.querySelector("#presicion2");
      presicion_j2.classList.remove("no-display");
      porcentajePrecision_j2 = (aciertos_j2 / totalLetras_j2) * 100;
      if (totalLetras_j2 == 0) {
         porcentajePrecision_j2.textContent = "0%";
      } else {
         presicion_j2.textContent = porcentajePrecision_j2.toFixed(0) + "%";
      }
   }
}

const logo = document.querySelector("#logo");
logo.addEventListener("click", function () {
   audio.play();
});

const multijugador = document.querySelector("#multijugador");
multijugador.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const menu = document.querySelector("#menu");
   const addWord = document.querySelector("#addWord");
   menu.classList.remove("menu");
   menu.classList.add("no-display");
   addWord.classList.remove("no-display");
   addWord.classList.add("addWord");

   window.aciertos_j1 = 0;
   window.errores_j1 = 0;
   window.totalLetras_j1 = 0;
   window.puntosGanados_j1 = 0;
   window.puntosPerdidos_j1 = 0;
   window.tiempoDuracion_j1 = 0;
   window.puntuacion_j1 = 0;

   window.aciertos_j2 = 0;
   window.errores_j2 = 0;
   window.totalLetras_j2 = 0;
   window.puntosGanados_j2 = 0;
   window.puntosPerdidos_j2 = 0;
   window.tiempoDuracion_j2 = 0;
   window.puntuacion_j2 = 0;
   window.gana_player = document.querySelector(".state-nodisplay4");

   window.contTurnos = 0;
   window.jugadorEstado = false;
   window.turnoJugador = document.querySelector(".state-nodisplay2");
});

const cancelar = document.querySelector("#cancelar");

cancelar.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const menu = document.querySelector("#menu");
   const addWord = document.querySelector("#addWord");
   menu.classList.remove("no-display");
   menu.classList.add("menu");
   addWord.classList.remove("addWord");
   addWord.classList.add("no-display");

   //# MUESTRA EL LOGO CUANDO PRESIONO EL BOTON "RETROCEDER"
   const logo = document.querySelector("#logo");
   logo.classList.remove("no-display");

   textarea.value = "";
   textarea2.value = "";

   dialog.close();
   dialog2.close();
});

window.dialog = document.querySelector("#dialog");
window.dialog2 = document.querySelector("#dialog2");
window.textarea = document.querySelector("#texto");
window.textarea2 = document.querySelector("#texto2");
const save = document.querySelector("#save");

save.addEventListener("click", function () {
   play4("../audio/click.mp3");
   const fondoOscuro2 = document.querySelector("#fondoOscuro2");

   let error = false;
   window.jugador1 = textarea.value;
   window.jugador2 = textarea2.value;
   let jugador1_2 = jugador1 + jugador2;

   if (
      jugador1 != "" &&
      jugador1.length <= 10 &&
      jugador2 != "" &&
      jugador2.length <= 10
   ) {
      for (var i = 0; i < jugador1_2.length; i++) {
         if (
            !(
               (jugador1_2[i] >= "A" && jugador1_2[i] <= "Z") ||
               (jugador1_2[i] >= "a" && jugador1_2[i] <= "z") ||
               jugador1_2[i] == "á" ||
               jugador1_2[i] == "é" ||
               jugador1_2[i] == "í" ||
               jugador1_2[i] == "ó" ||
               jugador1_2[i] == "ú" ||
               jugador1_2[i] == "Á" ||
               jugador1_2[i] == "É" ||
               jugador1_2[i] == "Í" ||
               jugador1_2[i] == "Ó" ||
               jugador1_2[i] == "Ú" ||
               jugador1_2[i] == "ñ" ||
               jugador1_2[i] == "Ñ"
            )
         ) {
            error = true;
         }
      }
      if (error == true) {
         dialog.show();
         dialog.addEventListener("click", () => dialog.close());
         dialog2.close();
      } else {
         fondoOscuro2.style.display = "block";
         dialog.close();
         dialog2.close();
      }
   } else {
      dialog2.show();
      dialog2.addEventListener("click", () => dialog2.close());
      dialog.close();
   }
});

dialog.addEventListener("click", function () {
   play4("../audio/click.mp3");
});

dialog2.addEventListener("click", function () {
   play4("../audio/click.mp3");
});

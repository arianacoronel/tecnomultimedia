let j; // 
let imagenes = []; // Arreglo para almacenar las imágenes
let gifs = [];


function preload() {
  
  // Precarga de imágenes 
  for (let i = 0; i < 11; i++) {
    imagenes[i] = loadImage('imagenes/img' + i + '.png');
  }
  
   for (let i = 1; i < 3; i++) {
    gifs[i] = loadImage('imagenes/giphy' + i + '.gif');
  }
  
}

function setup() {
  createCanvas(600, 600); 
  j = new juego(); // Creación de una instancia del juego
}

function draw() {
  j.actualizar(); // Llama a la función actualizar del juego
}

function keyPressed() {
  j.teclaPresionada(key); // Llama a la función teclaPresionada del juego y pasa la tecla presionada como parámetro
}

function mouseClicked() {
  clicX = mouseX; // Guarda la posición X del clic del mouse
  clicY = mouseY; // Guarda la posición Y del clic del mouse
  j.mouseClickeado(true); // Llama a la función mouseClickeado del juego con el parámetro clickeado establecido en true
}

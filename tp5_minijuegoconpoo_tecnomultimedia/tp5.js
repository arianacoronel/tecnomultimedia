//videoo
//https://youtu.be/X12HVZn39_8

let j; // 
let imagenes = []; // Arreglo para almacenar las imágenes

function preload() {
  
  // Precarga de imágenes 
  for (let i = 0; i < 11; i++) {
    imagenes[i] = loadImage('imagenes/img' + i + '.png');
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

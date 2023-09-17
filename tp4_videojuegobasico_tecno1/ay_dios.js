//Ariana Coronel Nehuen 94023/1
//comision 2
//video de explicacion https://youtu.be/5QrnEKggqNg
//tp4 videojuego basico / froggie


// Declaración de variables
var tiempoInicio;
let colorataque;
var estado = 0;
var contador = 0;
let miFuente;

// Moscas
var cant = 20;
var cantmostrar = 10;
var pox=[], poy=[], velx=[], vely=[];
var moscasAtrapadas = [];

// Arreglo para las imágenes
var gif;
var gif2;
var pantalla = []; 
var cantidadPantalla = 14; 

// Cargar imágenes y fuentes
function preload() {
  for (var i = 1; i <= cantidadPantalla; i++) {
    pantalla[i] = loadImage ('img' + i + '.png');
  }
  
  gif = loadImage("rana.gif");
  gif2 = loadImage("rana2.gif");
  miFuente = loadFont('PixelEmulator.ttf');
  
}

function setup() {
  let miCanvas = createCanvas(612, 612);
  miCanvas.position(350, 0);
  print(windowWidth, windowHeight);
  
  iniciarmosca();
}

function draw() {
 
  console.log(mouseX, mouseY);

  // Lógica de estados
  if (estado == 0){
    inicio();
    image(gif, 250, 390);
    image(pantalla[13], 250, 540);
    
  } else if (estado == 1){
    instrucciones();
    
  } else if (estado == 2){
    jugando();
    actualizarmosca();
    dibujarana();
    colision();
    puntos();
    
  } else if (estado == 3){
    ganaste();
    image(gif2, 210, 316);
    
  } else if (estado == 4){
    image(pantalla[14], 0, 0);
  }
}

function mouseClicked(){
  if(estado === 0 && mouseX < 250+120 && mouseX > 250 && mouseY < 540+50 && mouseY > 540){
    estado = 4;
  }
}

function keyTyped() {
  if (keyCode == ENTER) {
    estado = 0;
  }
}

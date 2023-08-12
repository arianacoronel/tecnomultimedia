//Ariana Coronel 94023/1
//aventura grafica, patito feo
//trabajo corregido!


//declaración
int cp = 15;
int ct = 12;
String[] textos = new String[ct];
PImage[] patitos =  new PImage[cp];
int estado;
PFont miFuente;


void setup(){
size( 600, 600);

//asignación


//textos
textos = loadStrings("textos.txt");
for( int i = 0 ; i < ct; i++ ){
println( i + ": " + textos[i] );
}

miFuente = createFont("PIXELADE.TTF", 27);


//imagenes
for( int i = 0 ; i < cp; i++ ){
  patitos[i] = loadImage( "pantalla" + i + ".png" );
}

estado = 0;}


void draw(){
  switch(estado){
    case 0:
    image(patitos[0], 0, 0);
    boton(250,510,"creditos");
    
    break;
    
    case 1:
    image(patitos[1], 0, 0);
    textFont(miFuente);
    text(textos[0], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 2:
    image(patitos[2], 0, 0);
    textFont(miFuente);
    text(textos[1], 20, 420,570,300);
    boton(400,510,"se va");
    boton(200,510,"se queda");
    break;
    
    case 3:
    image(patitos[3], 0, 0);
    textFont(miFuente);
    text(textos[2], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 4:
    image(patitos[4], 0, 0);
    textFont(miFuente);
    text(textos[3], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 5:
    image(patitos[5], 0, 0);
    textFont(miFuente);
    text(textos[4], 20, 420,570,300);
    boton(400,510,"calmada");
    boton(200,510,"brusca");
    break;
    
    case 6:
    image(patitos[6], 0, 0);
    textFont(miFuente);
    text(textos[5], 20, 420,570,300);
    break;
    
    case 7:
    image(patitos[7], 0, 0);
    textFont(miFuente);
    text(textos[6], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 8:
    image(patitos[8], 0, 0);
    textFont(miFuente);
    text(textos[7], 20, 420,570,300);
    break;
    
    case 9:
    image(patitos[9], 0, 0);
    textFont(miFuente);
    text(textos[8], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 10:
    image(patitos[10], 0, 0);
    textFont(miFuente);
    text(textos[9], 20, 420,570,300);
    boton(400,510,"acepta");
    boton(200,510,"rechaza");
    break;
    
    case 11:
    image(patitos[11], 0, 0);
    textFont(miFuente);
    text(textos[10], 20, 420,570,300);
    boton(250,510,"siguiente");
    break;
    
    case 12:
    image(patitos[12], 0, 0);
    textFont(miFuente);
    text(textos[11], 20, 420,570,300);
    break;
    
    case 13:
    image(patitos[13], 0, 0);
    textFont(miFuente);
    text(textos[12], 20, 420,570,300);
    break;
    
    case 14:
    image(patitos[14], 0, 0);
    break;
    
  }
}
  
 
void keyPressed() {
  
  if (keyCode == ENTER){
    estado = 0 ;
  }else if( estado == 0 && key == ' ' ){
    estado = 1; }
}
  
//al final si podia usar la misma funcion porque tienen diferentes parametros!!

void mousePressed(){

 if (estado == 0 && dentrodelboton(250, 510)) {
    estado = 14;
  } else if (estado == 1 && dentrodelboton(250, 510)) {
    estado = 2;
  } else if (estado == 2 && dentrodelboton(200, 510)) {
    estado = 3;
  } else if (estado == 2 && dentrodelboton(400, 510)) {
    estado = 4;
  } else if (estado == 3 && dentrodelboton(250, 510)) {
    estado = 5;
  } else if (estado == 5 && dentrodelboton(200, 510)) {
    estado = 6;
  } else if (estado == 5 && dentrodelboton(400, 510)) {
    estado = 7;
  } else if (estado == 7 && dentrodelboton(250, 510)) {
    estado = 8;
  } else if (estado == 4 && dentrodelboton(250, 510)) {
    estado = 9;
  } else if (estado == 9 && dentrodelboton(250, 510)) {
    estado = 10;
  } else if (estado == 10 && dentrodelboton(200, 510)) {
    estado = 11;
  } else if (estado == 10 && dentrodelboton(400, 510)) {
    estado = 13;
  } else if (estado == 11 && dentrodelboton(250, 510)) {
    estado = 12;
  } 
}
  

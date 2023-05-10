//ariana coronel
//tp1 pinguino tecno1 <3



//imagenes
PImage pingui;
PImage pinguiuno;
PImage pinguidos;
PImage pinguitres;

//maquina de estados
int marcaeneltiempo;
int estado;
int diferenciaTemporal;

//boton
boolean estoyenbotoncomienzo;
boolean estoyenbotonreinicio;
color botoncolor;

//texto
color colorblanco;
PFont miFuentePorInterfaz;
float posx;
float posy;
float size;




void setup(){
  size(640,480);
  
  //asignar variable
  
  //imagen
  pingui= loadImage("pingui.png");
  pinguiuno= loadImage("pingui1.png");
  pinguidos= loadImage("pingui2.png");
  pinguitres= loadImage("pingui3.png");
  
  //maquinadeestados
  estado = 0;
  marcaeneltiempo = millis();
  
  //boton
  estoyenbotoncomienzo = true;
  estoyenbotonreinicio = true;
  botoncolor = color(250);
  
  //texto
  miFuentePorInterfaz = loadFont("TrebuchetMS-20.vlw");
  posx = 640;
  posy = 0;
  size = 1;
} 

void draw(){
  
   diferenciaTemporal = millis() - marcaeneltiempo;
  
  //maquina de estados
  
  //estado 0
  if( estado == 0 ){  
    image(pingui,0,0);
    posy = 30;
    
    //boton para comenzar
     estoyenbotoncomienzo = ( mouseX > 260 ) && ( mouseX < 260+100 ) && ( mouseY > 400) && ( mouseY < 400+50); 
     
     if(estoyenbotoncomienzo){
      botoncolor = 200;} 
    else {botoncolor = 250;}
    
    fill(botoncolor);
    rect(260,400,100,50);
    noStroke();
    
    fill(50);
    textFont(miFuentePorInterfaz);
    text("comenzar",268,430);
    
    
    
    
    //estado 1
  }else if (estado == 1 ){
     image(pinguiuno,0,0);  
     
    //texto
    textFont(miFuentePorInterfaz);
    textSize(25);
    text("Los pingüinos emperador, curiosamente,\n pertenecen a la clase de las aves y representan \n al orden de los Sphenisciformes y la familia \n Spheniscidae Se identifican como una especie \n separada bajo el nombre de Pingüino emperador",0,posy);
    fill(colorblanco = colorblanco - 1);
    
    posy = posy + 0.55;
    
    if(posy >= 360){
    posy = 30;}
    
    if(colorblanco <= 0){
      colorblanco = 250;}
    
    if( diferenciaTemporal >= 10000 ){  
      estado = 2;
      marcaeneltiempo = millis();}
  
      
      
      
      //estado2
    }else if (estado == 2 ){
     image(pinguidos,0,0); 
     
     //texto
    textFont(miFuentePorInterfaz);
    textSize(25);
    text("Los pingüinos adultos \n alcanzan principalmente \n los 120 cm de longitud \n aunque pueden encontrarse \n individuos de hasta 140, \n El peso medio de los pingüinos \n es de unos 40 kilogramos. \n En general,las hembras son \n más pequeñas que los machos",posx,100);
    fill(229,92,0);
    
    posx = posx - 1;
    
    if(posx <= -350){
    posx = 640;}
  
    if( diferenciaTemporal >= 16500 ){  
      estado = 3;
      marcaeneltiempo = millis();}
      
      
      
      
      //estado3
    }else if (estado == 3){
     image(pinguitres,0,0);
     
     //texto
    fill(216,190,0);
    textFont(miFuentePorInterfaz);
    textSize(size);
    text("El único lugar geográfico\ndel planeta donde viven\nlos pingüinos emperadores\nes la Antártida.En esta zona,\npueden encontrarse en\ngrupos que van de decenas\na cientos de individuos.\nPrefieren quedarse en el\nborde del continente,\ndonde hay muchos\nbloques de hielo.",0,50);
 
    size = size +0.1;
    
    if(size >= 30){size = 30;}
    
    //boton
    estoyenbotonreinicio = ( mouseX > 350 ) && ( mouseX < 350+100 ) && ( mouseY > 400) && ( mouseY < 400+50);
    
     if(estoyenbotonreinicio){
      botoncolor = 200;} 
    else {botoncolor = 250;}
    
    fill(botoncolor);
    rect(350,400,100,50);
    noStroke();
    
    fill(50);
    textFont(miFuentePorInterfaz);
    text("REINICIAR",355,430);
    }
}




void mousePressed(){
  
  //botoncomienzo
  if(estoyenbotoncomienzo && estado == 0){
    estado = 1;
    marcaeneltiempo = millis();
    estoyenbotoncomienzo=false;}
    
    //botonreinicio
  else if(estoyenbotonreinicio && estado == 3){
    estado = 1;
    marcaeneltiempo = millis();
    estoyenbotonreinicio=false;} 
}

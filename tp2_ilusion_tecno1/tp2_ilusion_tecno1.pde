
//La ilusión de la cuadrícula de Hermann

//video explicativo
//https://youtu.be/opBjYjyC4Cg

PImage ilusion;
int espacio=60;
int espacioC=60;
int tamcircle=15;
color colorcirculo=color(255);
color colorcuadrado=color(0);
void setup(){
size(800,400);
}

void draw(){
background(#8E8E8E);
ilusion = loadImage("ilusion.png");
image(ilusion,0,0);
noStroke();

 for(int xs=400; xs<width; xs+=espacio){
   for(int ys=0; ys<height; ys+=espacio){
 fill(colorcuadrado);
 square(xs, ys, 52);
   }
 }
 
for(int xc=455; xc<width; xc+=espacioC){
   for(int yc=55; yc<height; yc+=espacioC){
 fill(colorcirculo);
 circle(xc, yc, tamcircle);
   }
 }
}
void keyPressed() {
  if (key == 'n') {
    colorcuadrado = color(0);
    colorcirculo = color(255);
  }
  
  if (key == 'p') {
    colorcuadrado = color(255);
    colorcirculo = color(0);
  }
  }
  
void mouseMoved(){
  if (mouseX > 400 && mouseX < 800 && mouseY > 0 && mouseY < 400) {
       espacio= int(map(mouseX,400,800,60,72));
        espacioC= int(map(mouseX,400,800,60,74));
       tamcircle= int(map(mouseX,400,800,15,38));
     }
   }  
   

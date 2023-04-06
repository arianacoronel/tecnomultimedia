//tp 1
PImage pinguiiii;


void setup (){

  //fondo
  size (800,400);
  background (150);
  noStroke();
   fill(230);
  rect(0,250,400,250);
  
  //imagen
  pinguiiii= loadImage("pinguiiii.jpg");
  image(pinguiiii,400,0);
  
  //montañas
  fill(200);
  triangle(0,250,70,250,0,120);
  triangle(90,250,170,250,130,170);
  triangle(320,250,400,250,400,100);
}

void draw(){
  
   //patita
    fill(20);
  triangle(125,347,200,343,140,329);
    fill(35);
  triangle(210,355,125,355,145,337);
  
  //cuerpo
  noStroke();
  fill(110);
  triangle(200,130,299,239,260,81);
  triangle(131,228,159,129,246,180);
  circle(213,265,180);
  rect(157,130,100,60);
  fill(130);
  triangle(180,160,250,160,213,265);
 
  
  
//cara
  fill(50);
  circle(213,92,95);
  triangle(150,75,147,100,127,88);
  fill (250);
  triangle(210,140,159,129,146,100);
  fill(50);
  circle(169,92,50);
  triangle(159,69,196,47,175,70);
  fill(250);
  triangle(171,117,210,140,226,106);
  circle(200,97,55);
  fill(0);
  circle(195,97,18);
   fill(110);
  rect(157,130,100,50);

}

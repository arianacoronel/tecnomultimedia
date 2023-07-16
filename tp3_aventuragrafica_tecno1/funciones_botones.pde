//funcion propia con parametros
color colorrelleno;

void boton(int px,int py,String mensaje){
     if (dentrodelboton(px, py)) {
    colorrelleno = color(50);
  } else {
    colorrelleno = color(0);
  }
  
  stroke(250);
  fill(colorrelleno);
  rect(px, py, 100, 50);
  
  fill(250);
  textFont(miFuente);
  text(mensaje,px+15, py+30);
 
}

void boton2(int pox,int poy,String mensaje){
     if (dentrodelboton(pox, poy)) {
    colorrelleno = color(50);
  } else {
    colorrelleno = color(0);
  }
  
  stroke(250);
  fill(colorrelleno);
  rect(pox, poy, 100, 50);
  
  fill(250);
  textFont(miFuente);
  text(mensaje,pox+15, poy+30);
  
}
 


boolean dentrodelboton(int px, int py) {
return mouseX > px && mouseX < px + 100 && mouseY > py && mouseY < py + 50;
}

boolean dentrodelboton2(int pox, int poy) {
return mouseX > pox && mouseX < pox + 100 && mouseY > poy && mouseY < poy + 50;
}

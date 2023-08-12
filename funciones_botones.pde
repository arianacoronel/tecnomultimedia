//funcion propia con parametros
//al final si podia usar la misma funcion porque tienen diferentes parametros!!



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


boolean dentrodelboton(int px, int py) {
  return mouseX > px && mouseX < px + 100 && mouseY > py && mouseY < py + 50;
}

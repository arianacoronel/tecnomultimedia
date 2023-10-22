class huevo{
  
constructor(pox,poy){
this.pox= pox ;
this.poy= poy;
this.disparado=false;
this.vel=15;
}

actualizar(){
this.dibujar();
}

dibujar() {
  // Imprime la posición actual en la consola
  console.log("posicion", this.poy);

  if (this.disparado) {
    image(imagenes[7], this.pox, this.poy);
    this.mover(); 
  } else {
    image(imagenes[6], this.pox, this.poy);
  }
}


disparar(){
this.disparado = true;
}


mover() {
  this.poy -= 20;
  if(this.poy <= 350){
  this.disparado = false;
    }
}
}
//se mueve y se dibuja solo aqui

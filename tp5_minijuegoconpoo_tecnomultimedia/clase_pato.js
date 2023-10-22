class pato{

constructor(){
this.poy= 490; //fijo
// Crea una instancia de Huevo y pasa las coordenadas del pato
this.huevo = new huevo();
}

actualizar(){
this.dibujar();
}

dibujar(){
this.pox= mouseX;
this.huevo.dibujar();
image(imagenes[10], this.pox, this.poy);}

dispararHuevo() {
    // Crea una instancia de Huevo y pasa las coordenadas del pato
    this.huevo = new huevo(this.pox, this.poy);
    this.huevo.disparar();
     }
     
//controlar el disparo del huevo y su movimiento 
//huevo disparado
mouseClickeado(clickeado) {
  if (clickeado) {
    console.log("Huevo disparado");
    this.dispararHuevo(); 
  }
}
}
//indica que se tenga que disparar la bala

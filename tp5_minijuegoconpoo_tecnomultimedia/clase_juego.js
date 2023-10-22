//clase madre
class juego{

  constructor(){
  //nuevas instancias 
  // paso como parametro = lista
  this.gato = new gato(imagenes);
  this.pato=new pato();
  this.huevo=new huevo();
  this.estado= 0;
  this.comienzaeljuego=false;
  }

  actualizar(){
  //logica estados
  if(this.estado == 0){
  image(imagenes[9], 0, 0); 
  }
  else if(this.estado ==1){
  image(imagenes[8],0,0);
  if(this.comienzaeljuego){
  this.gato.actualizar();
  this.pato.actualizar();
  this.huevo.actualizar(); 
  this.controlarcolision();
  }

  }
  }

controlarcolision() {
  if (this.huevo.disparado) {
    this.gato.atacado(this.huevo); //huevo como argumento
  }
}


teclaPresionada(key) {
   if (this.estado === 0 && key === ' ') {
     this.estado = 1;
     this.comienzaeljuego = true;
   }
}

mouseClickeado(clickeado) {
    this.pato.mouseClickeado(clickeado, clicX, clicY); // Pasa las coordenadas del clic a Pato por parametro
  }
}

class gato {

  constructor(imagenes, pox, poy) {
    this.pox = 0;
    this.poy = 310; //(fija)
    this.vel = 15; // Velocidad
    this.cantvida = 3;
    this.vive = true;
    frameRate(8);
    this.recibiendoDano = false; // Nueva variable
    this.imagenes = imagenes; // Asigno una propiedad a la instancia de la clase
  }

  dibujar() {
    // Dibuja al gato si está vivo
    if (this.vive) {
      image(imagenes[0], this.pox, this.poy);
    } 
    else if (this.recibiendoDano){
       console.log("Dibujando gato recibiendo daño");
      image(imagenes[frameCount%5],this.pox, this.poy );
    }
  }

  actualizar() {
    console.log("Vidas: " + this.cantvida);
    console.log("gato vive:" + this.vive);

    this.dibujar(); // Dibuja al gato en la pantalla
    this.movimiento(); // Controla el movimiento del gato
    this.muere();
  }

  atacado(huevo) {

    // Verifica si un huevo ha impactado en el gato
    if (huevo.disparado && (dist(this.pox, this.poy, huevo.pox, huevo.poy)) < 60) {
      this.recibirDano(); // El gato recibe daño
    }
  }

  movimiento() {
    // Controla el movimiento del gato

    // Desplaza al gato en el eje X
    this.pox += this.vel;

    // Control de colisión con los bordes
    if (this.pox >= 500) {
      this.vel -= 15; // Cambia la dirección
    }

    if (this.pox <= 0) {
      this.vel += 15; // Cambia la dirección
    }
  }

  recibirDano() {
    this.cantvida -= 1;
    this.recibiendoDano = true;
  }

  muere() {
    if (this.cantvida <= 0) {
      this.vive = false;
    }
  }
  
  reiniciar(){
    this.cantvida = 3;
    this.vive = true;
    this.recibiendoDano = false; 
     }

  
}

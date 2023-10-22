class gato {
  
  constructor(imagenes) {
    this.pox = 0; 
    this.poy = 310; //(fija)
    this.vel = 15; // Velocidad
    this.cantvida = 3; 
    this.vive = true; 
    frameRate(9); 
    this.imagenes = imagenes; // Asigno una propiedad a la instancia de la clase
  }

  dibujar() {
    // Dibuja al gato si está vivo
    if (this.vive) {
      image(imagenes[0], this.pox, this.poy);
    }
  }

  actualizar() {
    console.log("Vidas: " + this.cantvida);
    this.dibujar(); // Dibuja al gato en la pantalla
    this.movimiento(); // Controla el movimiento del gato
  }

  atacado(huevo) {
    // Verifica si un huevo ha impactado en el gato
    if (dist(this.pox, this.poy, huevo.pox, huevo.poy) < 50) {
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
  }
}

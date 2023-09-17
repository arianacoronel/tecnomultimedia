function instrucciones() {
  
  // Control de opacidad y tiempo de duración
  push();
  tiempoInicio++;

  if (tiempoInicio >= 260 && color > 0) {
    color -= 2;
  }

  // Imagen con la opacidad aplicada
  tint(color);
  image(pantalla[2], 0, 0);
  pop();

  if (color <= 0) {
    estado = 2;
    tiempoInicio = 0;
  }
}


function inicio() {
  // Dibujar el fondo
  image(pantalla[1], 0, 0);


  // Lógica para cambiar de estado si se presiona la tecla Espacio
  if (estado == 0 && key == ' ') {
    estado = 1;
    tiempoInicio = 0;
    color = 255;
  }

}

var dibujarlengua;
var xl;
var yl;
var clicRealizado = false;
var opacidadLengua;
var opacidadRana;

function dibujarana() {
  if (mouseX < 240) {
    // Izquierda
    // imagen de rana cambia mirando a la izquierda
    //tint(colorRana);
    image(pantalla[7], 273, 430);

    tint(250, opacidadRana);
    image(pantalla[6], 273, 430);
  } else if (mouseX > 360) {
    // Derecha
    // imagen de rana cambia mirando a la derecha
    noTint();
    image(pantalla[5], 248, 430);

    tint(255, opacidadRana);
    image(pantalla[4], 248, 430);
  } else if (mouseX > 239 && mouseX < 361) {
    // Frente
    // imagen de rana cambia mirando al frente
    noTint();
    image(pantalla[9], 260, 430);

    tint(255, opacidadRana);
    image(pantalla[8], 260, 430);
  }

  if (dibujarlengua) {
    // Dibuja la lengua aquí
    push();
    noTint();
    stroke(255, 81, 81);
    strokeWeight(10);
    line(306, 475, xl, yl);
    pop();
  }
}

function mousePressed() {
  // Actualiza la posición de la lengua y la opacidad cuando se hace clic
  xl = mouseX;
  yl = mouseY;
  opacidadRana = 0;
  dibujarlengua = true;
  console.log(xl, yl, "actualizado");
}

function mouseReleased() {
  // Restaura la posición y opacidad cuando se suelta el clic
  xl = 306;
  yl = 475;
  opacidadRana = 255;
  dibujarlengua = false;
  console.log(xl, yl, "no actualizado");
}

function colision() {
  for (let i = 0; i < cantmostrar; i++) {
    if (!moscasAtrapadas[i] && dist(xl, yl, pox[i], poy[i]) < 30) {
      moscasAtrapadas[i] = true;

      //que "desaparezca"
      pox[i] = random(width);
      poy[i] = random(height);

      console.log(xl, yl, pox[i], poy[i], "Mosca atrapada");
    } else {
      moscasAtrapadas[i] = false;
    }
  }
}

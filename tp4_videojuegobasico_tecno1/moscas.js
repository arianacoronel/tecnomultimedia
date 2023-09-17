var tipodemosca = [];

function iniciarmosca() {
  for (let i = 0; i < cant; i++) {
    pox[i] = random(width);
    poy[i] = random(height);
    velx[i] = random(1, 4);
    vely[i] = random(1, 4);
    moscasAtrapadas[i] = false;

    if (random(100) < 30) {
      tipodemosca[i] = 2;
    } else {
      tipodemosca[i] = 1;
    }
  }
}

function actualizarmosca() {
  movermosca();
  dibujarmosca();
}

function movermosca() {
  // Comportamiento de movimiento

  for (let i = 0; i < cantmostrar; i++) {
    pox[i] += velx[i];
    poy[i] += vely[i];

    // Evaluar los límites
    // Invertir la velocidad para rebotar

    if (pox[i] >= width) {
      pox[i] = width;
      velx[i] = -velx[i];
    }
    if (pox[i] <= 0) {
      pox[i] = 0;
      velx[i] = -velx[i];
    }
    if (poy[i] >= 400) {
      poy[i] = 400;
      vely[i] = -vely[i];
    }
    if (poy[i] <= 0) {
      poy[i] = 0;
      vely[i] = -vely[i];
    }
  }
}

function dibujarmosca() {
  for (let i = 0; i < cantmostrar; i++) {
    // Dibujo
    push();
    translate(pox[i], poy[i]);
    imageMode(CENTER);

    if (tipodemosca[i] === 1) {
      image(pantalla[10], 0, 0);
    } else if (tipodemosca[i] === 2) {
      image(pantalla[11], 0, 0);
    }

    pop();
  }
}

function puntos() {
  for (let i = 0; i < cantmostrar; i++) {
    if (moscasAtrapadas[i] === true && tipodemosca[i] === 1) {
      contador += 10;
    } else if (moscasAtrapadas[i] === true && tipodemosca[i] === 2) {
      contador -= 10;
    }
  }

  if (contador >= 100) {
    estado = 3;
    contador = 0;
  }
}

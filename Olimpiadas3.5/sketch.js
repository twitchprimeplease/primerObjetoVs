class Barritas {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largo = 200;
    this.ancho = 50;
  }
  createBar() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.ancho, this.largo);
    noFill();
  }
  moving(my) {
    this.y = my;
  }
  movete() {
    if (key >= 'w') {
      this.y -= 50;
    } else if (key >= 's') {
      this.y += 50;
    }
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }


}




class Pelotuda {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 25;
    this.direccionX = 1;
    this.direccionY = 1;

  }
  createpelotuda() {
    fill(242, 93, 80);
    circle(this.x, this.y, this.diameter);
    noFill();
  }
  correpelotuda() {
    this.x += 5 * this.direccionX;
    this.y += 5 * this.direccionY;
    if (this.y<0||this.y>900) {
      this.direccionY *=-1;
      
    }

  }
  validatepelotudaI(derbar) {

    if (this.x > derbar.x && this.x < derbar.x + derbar.ancho && this.y > derbar.y && this.y < derbar.y + derbar.largo) {
      return true
    } else {
      return false
    }
  }

  getX() {
    return this.x;
  }

}

class Puntaje {
  constructor() {
    this.a = 0;
    this.b = 0;
  }

  plusA(Pelotuda) {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text(this.a,100,100);
    if (Pelotuda.getX() > 900) {
      this.a++;
      Pelotuda.x=450;
      Pelotuda.y=450;
    }

  }

  plusB(Pelotuda) {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text(this.b,800,100);
    if (Pelotuda.getX() < 0) {
      this.b++;
      Pelotuda.x=450;
      Pelotuda.y=450;
    }

  }

}

let izqbar;
let derbar;


function setup() {
  createCanvas(900, 900);
  izqbar = new Barritas(50, 450);
  derbar = new Barritas(750, 450);
  bolita = new Pelotuda(450, 450);
  puntosA = new Puntaje();
  puntosB = new Puntaje();


}

function draw() {
  background(220);
  izqbar.createBar();
  derbar.createBar();
  bolita.createpelotuda();
  bolita.correpelotuda();
  puntosA.plusA(bolita);
  contactoPositivo();
  puntosB.plusB(bolita);

}

function contactoPositivo() {
  if (bolita.validatepelotudaI(derbar)) {
    console.log("Please");
    bolita.direccionX *=-1;
    bolita.x=derbar.x-bolita.diameter/2;
  }
  if (bolita.validatepelotudaI(izqbar)) {
    console.log("Please");
    bolita.direccionX *=-1;
    bolita.x=izqbar.x+izqbar.ancho+bolita.diameter/2;
  }
}

function mouseMoved() {
  derbar.moving(mouseY);

}
function keyPressed() {
  izqbar.movete();
}


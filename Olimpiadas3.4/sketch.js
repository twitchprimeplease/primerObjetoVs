class Casilla{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.estado = 0;
  }
  pintar(){
    textAlign(CENTER);
    switch(this.estado){
      case 0:
        fill(255);
        break;
        case 1:
        fill(0);
        textSize(32);
        text('O',this.x+50,this.y+60);
        break;
        case 2:
          fill(0);
          textSize(32);
          text('X',this.x+50,this.y+60);
        break;
    }
    noFill();
    rect(this.x,this.y,100,100);
  }

  validar(mx, my){
    if(dist(this.x+50, this.y+50, mx, my)<50){
      return true;
    }
    return false;
  }

  cambiar(turno){
    if(this.estado === 0){
      this.estado = turno;
      return true;
    }
    return false;
  }

}

let turno = 1;
let casillas = [];
let casillas1 = [];
let casillas2 = [];

function setup() {  
  createCanvas(300, 300);

  let xAux = 0; 
  let yAux = 0;
  for(let i = 0; i < 9 ; i++){
    casillas[i] = new Casilla(xAux, yAux);
    xAux += 100;
    if(xAux>=300){
      xAux = 0;
      yAux+=100;
    }
  }

}

function draw() {
  background(220);
  for(let i = 0; i < 9 ; i++){
    casillas[i].pintar();
  }
}

function mousePressed() {
  for(let i = 0; i < 9 ; i++){
    if(casillas[i].validar(mouseX, mouseY)){
      if(casillas[i].cambiar(turno)){
        turno = turno===1?2:1;
        validarGanador();
      }
    }
  }
}

function validarGanador() {
  let c1=0;
  let c2=0;
  let v1h = 0;
  let v1v = 0;
  let v1d = 0
  let v2h = 0;
  let v2v = 0;
  let v2d = 0

  for(let i = 0; i < casillas.length ; i++){
    // console.log(casillas[i]);
    if(casillas[i].estado == 1){
      casillas1[c1] = casillas[i];
      c1++; 
    }  
  }


  for(let i = 0; i < casillas.length ; i++){
    if(casillas[i].estado == 2){
      casillas2[c2] = casillas[i];
      c2++; 
      // console.log(casillas2);
    }  
  }

  for (let i = 0; i < casillas1.length; i++) {
    for (let j = i; j < casillas1.length; j++) {

      if (j!=i) {
        if (casillas1[i].x==casillas1[j].x ) {
          v1v++;
          
        }
      }

      if (j!=i) {
        if (casillas1[i].y==casillas1[j].y ) {
          v1h++;
          
        }
      }
      
    }
    
  }

  for (let i = 0; i < casillas2.length; i++) {
    for (let j = i; j < casillas2.length; j++) {

      if (j!=i) {
        if (casillas2[i].x==casillas2[j].x ) {
          v2v++;
          
        }
      }

      if (j!=i) {
        if (casillas2[i].y==casillas2[j].y ) {
          v2h++;
          
        }
      }

    }
  }

  console.log(v1v);
  if(v1v==3 || v1h==3){
    alert('Gana O');
  }else if(v2v==3 || v2h==3){
    alert('Gana X');
  }

}










/*class Fichas{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.weight=70
    this.diameter=70
  }
  beRect(){
    rectMode(CENTER);
    noFill();
    strokeWeight(8);
    rect(this.x,this.y,this.weight);
  }
  beZero(){
    noFill();
    strokeWeight(8);
    circle(this.x,this.y,this.diameter)

  }



  moving(mx,my){
    this.x=mx;
    this.y=my;
  }


getX(){
  return this.x;
}
getY(){
  return this.y;
}



}
class Cuadrados{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.lado=150;
    //rect(250+(200*i),150+(200*j),150);
  }
  createCuadrados(){
    strokeWeight(2);
    fill(255);
    rect(this.x,this.y,this.lado);
  }

  validateCuadrados(vX,vY){
    if (dist(this.x,this.y,vX,vY)<75) {
      return true;
    }else {
      return false;
    }
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }

}

//0=X, 1=o
let turn = 0;
let maxTurn =0;
let cuadrado = [];
let nuevaFichaR = [];
let nuevaFichaZ = [];
let turnFichaR = 0;
let turnFichaZ = 0;



function setup() {
  createCanvas(900, 900);
  for (let index = 0; index < 5; index++) {
    nuevaFichaR.push(new Array())
  }

  for (let index = 0; index < 4; index++) {
    nuevaFichaZ.push(new Array())
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cuadrado.push(new Cuadrados (250+(200*i),150+(200*j)));
       
     
    }
  }
}


function draw() {
  background(220);
  

  cuadrado.forEach(cuadrado => {
    cuadrado.createCuadrados();
  })
   
    if (turn == 0){
      for (let i = 0; i <= turnFichaR; i++) {
        
        nuevaFichaR [i] = new Fichas (150,750);
        nuevaFichaR[i].beRect();
        
      }

    
    } else if (turn == 1){
      for (let i = 0; i < turnFichaZ; i++) {
        nuevaFichaR [i] = new Fichas (150,750);
        nuevaFichaZ[i].beZero();
        
      }
    }
}

function mouseMoved(){

}

function mousePressed() {

  if (maxTurn < 9){
    for (let i = 0; i < 9; i++) {

      if (cuadrado[i].validateCuadrados(mouseX,mouseY)) {
      
        if (turn == 0){
          turn = 1;
          maxTurn++;
          nuevaFichaZ [turnFichaZ] = new Fichas (cuadrado[i].getX(),cuadrado[i].getY());
          turnFichaZ++;

          } else if (turn == 1){
          turn = 0;
          maxTurn++;
          nuevaFichaR [turnFichaR] = new Fichas (cuadrado[i].getX(),cuadrado[i].getY());
          turnFichaR++;
      
        }
      }
    }
  }





  console.log(maxTurn);
}
*/

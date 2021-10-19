class Objetitos{
constructor(x,y){
  this.x=x;
  this.y=y;
  this.width=90;
}

aparecer(){
  fill(0)
  square(this.x,this.y,this.width)
}

}

class Helpme {
  constructor(x,y,di){
    this.x=x;
    this.y=y;
    this.di=di;
  }
  rainbow(){
    fill(166, 10, 51);
  circle(this.x,this.y,this.di)
  }
}



let numbe1;
let numbe2;
let numb;
let lighting;


function setup() {
  createCanvas(400, 400);
  numbe1=new Objetitos(200,150);
  numbe2=new Objetitos(100,150);
  numb=new Helpme(195,100,50);
  lighting=new Helpme(195,300,50);
}

function draw() {
  background(220);
  
  numbe1.aparecer();
  numbe2.aparecer();
  numb.rainbow();
  lighting.rainbow();
}

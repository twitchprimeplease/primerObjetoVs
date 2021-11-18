class Enemy{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.largo=75;
    this.ancho=45;
    this.direccionX=1;
  }
  createEnemy(){
    fill(191, 19, 225);
    rect(this.x,this.y,this.largo,this.ancho);
    

  }
  validateContact(bullet){
    if (dist(this.x, this.y, bullet.getX(), bullet.getY())<22){
      return true
    }else{
      return false
    }  

  }

  desplazar(){
    this.x +=5*this.direccionX;
    if (this.x == 775 || this.x == 0) {
      this.direccionX *=-1;
      this.y +=120;
    }

  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
}

class Bullet{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  show(){
    fill(255);
    ellipse(this.x,this.y,5,5);
  }
  move(){
    this.y-=4;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
}

class Hero{
  constructor(x,y){
    this.x=x;
    this.y=y;

  }

  createHero(){
    noStroke();
    fill(69, 89, 54);
    circle(this.x,this.y,45);
    noFill();
  }
  moving(mX){
    this.x=mX;
  }
  shoot(bullet){
    bullet.push(new Bullet(this.x,this.y));

  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }

}
let army = [];
let bullet =[];
cait = new Hero (100,850);

function setup() {
  createCanvas(775, 900);
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 2; j++) {
      army.push(new Enemy(50+(100*i),50+(60*j)))
      
     }
    
    
  }
}

function draw() {
  background(0);
  cait.createHero();
  army.forEach(enemy => {
    enemy.createEnemy();
    enemy.desplazar();
  });

  for (let i = 0; i < bullet.length; i++) {
    const element = bullet[i];
    element.show();
    element.move(cait);
    
  }
  validarBulletContact();
}

function validarBulletContact (){
  for (let bullets = 0; bullets < bullet.length; bullets++) {
    for (let enemy = 0; enemy < army.length; enemy++) {
      if(army[enemy].validateContact(bullet[bullets])){
        console.log("Please");
        army.splice(enemy,1);
        bullet.splice(bullet,1);
      }
      
    }
    
  }
}

function mouseMoved (){
  cait.moving (mouseX);

}
function mousePressed(){
  bullet.push(new Bullet(cait.getX(),cait.getY()));
}
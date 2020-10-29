var bullet;
var speed,weight,thickness;
var wall;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(20, 200, 40, 5);

  thickness=random(20,150);
  wall = createSprite(1200,200,thickness,height/2);
  
  bullet.shapeColor="white";
  wall.shapeColor = 80,80,80;
  
  // speed = m/s
  speed=random(100,200);
  // weight = N
  weight=random(30,52);
  bullet.velocityX = speed;
}

function draw() {
  background(0);
  
  if (hasCollided(bullet,wall)){
   
  bullet.velocityX=0;

   var damage=5*weight*speed*speed/(thickness*thickness*thickness);
  
   if(damage>10){
     wall.shapeColor="red";
   }
   else{
     wall.shapeColor="green";
   }
  }
  
  drawSprites();
}

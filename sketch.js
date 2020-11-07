var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90)
  weight = random(400,1500)

 thickness = random(22,83)
bullet.speed = random(223,321)
bullet.weight = random (30,52)


  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{

bullet.velocityX = 0;
var deformation = 0.5*bullet.weight*bullet.speed*speed/wall.thickness*wall.thickness*wall.thickness;

if(deformation>180){

wall.shapeColor = color(255,0,0); 
}
  
if (deformation<180 && deformation>80)
{
  wall.shapeColor = color(230,230,0)
}
if(deformation<80)
{
wall.shapeColor = color (0,255,0)
}

}

  drawSprites();
}


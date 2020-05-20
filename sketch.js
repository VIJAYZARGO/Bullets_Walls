//create a sprite
var wall, thickness;
var bullet , spped , weight;

function setup() {
  //create Canvas
   createCanvas(1600,400);

  //assign random value for thickness
  thickness = random(22,83);
}

function draw() {
  //set background black with RGB Code
  background(0,0,0);

  //bounceOff the bullets from wall
  bullet.bouceOff(wall);
  wall.bouceOff(bullet);

  //create Wall Sprite
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(233,321);
  weight = random(30,52);

  if(Collided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight * speed * speed/(thickness* thickness * thickness);

    if(damage>10){
     wall.shapeColor = color(255,0,0);
    }

    if(damage<10)(
      wall.shapeColor(0,255,0);
    )
  }

  drawSprites();
}

function Collided(Lbullet,Lwall){
  bulletRightEdge = 1bullet.x + 1bullet.width;
  wallLeftEdge = 1wall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
else{
  return false ; 
  }
}
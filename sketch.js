var car,wall
var speed,wait



function setup() {
  createCanvas(800+800,400);
 speed=random(55,90)
 weight=random(400,1500)
 car=createSprite(50,200,50,50)
 car.velocityX=speed
 car.shapeColor='black'
 wall=createSprite(1500,200,60,height/2)
 wall.shapecolor='yellow'
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0
    var deformation=0.5 * weight * speed* speed/22500
    if(deformation>180)
    {
      car.shapeColor='blue'
    }
    if(deformation<180 && deformation>100){
      car.shapeColor='green'
    }
      if(deformation<100)
      {
        car.shapeColor="red"
      }
  
  }
  
  drawSprites();
}
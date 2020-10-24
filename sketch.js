var movingRect, fixedRect;

function setup() {

  createCanvas(1200,800);

  movingRect= createSprite(200, 50, 80, 30);
  movingRect.shapeColor = "green";
  
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";

  movingRect.velocityY = 3;
  
}

function draw() {

  background(0,0,0); 
 
  
  
if (movingRect.x- fixedRect.x < movingRect.width/2+ fixedRect.width/2
 && fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2
 && movingRect.y- fixedRect.y < movingRect.height/2+ fixedRect.height/2
 && fixedRect.y- movingRect.y < movingRect.height/2+ fixedRect.height/2) {
  
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  console.log(movingRect.x- fixedRect.x);
  
  if (movingRect.x- fixedRect.x < movingRect.width/2+ fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }

    if (movingRect.y- fixedRect.y < movingRect.height/2+ fixedRect.height/2
    && fixedRect.y- movingRect.y < movingRect.height/2+ fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);

    }


  drawSprites();
  
}
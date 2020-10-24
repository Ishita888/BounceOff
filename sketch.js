var fixedRect , movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor="green"
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  gameobject1 = createSprite(100,400,50,50);
  gameobject1.shapeColor="yellow";
  gameobject2 = createSprite(200,400,50,50);
  gameobject2.shapeColor = "blue";
  gameobject3 = createSprite(300,400,50,50);
  gameobject3.shapeColor="pink";
  gameobject4 = createSprite(400,400,50,50);
  gameobject4.shapeColor="orange";
  movingRect.velocityY=-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(fixedRect.x - movingRect.x);
  if(isTouching(movingRect,gameobject3)){
    gameobject3.shapeColor="red";
    movingRect.shapeColor="red";
  } 
  else{
    gameobject3.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  
   bounceOff(movingRect,fixedRect);
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x<object2.width/2+object1.width/2 &&
     object2.x-object1.x<object2.width/2+object1.width/2 && 
    object1.y - object2.y<object2.height/2+object1.height/2 &&
     object2.y-object1.y<object2.height/2+object1.height/2)
    {
return true;
}
else{
  return false;
}
}
function bounceOff(object1,object2){
  if(object1.x - object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    if( object1.y - object2.y<object2.height/2+object1.height/2 &&
      object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
      }
     
}
//game assets
var effector = createSprite(380, 20, 20, 20);
effector.shapeColor = "black";

var burglar = createSprite(10, 390, 10, 10);
burglar.shapeColor = "pink";
var diamond = createSprite(380, 20, 20, 20);
diamond.shapeColor = "white";

var laser1 = createSprite(50, 5, 100, 10);
laser1.shapeColor = "red";
laser1.velocityY = 3;

var laser2 = createSprite(350, 380, 100, 10);
laser2.shapeColor = "red";
laser2.velocityY = -3;

var laser3 = createSprite(300, 80, 150, 10);
laser3.shapeColor = "red";
laser3.velocityX = -2;
laser3.velocityY = 2;



function draw() {
  //background to prevent drawing on top of each other
  background("black");
  
  //movement
   if (keyDown("up")) {
    burglar.velocityX = 0;
    burglar.velocityY = -2;
  }
  
  if (keyDown("down")) {
    burglar.velocityY = 2;
    burglar.velocityX = 0;
  }
  
  if (keyDown("left")) {
    burglar.velocityX = -2;
    burglar.velocityY = 0;
  }
  
  if (keyDown("right")) {
    burglar.velocityX = 2;
    burglar.velocityY = 0;
  }
  
  //lasers
  if (laser1.y >= 300) {
    laser1.velocityY = -3;
  }
  
  if (laser1.y <= 5) {
    laser1.velocityY = 3;
  }
  
  if (laser2.y >= 350) {
    laser2.velocityY = -3;
  }
  
  if (laser2.y <= 40) {
    laser2.velocityY = 3;
  }
  
  if (laser3.x >= 50 && laser3.y >= 250) {
    laser3.velocityX = 2;
    laser3.velocityY = -2;
  } 
  
  if (laser3.x <= 300 && laser3.y <= 80) {
    laser3.velocityX = -2;
    laser3.velocityY = 2;
  }
  
  //winning/losing
  if (burglar.isTouching(laser1) || burglar.isTouching(laser2) || burglar.isTouching(laser3)) {
    textSize(24);
    text("Burglar has been caught!", 50, 200);
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    laser3.setVelocity(0, 0);
    burglar.setVelocity(0, 0);
  }
  
  if (burglar.isTouching(effector)) {
    textSize(24);
    text("Burglar has stolen the diamond!", 30, 200);
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    laser3.setVelocity(0, 0);
    burglar.setVelocity(0, 0);
    diamond.destroy();
  }
  
  
  //edges
  createEdgeSprites();
  burglar.collide(edges);
  
  //draw the sprites onto the screen
  drawSprites();
}

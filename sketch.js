
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
 
  obstacleGroup= new Group();
  food1 = new Group()

  
}


function draw() {
background("white");
  

  
  if(keyDown("space")&& monkey.y >= 314.3) {
        monkey.velocityY = -12;
        monkey.velocityY = monkey.velocityY + 0.8

    }

  monkey.velocityY = monkey.velocityY + 0.8
 ground.x=ground.width/2;
  
  
    monkey.collide(ground);
  food();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  
  if (obstacleGroup.isTouching(monkey)){
    reset();
  }
  obstacles()
  
  console.log(monkey.y)
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    var banana=createSprite(120,120,20,20);
    banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.lifetime=200;
    banana.scale=0.1
    
    food1.add(banana);
    
  }
  
}

function obstacles(){
 if(frameCount%100===0) {
   obstacle=createSprite(240,315,20,20);
   obstacle.addAnimation("image",obstacleImage);
   obstacle.velocityX=-6;
   obstacle.scale=0.1
   obstacleGroup.add(obstacle);
   
 }
  
}

function reset(){
  stroke("black");
  textSize(20);
  fill("black");
  text("game over",100,200);
    ground.velocityX=0;
    food.lifeTime=0;
    obstacleGroup.lifeTime=0 ;
    monkey.velocityY=0;
  
}


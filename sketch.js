var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;

var invisGround; 



function preload() {


  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,330,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  //ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  ;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;


invisGround = createSprite(400,345,800,10);
invisGround.visible = false
}

function draw() {
  
  background(255);

  if(backgr.x <0){
    backgr.x = backgr.width/2;
  }
  

player.collide(ground);

if(player.isTouching(invisGround)){
  if(keyDown("space")){
  player.velocityY = -12;
  
  } 
}


player.velocityY = player.velocityY+0.8;


if(player.isTouching(FoodGroup)){
  score = score+2;


  switch (score) {
    
    case 10 : player.scale = 0.12;

    break;
   
    case 20 : player.scale = 0.24;

    break;

    case 30 : player.scale = 0.36;

    break;

    case 40 : player.scale = 0.48

    break;

    default : break;
    
}

FoodGroup.destroyEach();
  
  }

if(player.isTouching(obstaclesGroup)){
player.scale = 0.2;
}


stroke("White");
textSize(20);
fill("white");
text("Score : "+score,500,350);


  spawnFood();
  spawnObstacles();
  
  drawSprites();
}





function spawnFood() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,225,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
     
    banana.lifetime = 134;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var rock = createSprite(400,345,10,40);
    rock.debug = true;
    rock.setCollider("rectangle",0,0,10,10);
    rock.addImage(obstacle_img);
    rock.velocityX = -6;
    
    rock.scale = 0.1;
    rock.lifetime = 70;
    
    obstaclesGroup.add(rock);
  }
}


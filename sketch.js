    var start;
    var PLAY = 1;
    var END = 0;
    var gameState,bg;
    var ground,groundIMG , monkey ,stillmonkey, monkey_running,start,startIMG;
    var 
    cloudsgroup,cloudimage,banana,bananaImage , gameover,
    obstacle,obstacleImage , gameoverimg;
    var bananagroup, obstacleGroup,restart,restartIMG;
    var score;

    function preload(){

  groundImg = loadImage("forest.jpg");
      monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

      bananaImage = loadImage("banana.png");
      obstacleImage = loadImage("obstacle.png");
     cloudimage = loadImage("cloud.png");
      startIMG = loadImage("start.png");
      gameoverimg = loadImage ("over.png"); 
      restartIMG = loadImage("restart.png");
    }



    function setup() {

      createCanvas(600,400);


    ground = createSprite(400,395,900,100);

    ground.shapeColor = ("green");
    ground.velocityX = -4;


      score = 0;

       monkey = createSprite (70,315,20,20)  ;
     monkey.addAnimation ("moving",monkey_running);
    monkey.scale = 0.1;

       gameover = createSprite (300,150,20,20) ;
      gameover.addImage(gameoverimg);
      gameover.scale = 0.3
      gameover.visible = false;
    restart = createSprite(300,230 , 20,20);
    restart.addImage(restartIMG);
      restart.scale = 0.5;
      restart.visible = false;

    cloudsgroup = createGroup();
    obstacleGroup = createGroup() ;
    bananagroup = createGroup();
    start = createSprite(300,150,20,20);
    start.addImage(startIMG);
      start.scale = 0.2;
    start.visible = true;

    monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
    monkey.debug = false;
    console.log(ground.x);
    }


    function draw() {
     
    background("lightblue");
    ground.x = ground.width/2;

  monkey.collide(ground);

      if(mousePressedOver(start)){
        gameState = PLAY;}
    if (gameState===PLAY){
      monkey.visible = true;
      start.visible = false;
      gameover.visible = false;
      restart.visible = false;
       if (frameCount % 70 === 0){
       obstacle = createSprite(650,335,10,40);
       obstacle.addImage(obstacleImage);
       obstacle.scale = 0.1;
       obstacle.velocityX = -3
       obstacle.y = Math.round(random(330,345));
      obstacleGroup.add(obstacle);}
       if (frameCount % 100 === 0){
         banana = createSprite(600,300,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.07;
         banana.velocityX = -3;
         bananagroup.add(banana);
       banana.y = Math.round(random(280,300));
       }
      if (keyDown("space")&& monkey.y >= 313){
        monkey.velocityY = -12;
      }
      monkey.velocityY = monkey.velocityY +0.5; }


      if (monkey.isTouching(obstacleGroup)){
      gameState=END}
      if (gameState===END){
         monkey.visible = false;
         gameover.visible = true;
        restart.visible = true;
      cloudsgroup.destroyEach();
      obstacleGroup.destroyEach();
      bananagroup.destroyEach();
      if (mousePressedOver(restart)){
        gameState = PLAY;
        score = 0;
      }}

  if (monkey.isTouching(bananagroup)){
    bananagroup.destroyEach();
    score = score +2;
  }
  fill ("white");
  text("Score: "+ score, 500,50); 
      spawnClouds ();
     drawSprites () ;
    }

    function spawnClouds() {
      //write code here to spawn the clouds
      if (frameCount % 50 === 0) {
        var cloud = createSprite(570,120,40,10);
        cloud.y = Math.round(random(10,180));
        cloud.addImage(cloudimage);
        cloud.scale = 0.9;
        cloud.velocityX = -3;

         //assign lifetime to the variable
        cloud.lifetime = 300;

        cloudsgroup.add(cloud);
      }}









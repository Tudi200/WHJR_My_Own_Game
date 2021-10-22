var track;
var player;
var hurdles;
var coins;
var trackImage;
var playerImage;
var hurdlesImage;
var coinsImage;
var bananas;
var bananasImage;
var ending;
var endingImage;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  trackImage = loadImage("backgroundforgame.jpg");
  playerImage = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  hurdlesImage = loadImage("Hurdles.png");
  coinsImage = loadImage("coins.jpg");
  bananasImage = loadImage("bananas.png");
  endingImage = loadImage("ending.jpg");
}

function setup(){
  createCanvas(600,600);
  track = createSprite(300,300);
  track.addImage(trackImage);
  track.velocityY = 3;
  track.scale = 2.5;
  player = createSprite(300, 500, 30, 30);
  player.addAnimation("playerRunning",playerImage);
}

function draw(){
  background("black");
  

if(gameState === PLAY){
  player.x = World.mouseX;

//to make the game infinite

if(track.y > 450){
  track.y =250;
}

//spawning the obstacles and coins

  spawnCoins()
spawnHurdles()
spawnBananas()

} 

  drawSprites();

//scoreboard

  textSize(25);
  fill("black");
  text("Score :"+ score,30,50);

}

function spawnCoins(){
  if(frameCount%120 === 0){
    coins = createSprite(300, -10, 20, 20);
    coins.addImage(coinsImage);
    coins.velocityY = 2;
    coins.scale = 0.5;
    coins.x = Math.round(random(30, 570));
    coins.lifetime = 600
  }

}

function spawnHurdles(){
  if(frameCount%120 === 0){
    hurdles = createSprite(300, -50, 30, 30);
    hurdles.addImage(hurdlesImage);
    hurdles.velocityY = 2;
    hurdles.scale = 0.5;
    hurdles.x = Math.round(random(30, 570));
    hurdles.lifetime = 600
  }
}
function spawnBananas(){
  if(frameCount%120 === 0){
    bananas = createSprite(200, -25, 25, 25);
    bananas.addImage(bananasImage);
    bananas.velocityY = 2;
    bananas.scale = 0.09;
    bananas.x = Math.round(random(30, 570));
    bananas.lifetime = 600
  }
}

var cars = [];
var player;
var currentScene = 0;
var timer = 0;
var isGameSet = false;

let music;
var asteroidImage;
var followerImage;
var playerImage;
var backgroundImage;

function preload() {
  soundFormats('mp3', 'ogg');
  music = loadSound('../assets/Music');
  asteroidImage = loadImage('../assets/Asteroid.png');
  followerImage = loadImage('../assets/Survivor.png');
  playerImage = loadImage('../assets/Player.png');
  backgroundImage = loadImage('../assets/background.png');
}

function setup() {
  // put setup code here
  rectMode("center");
  createCanvas(displayWidth,displayHeight*.86);
}

function draw(){
  background('black');
  background(backgroundImage,10);

  switch (currentScene) {
    case 0:
      buildText("ASTERIODS", "By: Mason Bates \n\n\n Keep yourself alive more, avoid the asteroids \n\n\n (click to continue)");

      if (mouseIsPressed) {
        startGame();
      }
      break;
    case 1:
      manageMovement();

      timer -= 1/60;

      fill("white");
      textSize(24);
      text("" + round(timer),50,50);
      if (timer <= 0) {
        currentScene = "win"
      }
      break;
    case "win":
    buildText("YOU WON", "You are, without a doubt, the greatest gamer that there ever was or will be. truly, congratulations. \n\n\n (click to restart)");
      if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
      break;

    case "lose":
      buildText("YOU LOST", "don't worry, not everyone has what it takes to be a pilot. I can't win, only one I know who can is my girlfriend, but, want to give it another go?\n\n\n (click to restart)");
      if (mouseIsPressed) {
        currentScene = 0;
        isGameSet = false;
      }
      break;
  }
}

// Player Constructor
function Player(){
  this.position = createVector(width/2,height/2);
  this.size = 40;
  this.speed = 10;


  this.update = function(){
    fill("white");
    this.velocity = createVector(0,0);
    if (keyIsDown(LEFT_ARROW))
    {
      this.velocity.x = -1*this.speed;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
      this.velocity.x = 1*this.speed;
    }

    if (keyIsDown(UP_ARROW))
    {
      this.velocity.y = -1*this.speed;
    }
    else if (keyIsDown(DOWN_ARROW))
    {
      this.velocity.y = 1*this.speed;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2;}

    image(playerImage,this.position.x,this.position.y,this.size,this.size);
    // circle(this.position.x,this.position.y,this.size);
  }
}

// Car Constructor
function Car(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));

  this.size = random(30,70);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-3,3),random(-3,3));


  this.update = function(){
    fill(this.color.x,this.color.y,this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant += .3;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant+= .3;}
    if (this.accelerant >= 30 && random(100) >90) {
      this.accelerant = 0;
    }
    image(asteroidImage,this.position.x,this.position.y,this.size,this.size);
  }
}


// moves cars & Player
function manageMovement(){
  player.update();

  for (var i = 0; i < cars.length; i++) {
    cars[i].update();

    if (cars[i].position.dist(player.position) < player.size*.5 + (cars[i].size*.6)) {
      currentScene = "lose";
    }
  }
}

//builds a generic scene with a title and a subtitle
function buildText(textTitle,textMessage){
  fill("white");
  textSize(72);
  textAlign(CENTER, CENTER);
  text(textTitle,width/2,height/3);
  textSize(32);
  text(textMessage,width/2,height/2,width/2,height/2);
}

//builds everything and starts the game
function startGame(){
  if (!music.isPlaying()) {

    music.play();
  }
  cars = [];
  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
  }
  player = new Player();
  isGameSet = true;
  timer = 30;
  currentScene++;
}
/* LET'S PLAN
4. introduce a menu that you must click through to start the game
5. introduce a win if you destroy all the cars
6. create a win screen that you go to if you win
7. introduce a timer that if you don't catch all the boxes you will lose
8. create a lose screen

*/

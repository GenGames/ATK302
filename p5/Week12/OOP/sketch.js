var cars = [];
var player;
var currentScene = 0;
var timer = 0;
var isGameSet = false;

function setup() {
  // put setup code here
  rectMode("center");
  createCanvas(displayWidth,displayHeight*.864);

}

function draw(){
  background("black");

  switch (currentScene) {
    case 0:
      buildText("NOT YOUR AVERAGE FROGGER GAME", "By: Mason Bates \n\n\n (click to continue)");

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
      if (cars.length == 0) {
        currentScene = "win";
      }
      else if (timer == 0) {
        currentScene = "lose"
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
      buildText("YOU LOST", "don't worry, not everyone has what it takes to be a frogger. don't ask me what that means though \n\n\n (click to restart)");
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
  this.size = 30;
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

    circle(this.position.x,this.position.y,this.size);
  }
}

// Car Constructor
function Car(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));

  this.size = random(50,100);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-5,5),random(-5,5));


  this.update = function(){
    fill(this.color.x,this.color.y,this.color.z);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    if (this.accelerant >= 50 && random(100) >99) {
      this.accelerant = 0;
    }
    rect(this.position.x,this.position.y,this.size,this.size);
  }
}


// moves cars & Player
function manageMovement(){
  player.update();

  for (var i = 0; i < cars.length; i++) {
    cars[i].update();

    if (cars[i].position.dist(player.position) < player.size*.5 + (cars[i].size*.6)) {
      cars.splice(i,1);
      player.size += .6*cars.length;
      player.speed *= 19/20;
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
  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
  }
  player = new Player();
  isGameSet = true;
  timer = 60;
  currentScene++;
}
/* LET'S PLAN
4. introduce a menu that you must click through to start the game
5. introduce a win if you destroy all the cars
6. create a win screen that you go to if you win
7. introduce a timer that if you don't catch all the boxes you will lose
8. create a lose screen

*/

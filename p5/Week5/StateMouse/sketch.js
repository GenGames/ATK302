var nextState;

function preLoad(){
}

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background('blue');
  nextState = "Title Menu";
}

function draw() {
  // put drawing code here

}

function mouseReleased(){

  switch (nextState) {
    case "Title Menu":
      titleMenu();
      break;

    case "Main Menu":
      mainMenu();
      break;

    case "Game Loop":
      gameLoop();
      break;
  }
}

function titleMenu(){
  background(random(255));
  textSize(72);
  text("TITLE",400,200);
  nextState = "Main Menu";
  console.log("click to go to: " +nextState);
}

function mainMenu(){
  background(random(255),random(255),random(255));
  textSize(32);
  text("Click the mouse to continue", 400,200);
  nextState = "Game Loop";
  console.log("click to go to: " +nextState);
}

function gameLoop(){
  background('green');
  textSize(20);
  text("Thanks for playing", 400,200);
  nextState = "Title Menu";
  console.log("click to go to: " +nextState);
}

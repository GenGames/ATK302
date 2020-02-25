var gameScenes = ["Title Menu", "Main Menu", "Game Play", "End Game"];
var currentScene = 0;
var timer = 0;
var timing = false;

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(displayWidth, displayHeight);
  background("rgb(175,190,250)");
  noStroke();
  fill("green");
  textSize(72);
  rect(0,3*displayHeight/4,displayWidth,displayHeight/4);
  changeScene(currentScene);
}

function draw() {
  if (timing) {
    timer();
  } else if(timer != 0){
    resetTimer();
  }
}

function mousePressed(){
  changeScene(++currentScene);
}


// My functions
function timer(){
  timer += 1/60;
  console.log("timer: " +timer);
}

function resetTimer(){
  timer = 0;
}

function changeScene(newScene){
  switch (newScene) {
    case 0:
    background("rgb(175,190,250)");
    text(gameScenes[newScene],80,80);
      break;
    case 1:
    background("rgb(100,100,250)");
    text(gameScenes[newScene],80,80);
      break;
    case 2:
    background("rgb(10,10,250)");
    text(gameScenes[newScene],80,80);
    timing = true;
    if (timer >= 2) {
      mousePressed();
    }
      break;
    case 3:
    background("rgb(200,230,250)");
    text(gameScenes[newScene],80,80);
    currentScene = 0;
    timing = false;
        break;

    default:

  }
}

// notes on how I want the game to work!!!
//****************************************
// # Choose your own adventure game
// ## Mechanics
// - Starts at a title screen. On click, switches to menu
// - Menu has volume settings (if time)
// - Menu has start button
// - On start button click, game Starts
// - game loads in text
// - game loads in images (if time)
// - game loads in audio (if time)
// - game loads in buttons to respond/continue appropriately
// - if continue, load next text
// - if respond, record decision and load next text
// - decisions will impact gameplay in SOME way
//
//
//
//
//
//
//
//
//
//

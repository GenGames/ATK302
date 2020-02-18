var gameScenes = ["titleMenu", "mainMenu", "gameplay", "endGame"];
var currentScene = 0;

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

}

function mousePressed(){
  // for (var i = 0; i < gameScenes.length; i++) {
  //
  // }

  console.log(gameScenes[++currentScene]);
  changeScene(currentScene);
}


// My functions
function changeScene(newScene){
  switch (newScene) {
    case 0:
    background("rgb(175,190,250)");
    text(gameScenes[newScene],80,80);
      break;
    case 1:
    background("rgb(175,190,250)");
    text(gameScenes[newScene],80,80);
      break;
    case 2:
    background("rgb(175,190,250)");
    text(gameScenes[newScene],80,80);
      break;
    case 3:
    background("rgb(175,190,250)");
    text(gameScenes[newScene],80,80);
    currentScene = 0;
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

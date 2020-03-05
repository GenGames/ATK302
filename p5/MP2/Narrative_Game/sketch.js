// MASTER - Scene Control (Title Menu, Main Menu, gameplay, etc...)
var gameScenes = ["Title Menu", "Main Menu", "Game Play", "End Game"]; // what scenes are in the game
var currentScene = 0; // What scene is the game in

// NARRATIVE BRANCHING - (current json file for narrative)
var json = []; // where is the file holding all of the different choices
var currentNarrativeBranchCounter = -1; //is a counter for which json file is being pulled from
var currentNarrativeBranch // is the correct JSONFile to reference at the time of viewing
var backgroundImage = 2; // this is the counter for the background image

// NARRATIVE STRINGS - (When am I cycling through different objects in my current JSON file?)
var narrativeStringName; // Which narrative string item is currently on screen
var currentText = 0; // number for the text to dipslay on the screen
var storyStringLength; // total amount of text elements in the narrative string
var isNarrativeRunning = false; //controls whether the mouse being clicked advances the game scene or the current text

// TEXT AND CHARACTER UPDATE ELEMENTS - (When I load in a character or text, I use these)
var textDOM; // holds the dom element for the text
var areChoicesAvailable = false; // returns true if buttons are on screen, returns false otherwise

// GAME ASSETS - (Character Images, Background Images, Sounds/Music and SFX)
var characters = []; // images (and possibly names and text colors) of all characters in the game;
var rooms = []; // background images for all rooms
var backgroundAudio = []; // What is the audio that plays in the game?
var selectAudio; // What is the audio that plays when a button is clicked
var font; // the game font

function preload(){
  font = loadFont("assets/gameFont.otf");

  json.push(loadJSON("json/House.json"));
  json.push(loadJSON("json/Whiterun.json"));
  json.push(loadJSON("json/Bandits.json"));
  json.push(loadJSON("json/Giant.json"));
  json.push(loadJSON("json/Jail-Cell.json"));

  rooms.push(loadImage("assets/Images/Title_Background.jpg"));
  rooms.push(loadImage("assets/Images/MainMenu_Background.jpg"));
  rooms.push(loadImage("assets/Images/Home_Background.jpg"));
  rooms.push(loadImage("assets/Images/Whiterun_Background.jpg"));
  rooms.push(loadImage("assets/Images/Bandit_Background.jpg"));
  rooms.push(loadImage("assets/Images/Giant_Background.jpg"));
  rooms.push(loadImage("assets/Images/Jail-Cell_Background.png"));

  backgroundAudio.push(loadSound("assets/Sound/Menu.mp3"));
  backgroundAudio.push(loadSound("assets/Sound/GameMusic.mp3"));

}

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(displayWidth, displayHeight);
  background("rgb(175,190,250)");
  textFont(font);
  noStroke();
  fill("green");
  textSize(72);
  iterateNarrativeBranch();
  changeScene(currentScene);
  changeNarrativeString("1");
}// Manages canvas creation and basic item creation;

var scalefactor = .1;
function draw() {
  if (currentScene == 0) {
    console.log('animating');
    rectMode(CENTER);
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 40 * scalefactor));
    rect(0, 0, 20, 20);
    scalefactor += .001;
  }
}//is here for the funnsies

function mousePressed(){
  if (!isNarrativeRunning) {
    changeScene(++currentScene);
  }
  else if (currentText <= storyStringLength)
  {
    changeText(currentNarrativeBranch[narrativeStringName][++currentText])
  }
  else if(!areChoicesAvailable)
  {
    createChoice(currentNarrativeBranch[narrativeStringName +"Button1"][0],
                currentNarrativeBranch[narrativeStringName +"Button1"][1],
                currentNarrativeBranch[narrativeStringName +"Button2"][0],
                currentNarrativeBranch[narrativeStringName +"Button2"][1])
  }
}// initiates the iteration of the scene/narrativeLoop based on currentScene and narrativeCounter


// My functions
// My functions
// My functions

function changeScene(newScene){
  switch (newScene) {
    case 0:
    backgroundAudio[0].play();
    background(rooms[0]);
    textSize(30);
    fill(200);
    text("Click to Continue", 80, 80);
      break;
    case 1:
    background(rooms[1]);
    fill(230);
    textSize(72);
    text("The Duty of a Guardsman",80,80);
    textSize(36);
    text("By Mason Bates",600,150);
      break;
    case 2:
    backgroundAudio[0].stop();
    backgroundAudio[1].play();
    background(rooms[2]);
    fill(230);
    createDiv();
    changeText("<p>" + currentNarrativeBranch[narrativeStringName][currentText] +"</p>");
    isNarrativeRunning = true;
      break;
    case 3:
    background(rooms[0]);
    text(gameScenes[newScene],80,80);
    currentScene = 0;
        break;
  }
} // Changes the current Scene of the stuff

function iterateNarrativeBranch(){
  currentNarrativeBranchCounter++;
  if (currentNarrativeBranchCounter < json.length) {
    currentNarrativeBranch = json[currentNarrativeBranchCounter];
    changeNarrativeString("1");
    backgroundImage = currentNarrativeBranchCounter + 2;
    background(rooms[backgroundImage]);
  } else{
    isNarrativeRunning = false;
    mousePressed();
    location.reload();
  }
}

function changeNarrativeString(newNarrativeStringName){
  narrativeStringName = newNarrativeStringName;
  currentText = 0;
  if (currentNarrativeBranch[narrativeStringName] != undefined) {
    storyStringLength = currentNarrativeBranch[narrativeStringName].length;
  }

  destroyChoices();
}

function changeText(newText){
  if (newText != undefined) {
    var div = document.getElementsByTagName("div")
    div[0].innerHTML = newText;
  } else{
    var div = document.getElementsByTagName("div")
    div[0].innerHTML = "<p> ** Click to Continue ** </p>";
  }
} // change the text of the scene to be the next item in an array

function createChoice(choice1Text,choice1Route,choice2Text,choice2Route){
  createButton(choice1Text);
  createButton(choice2Text);

  buttons = document.getElementsByTagName("button");
      button1 = buttons[0];
      button2 = buttons[1];

      if (choice1Route != "endGame" && choice1Route != "nextBranch") {
        button1.setAttribute( "onClick", "changeNarrativeString(" + choice1Route + ");");
      }
      else if (choice1Route == "endGame")
      {
        console.log("endgame available on button 1...");
        button1.setAttribute( "onClick", "endGame();");
      }
      else{
        console.log("continue available on button 1...");
        button1.setAttribute( "onClick", "iterateNarrativeBranch();");
      }

      if (choice1Route != "endGame" && choice1Route != "nextBranch") {
        button2.setAttribute( "onClick", "changeNarrativeString(" + choice2Route + ");");
      }
      else if (choice1Route == "endGame")
      {
        console.log("endgame available on button 2...");
        button2.setAttribute( "onClick", "endGame();");
      }
      else{
        console.log("continue available on button 2...");
        button2.setAttribute( "onClick", "iterateNarrativeBranch();");
      }

      button1.setAttribute( "class", "button1");
      button2.setAttribute( "class", "button2");

      areChoicesAvailable = true;
} // add choices to the canvas as buttons and disable onclick

function destroyChoices(){
  if (areChoicesAvailable) {
    buttons = document.getElementsByTagName("button");
    buttons[0].remove();

    buttons = document.getElementsByTagName("button");
    buttons[0].remove();

    areChoicesAvailable = false;
  }
} // removes the choice buttons from the screen

function endGame(){
  location.reload();

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

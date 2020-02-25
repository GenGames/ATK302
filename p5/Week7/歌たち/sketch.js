var song1;
var song2;
var song3;
var currentState = 0;

function preload(){
  song1 = loadSound("assets/donkey.mp3");
  song2 = loadSound("assets/state.mp3");
  song3 = loadSound("assets/thrill.mp3");

    song1.loop();
    song1.stop();

    song2.loop();
    song2.stop();

    song3.loop();
    song3.stop();
}

function setup() {
  // put setup code here
  createCanvas(800,200);
  background('grey');
}

function draw() {
  // put drawing code here
}

function mouseReleased(){
  switch (currentState) {
    case 0:
    song1.play();
    currentState++;
      break;
      case 1:
      song1.pause();
      currentState++;
        break;

    case 2:
    song2.play();
    currentState++;
      break;
      case 3:
      song2.pause();
      currentState++;
        break;

    case 4:
    song3.play();
    currentState++;
      break;
    default:
      case 5:
      song3.pause();
      currentState = 0;
        break;
  }
}

currentState = 0;

function preLoad(){

}

function setup() {
  // put setup code here
  createCanvas(800,800);

}

function draw() {
  // put drawing code here

  background('grey');
}

function mousePressed(){
  currentState++;
  stopLightSwitch();
}

// My Functions

// switches the current stoplight;
function stopLightSwitch(){
  switch (currentState) {
    case 0:
      console.log("Stop light exists");
      break;
    case 1:
      console.log("Stop light case green");
      break;
    case 2:
      console.log("Stop light case yellow");
      break;
    case 3:
      console.log("Stop light case red");
      currentState = 0;
      break;
  }
}

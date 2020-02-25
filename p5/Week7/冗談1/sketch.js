var currentState = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  textSize(40);
}

function draw() {
  // put drawing code here
  background('grey');
  switch (currentState) {
    case 0:
      console.log("Ready?");
      text("ready?", 100,100);
      break;
    case 1:
      console.log("お前は死んでる");
      text("Joke Premise", 100,100);
      break;
    case 2:
      console.log("何！？！？！？！");
      text("Joke Punch", 100,100);
      break;
  }
}

function mousePressed(){
  if (currentState == 2) {
    currentState = 0
  }
  currentState++;

}

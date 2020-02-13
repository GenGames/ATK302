let button;
let x;

function preLoad(){

}

function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background('blue');

  button = createButton('Change the Background!!!');
  button.position(0,0);
  button.mousePressed(changeBackgroundRandom);
}

function draw() {
  // put drawing code here
  button.position(x, x * displayHeight/displayWidth);
  x +=5;
  if (x > displayWidth) {
    x=0;
  }
}

function mouseReleased(){

}

function changeBackgroundRandom(){
  background(random(255),random(255),random(255));
}

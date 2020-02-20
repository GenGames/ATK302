let mic;
var isready = false;
var myBoi;
var micLevel;
var x =0;

function setup(){
  createCanvas(displayWidth, displayHeight/2);
  mic = new p5.AudioIn();
  mic.start();

  let inp = createInput('');
  inp.input(horizontalInput);
}

function draw(){
  background('lightBlue');

  if (isready) {
    thereIsNoSpoon();
    horizontalInput();
  }
}

function mousePressed(){
  isready = true;
}

function thereIsNoSpoon(){
  micLevel = mic.getLevel();

}

function horizontalInput(){
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  myBoi = ellipse(width/2 + x, constrain(height-micLevel*height*5, 0, height) -25, 50, 50);
}

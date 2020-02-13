let x = 0;

function preLoad(){

}

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  background(200);

  fill(255);
  text("Slow Down!!!", x,10);
  text("Speed Up!!!", x/3, 40);

  x +=5;

  if (x > width) {
    x = 0;
  }
}

function MouseReleased(){
  // Activates on Mouse Release
}

var timer;
var timeScale = 1;

function preLoad(){

}

function setup() {
  // put setup code here
  createCanvas(800,800);
  timer = 0;
  background(200);
}

function draw() {
  // put drawing code here
  timer += 1/60 * timeScale;

  console.log(timer);

  if (timer >= 2) {
    background(random(256),random(256),random(256));
    timer = 0;
  }
}

function MouseReleased(){
  // Activates on Mouse Release
}

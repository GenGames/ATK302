var currentState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  textSize(40);
}

function draw() {
  // put drawing code here
  timer += 1/60;

  background('grey');
  switch (currentState) {
    case 0:
      text("ready?", 100,100);
      if (timer >= 2) {
        currentState = 1;
      }
      break;
    case 1:
      text("何で鶏肉はおいしいですか。", 100,100);
      if (timer >= 4) {
        currentState = 2;
      }
      break;
    case 2:
      text("それはうまいです。", 100,100);
      if (timer >= 6) {
        currentState = 0;
        timer = 0;
      }
      break;
  }
}

function mousePressed(){
  if (currentState == 2) {
    currentState = 0
  }
  currentState++;

}

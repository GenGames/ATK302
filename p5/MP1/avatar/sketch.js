function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background("black");
  noStroke();

  fill("red");
  quad(260, 130, 300, 220, 370, 220, 410, 130);


  fill("grey")
  quad(290, 196, 327, 220, 297, 305, 236, 305);
}

function draw() {
  if (mouseIsPressed) {
    console.log(mouseX + ", " + mouseY);
  }
}

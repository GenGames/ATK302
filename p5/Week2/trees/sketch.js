function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background("#4cc8ff");
  noStroke();

  fill("#ff9900");
  arc(479, 160, 280, 280, PI, TWO_PI);
  fill("#009900");
  rect(0,160,720,240);
  cloud();
  cloud();
  tree();
  tree();
}


function draw() {
  // put drawing code here




  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  // fill(255);
  // ellipse(252, 144, 72, 72);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //

}

function tree(){
  var treeSize = Math.floor(Math.random() *20 ) + 10;
  var treeLocationX = Math.floor(Math.random() * 600) + 50;
  var treeLocationY = Math.floor(Math.random() * 235) + 5;
  fill('brown');
  rect(treeLocationX, treeLocationY, treeSize*5, treeSize*25);

  fill('green');
  arc(treeLocationX, treeLocationY+35, treeSize*10, treeSize*13, PI, TWO_PI);
  arc(treeLocationX + 80, treeLocationY+25, treeSize*8, treeSize*6, PI, TWO_PI);
  arc(treeLocationX +100, treeLocationY+45, treeSize*12, treeSize*13, PI, TWO_PI);
}

function cloud(){
  var cloudSize = Math.floor(Math.random());
  var cloudLocationX = Math.floor(Math.random() * 600) + 50;
  var cloudLocationY = Math.floor(Math.random() * 155) + 5;
  fill(255);
  ellipse(Math.random()*720, Math.random()*135, Math.random()*100 +50, Math.random()*100 +50);
}

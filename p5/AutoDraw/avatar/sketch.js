var mP = [];

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(400, 200);
  background("rgb(175,190,250)");
  noStroke();
  fill("green");
  var ground = rect(0,130,400,70);

}

function draw() {

  if (mP) {
    console.log(mouseX + ", " + mouseY);
  }
  if(mP.length == 8){
    buildQuad(mP[1],mP[2],mP[3],mP[4],mP[5],mP[6],mP[7],mP[8]);
  }
}

function mousePressed(){
  mP.push(mouseX);
  mP.push(mouseY);
  console.log(mP);
}

function buildQuad(x1,y1,x2,y2,x3,y3,x4,y4){
  quad(x1,y1,x2,y2,x3,y3,x4,y4);
}

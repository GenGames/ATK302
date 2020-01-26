function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background("#4cc8ff");
  noStroke();

  fill("#ff9900");
  arc(479, 160, 280, 280, PI, TWO_PI);

  fill("#009900");
  rect(0,160,720,240);
  for (var i = 0; i < Math.floor(Math.random()*20); i++) {
    cloud();
  }
  for (var i = 0; i < Math.floor(Math.random()*4) +2; i++) {
    tree(); //creates a tree
  }
}

function draw() {

}

function tree(){
  var treeSize = Math.floor(Math.random() *20 ) + 10; //determines the size of the tree between 10-39
  var treeLocationX = Math.floor(Math.random() * 600) + 50; //determines a random x location of the tree between 50-649
  var treeLocationY = Math.floor(Math.random() * 235) + 5; // determines a random y location of the tree between 5 and 329
  fill('brown'); //changes tree color to brown
  rect(treeLocationX, treeLocationY, treeSize*5, treeSize*25); //creates tree trunk according to size and location

  fill('green'); //changes tree color to green

  var quantityLeaves = Math.floor(Math.random()*5) +2; //determines how many leaves are going to be generated

  for (var i = 0; i < quantityLeaves; i++) { // generates leaves equal to the total amount of leaves set above
    leaves(treeLocationX + Math.floor(Math.random()*100)+10,treeLocationY + Math.floor(Math.random()*100)+10, treeSize + Math.floor(Math.random()*300)+10)
  }
}

function leaves(xLocation,yLocation,size){
  arc(xLocation, yLocation, size, size*1.3, PI, TWO_PI);
}

function cloud(){
  var cloudSize = Math.floor(Math.random());
  var cloudSize2 = Math.floor(Math.random());
  var cloudLocationX = Math.floor(Math.random() * 600) + 50;
  var cloudLocationY = Math.floor(Math.random() * 115) + 5;
  fill(255);
  ellipse(cloudLocationX, cloudLocationY, cloudSize*10 +80, cloudSize*10 +80);
  ellipse(cloudLocationX+55, cloudLocationY+20, cloudSize*60 +50, cloudSize*40 +50);
  ellipse(cloudLocationX-35, cloudLocationY+10, cloudSize*70 +50, cloudSize*90 +50);
}

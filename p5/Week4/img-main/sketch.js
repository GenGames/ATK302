let img1;
let img2;
let img3;
let font;
let sfx;

function preload(){
  img1 = loadImage('assets/JapanScenery1.jpg');
  img2 = loadImage('assets/JapanScenery2.jpg');
  img3 = loadImage('assets/JapanScenery3.jpg');
  soundFormats('mp3', 'ogg');
  sfx = loadSound('assets/SFX.mp3');
  font = loadFont('assets/font.ttf');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

  image(img2,250,325,200,200);
  image(img3,250,100);
  image(img1,0,100);


  fill(0)
  .strokeWeight(0)
  .textSize(30);
  text('日本へ行こうね！！！',10,30);
   textFont(font);
   text('Lets go to Japan', 10, 70);
}

function draw() {
  // put drawing code here

}

function mouseClicked(){
  sfx.play();
}

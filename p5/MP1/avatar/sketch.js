const greyColoring = "#D7CAD4";
const backgroundWhiteColoring = "#D6CAD0";
const backgroundGreyColoring = "rgb(182,172,180)"
const whiteColoring = "#F6F6F6";
const bag1Coloring = "#77C0B7";
const bag2Coloring = "#DFBF45";

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(200, 200);
  background("black");
  noStroke();


  Alpaca(0,0);
}

function draw() {
  if (mouseIsPressed) {
    console.log(mouseX + ", " + mouseY);
  }
}

function leg(xposition,yposition,isFrontLeg){
  if (isFrontLeg) {
    fill(greyColoring);
  } else{
    fill(backgroundGreyColoring);
  }
  //foot
  ellipse(83+xposition,175+yposition,12);
  quad(77+xposition, 174+yposition, 77+xposition, 168+yposition,93+xposition, 167+yposition,89+xposition, 176+yposition);

  if (isFrontLeg) {
    fill(whiteColoring);
  } else{
    fill(backgroundWhiteColoring);
  }

  //leg calf
  quad(77+xposition, 168+yposition,93+xposition, 167+yposition,95+xposition, 143+yposition,71+xposition, 142+yposition);

  //fluff
  ellipse(92+xposition, 166+yposition,8);
  ellipse(93+xposition, 160+yposition,8);
  ellipse(94+xposition, 153+yposition,8);
  ellipse(93+xposition, 146+yposition,8);
  ellipse(71+xposition, 145+yposition,8);
  ellipse(72+xposition, 152+yposition,8);
  ellipse(73+xposition, 159+yposition,8);
  ellipse(75+xposition, 164+yposition,8);

}

function torso(xposition,yposition){
  //tail
  fill(greyColoring);
  ellipse(154, 107,15);

  fill(whiteColoring);
  //primary body shape
  quad(45, 61,78, 43,78, 69,48, 100);
  quad(78, 68,48, 99,54, 127,82, 81);
  quad(54, 126,82, 80,83, 85,69, 140);
  quad(82, 85,68, 140,96, 143,88, 89);
  quad(95, 143,87, 89,133, 90,137, 145);
  quad(132, 90,136, 145,145, 134,142, 94);
  quad(144, 134,141, 94,147, 100,149, 123);

  //fluff
  ellipse(46, 62,8);
  ellipse(48, 69,8);
  ellipse(47, 77,8);
  ellipse(49, 86,8);
  ellipse(48, 94,8);
  ellipse(49, 104,8);
  ellipse(50, 111,8);
  ellipse(52, 119,8);
  ellipse(54, 125,8);
  ellipse(58, 132,8);
  ellipse(64, 136,8);
  ellipse(69, 139,8);
  ellipse(99, 141,8);
  ellipse(106, 141,8);
  ellipse(136, 141,8);
  ellipse(141, 135,8);
  ellipse(144, 132,8);
  ellipse(147, 125,8);
  ellipse(149, 119,8);
  ellipse(149, 112,8);
  ellipse(148, 104,8);
  ellipse(146, 100,8);
  ellipse(142, 95,8);
  ellipse(135, 92,8);

}

function bag(xposition,yposition, color){
  //bag shape
  fill(color);
  rect(79+xposition,58+yposition,65,34,200);

  // bag ropes (bottom only)
  fill("brown");
  quad(101, 58,100, 77,102, 77,103, 58);
  quad(121, 58,120, 77,122, 77,123, 58);
}

function head(xposition,yposition){
  //background face
  fill(whiteColoring);
  quad(36, 56,39, 58,79, 36,46, 25);
  quad(44,53,52,59,79,37,54,28);

  //backear
  fill(whiteColoring);
  ellipse(38,8,8,9);
  fill(greyColoring);
  ellipse(38,8,5,7);

  //grey face section
  fill(greyColoring);
  quad(38, 57,33, 56.8,35, 20,66, 32);
  triangle(26, 36,36,47,31,30);
  triangle(36,47.1,31,30.1,35, 20);
  triangle(36,49,25,45,37,36)


  //white nose section
  fill(whiteColoring);
  triangle(26.4, 35.8,22, 40.1,31, 39.1);
  quad(22, 40,31, 39,33, 44.1,22, 48.1);
  quad(22, 48,33, 44,34, 52.1,28, 54.1);
  triangle(28, 54,34, 52,34, 57);

  //white face section
  fill(whiteColoring);
  quad(38, 58,47, 50,63, 64,41, 60);
  quad(47, 50,63, 64,78, 62,49, 45);
  quad(78, 62,49, 45,50, 37,78, 46);
  quad(50, 37,78, 46,80, 37,49, 28);
  quad(80, 37,49, 28,48, 25,78, 25);

  //foreheadfluff
  ellipse(34,17,12,Math.random()*4+9);
  ellipse(34, 12,12,Math.random()*4+9);
  ellipse(39, 18,12,Math.random()*4+9);
  ellipse(43, 22,12,Math.random()*4+9);
  ellipse(48, 23,12,Math.random()*4+9);
  ellipse(49, 23,12,Math.random()*4+9);
  ellipse(53, 25,12,Math.random()*4+9);
  ellipse(50, 18,12,Math.random()*4+9);
  ellipse(43, 11,12,Math.random()*4+9);
  ellipse(47, 11,12,Math.random()*4+9);
  ellipse(52, 13,12,Math.random()*4+9);
  ellipse(63, 13,12,Math.random()*4+9);
  ellipse(63, 15,12,Math.random()*4+9);
  ellipse(65, 19,12,Math.random()*4+9);
  ellipse(72, 15,12,Math.random()*4+9);
  ellipse(74, 18,12,Math.random()*4+9);
  ellipse(75, 23,12,Math.random()*4+9);
  ellipse(69, 23,12,Math.random()*4+9);
  ellipse(69, 23,12,Math.random()*4+9);

  //frontear
  fill(whiteColoring);
  ellipse(56,9,8,9);
  triangle(60,8,62,23,53,17);

  fill(greyColoring);
  ellipse(55.5,9,6,7);
  quad(58.5, 8,60, 22,53, 17,52.5, 9);

  //eye
  fill("black");
  ellipse(39,35,5,12);
  fill("white");
  ellipse(38,33,1,4);

  //mouth && Nose
  noFill();
  stroke("black");
  arc(25, 46, 13, 8, 0, HALF_PI);

  noStroke();
  fill("black");
  ellipse(25, 41,6,4);

  //front fluff
  fill(whiteColoring);
  ellipse(54,17,12,Math.random()*4+9);
  ellipse(57, 19,12,Math.random()*4+9);
  ellipse(62, 23,12,Math.random()*4+9);

}

function Alpaca(xposition_prefabGlobal,yposition_prefabGlobal){
  head(xposition_prefabGlobal,yposition_prefabGlobal);
  var backBackwardLeg = leg(xposition_prefabGlobal+35,yposition_prefabGlobal-4,false);
  var frontBackwardLeg = leg(xposition_prefabGlobal-15,yposition_prefabGlobal-7,false);
  torso(xposition_prefabGlobal,yposition_prefabGlobal);
  var bag1 = bag(xposition_prefabGlobal+4,yposition_prefabGlobal-32,bag1Coloring);
  var bag2 = bag(xposition_prefabGlobal,yposition_prefabGlobal,bag2Coloring);
  var frontForwardLeg = leg(xposition_prefabGlobal,yposition_prefabGlobal-4,true);
  var backForwardLeg = leg(xposition_prefabGlobal+45,yposition_prefabGlobal-4,true);
}

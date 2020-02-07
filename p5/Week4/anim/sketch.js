const greyColoring = "#D7CAD4";
const backgroundWhiteColoring = "#D6CAD0";
const backgroundGreyColoring = "rgb(182,172,180)"
const whiteColoring = "#F6F6F6";
const brownFurFrontColoring = "#C79166";
const brownFurBackColoring = "#987755";
const bag1Coloring = "#77C0B7";
const bag2Coloring = "#DFBF45";
const bag3Coloring = "#ED225D"

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(400, 200);
  background("rgb(175,190,250)");
  noStroke();
  fill("green");
  var ground = rect(0,130,400,70);

  var aplaca1= Alpaca(0,0,1,"white");
}

function draw() {

  if (mouseIsPressed) {
    // console.log(mouseX + ", " + mouseY);
    Alpaca(95,20,2,"brown");
    Alpaca(200,-25,0,"brown");
    Alpaca(245,20,1,"white");
  }
}

function leg(xposition,yposition,isFrontLeg,furColor){
    if (isFrontLeg) {
      fill(greyColoring);
    } else{
      fill(backgroundGreyColoring);
    }
  //foot
  ellipse(83+xposition,175+yposition,12);
  quad(77+xposition, 174+yposition, 77+xposition, 168+yposition,93+xposition, 167+yposition,89+xposition, 176+yposition);

  if (furColor == "white") {
    if (isFrontLeg) {
      fill(whiteColoring);
    } else{
      fill(backgroundWhiteColoring);
    }
  } else{
    if (isFrontLeg) {
      fill(brownFurFrontColoring);
    } else{
      fill(brownFurBackColoring);
    }
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

function torso(xposition,yposition,furColor){
  //tail
  fill(greyColoring);
  ellipse(154+xposition, 107+yposition,15);

  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  //primary body shape
  quad(45+xposition, 61+yposition,78+xposition, 43+yposition,78+xposition, 69+yposition,48+xposition, 100+yposition);
  quad(78+xposition, 68+yposition,48+xposition, 99+yposition,54+xposition, 127+yposition,82+xposition, 81+yposition);
  quad(54+xposition, 126+yposition,82+xposition, 80+yposition,83+xposition, 85+yposition,69+xposition, 140+yposition);
  quad(82+xposition, 85+yposition,68+xposition, 140+yposition,96+xposition, 143+yposition,88+xposition, 89+yposition);
  quad(95+xposition, 143+yposition,87+xposition, 89+yposition,133+xposition, 90+yposition,137+xposition, 145+yposition);
  quad(132+xposition, 90+yposition,136+xposition, 145+yposition,145+xposition, 134+yposition,142+xposition, 94+yposition);
  quad(144+xposition, 134+yposition,141+xposition, 94+yposition,147+xposition, 100+yposition,149+xposition, 123+yposition);

  //fluff
  ellipse(46+xposition, 62+yposition,8);
  ellipse(48+xposition, 69+yposition,8);
  ellipse(47+xposition, 77+yposition,8);
  ellipse(49+xposition, 86+yposition,8);
  ellipse(48+xposition, 94+yposition,8);
  ellipse(49+xposition, 104+yposition,8);
  ellipse(50+xposition, 111+yposition,8);
  ellipse(52+xposition, 119+yposition,8);
  ellipse(54+xposition, 125+yposition,8);
  ellipse(58+xposition, 132+yposition,8);
  ellipse(64+xposition, 136+yposition,8);
  ellipse(69+xposition, 139+yposition,8);
  ellipse(99+xposition, 141+yposition,8);
  ellipse(106+xposition, 141+yposition,8);
  ellipse(136+xposition, 141+yposition,8);
  ellipse(141+xposition, 135+yposition,8);
  ellipse(144+xposition, 132+yposition,8);
  ellipse(147+xposition, 125+yposition,8);
  ellipse(149+xposition, 119+yposition,8);
  ellipse(149+xposition, 112+yposition,8);
  ellipse(148+xposition, 104+yposition,8);
  ellipse(146+xposition, 100+yposition,8);
  ellipse(142+xposition, 95+yposition,8);
  ellipse(135+xposition, 92+yposition,8);

}

function bag(xposition,yposition, scaleFactor,color){
  //bag shape
  fill(color);
  rect(79+xposition,58+yposition,65,34,200);

  // bag ropes (bottom only)
  fill("brown");
  quad(101+xposition, 58+yposition,100+xposition, 77+yposition,102+xposition, 77+yposition,103+xposition, 58+yposition);
  quad(121+xposition, 58+yposition,120+xposition, 77+yposition,122+xposition, 77+yposition,123+xposition, 58+yposition);

}

function head(xposition,yposition,furColor){
  //background face
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  quad(36+xposition, 56+yposition,39+xposition, 58+yposition,79+xposition, 36+yposition,46+xposition, 25+yposition);
  quad(44+xposition,53+yposition,52+xposition,59+yposition,79+xposition,37+yposition,54+xposition,28+yposition);

  //backear
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  ellipse(38+xposition,8+yposition,8,9);
  fill(greyColoring);
  ellipse(38+xposition,8+yposition,5,7);

  //grey face section
  fill(greyColoring);
  quad(38+xposition, 57+yposition,33+xposition, 56.8+yposition,35+xposition, 20+yposition,66+xposition, 32+yposition);
  triangle(26+xposition, 36+yposition,36+xposition,47+yposition,31+xposition,30+yposition);
  triangle(36+xposition,47.1+yposition,31+xposition,30.1+yposition,35+xposition, 20+yposition);
  triangle(36+xposition,49+yposition,25+xposition,45+yposition,37+xposition,36+yposition)


  //white nose section
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(greyColoring);
  }
  triangle(26.4+xposition, 35.8+yposition,22+xposition, 40.1+yposition,31+xposition, 39.1+yposition);
  quad(22+xposition, 40+yposition,31+xposition, 39+yposition,33+xposition, 44.1+yposition,22+xposition, 48.1+yposition);
  quad(22+xposition, 48+yposition,33+xposition, 44+yposition,34+xposition, 52.1+yposition,28+xposition, 54.1+yposition);
  triangle(28+xposition, 54+yposition,34+xposition, 52+yposition,34+xposition, 57+yposition);

  //white face section
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  quad(38+xposition, 58+yposition,47+xposition, 50+yposition,63+xposition, 64+yposition,41+xposition, 60+yposition);
  quad(47+xposition, 50+yposition,63+xposition, 64+yposition,78+xposition, 62+yposition,49+xposition, 45+yposition);
  quad(78+xposition, 62+yposition,49+xposition, 45+yposition,50+xposition, 37+yposition,78+xposition, 46+yposition);
  quad(50+xposition, 37+yposition,78+xposition, 46+yposition,80+xposition, 37+yposition,49+xposition, 28+yposition);
  quad(80+xposition, 37+yposition,49+xposition, 28+yposition,48+xposition, 25+yposition,78+xposition, 25+yposition);

  //foreheadfluff
  ellipse(34+xposition,17+yposition,12,Math.random()*4+9);
  ellipse(34+xposition, 12+yposition,12,Math.random()*4+9);
  ellipse(39+xposition, 18+yposition,12,Math.random()*4+9);
  ellipse(43+xposition, 22+yposition,12,Math.random()*4+9);
  ellipse(48+xposition, 23+yposition,12,Math.random()*4+9);
  ellipse(49+xposition, 23+yposition,12,Math.random()*4+9);
  ellipse(53+xposition, 25+yposition,12,Math.random()*4+9);
  ellipse(50+xposition, 18+yposition,12,Math.random()*4+9);
  ellipse(43+xposition, 11+yposition,12,Math.random()*4+9);
  ellipse(47+xposition, 11+yposition,12,Math.random()*4+9);
  ellipse(52+xposition, 13+yposition,12,Math.random()*4+9);
  ellipse(63+xposition, 13+yposition,12,Math.random()*4+9);
  ellipse(63+xposition, 15+yposition,12,Math.random()*4+9);
  ellipse(65+xposition, 19+yposition,12,Math.random()*4+9);
  ellipse(72+xposition, 15+yposition,12,Math.random()*4+9);
  ellipse(74+xposition, 18+yposition,12,Math.random()*4+9);
  ellipse(75+xposition, 23+yposition,12,Math.random()*4+9);
  ellipse(69+xposition, 23+yposition,12,Math.random()*4+9);
  ellipse(69+xposition, 23+yposition,12,Math.random()*4+9);

  //frontear
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  ellipse(56+xposition,9+yposition,8,9);
  triangle(60+xposition,8+yposition,62+xposition,23+yposition,53+xposition,17+yposition);

  fill(greyColoring);
  ellipse(55.5+xposition,9+yposition,6,7);
  quad(58.5+xposition, 8+yposition,60+xposition, 22+yposition,53+xposition, 17+yposition,52.5+xposition, 9+yposition);

  //eye
  fill("black");
  ellipse(39+xposition,35+yposition,5,12);
  fill("white");
  ellipse(38+xposition,33+yposition,1,4);

  //mouth && Nose
  noFill();
  stroke("black");
  arc(25+xposition, 46+yposition, 13, 8, 0, HALF_PI);

  noStroke();
  fill("black");
  ellipse(25+xposition, 41+yposition,6,4);

  //front fluff
  if(furColor == "white"){
    fill(whiteColoring);
  } else {
    fill(brownFurFrontColoring);
  }
  ellipse(54+xposition,17+yposition,12,Math.random()*4+9);
  ellipse(57+xposition, 19+yposition,12,Math.random()*4+9);
  ellipse(62+xposition, 23+yposition,12,Math.random()*4+9);

}

function Alpaca(xposition_prefabGlobal,yposition_prefabGlobal,bagNumber,furColoration){
  head(xposition_prefabGlobal,yposition_prefabGlobal,furColoration);
  var backBackwardLeg = leg(xposition_prefabGlobal+35,yposition_prefabGlobal-4,false,furColoration);
  var frontBackwardLeg = leg(xposition_prefabGlobal-15,yposition_prefabGlobal-7,false,furColoration);
  torso(xposition_prefabGlobal,yposition_prefabGlobal,furColoration);
  if(bagNumber == 1){
    var bag1 = bag(xposition_prefabGlobal,yposition_prefabGlobal,.5,bag3Coloring);
  } else if(bagNumber == 2){
    var bag1 = bag(xposition_prefabGlobal+4,yposition_prefabGlobal-32,.5,bag1Coloring);
    var bag2 = bag(xposition_prefabGlobal,yposition_prefabGlobal,.5,bag2Coloring);
  }
  var frontForwardLeg = leg(xposition_prefabGlobal,yposition_prefabGlobal-4,true,furColoration);
  var backForwardLeg = leg(xposition_prefabGlobal+45,yposition_prefabGlobal-4,true,furColoration);
}

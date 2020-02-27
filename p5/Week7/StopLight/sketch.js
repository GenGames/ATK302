var currentState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);
  textSize(40);
}

function draw() {
  timer += 1/60; // get time in seconds

  if (timer >= 1.5) {
    currentState++;
    timer = 0;
  }

  if (currentState >= 3) {
    currentState = 0;
  }
  // put drawing code here
  background('grey');

  switch (currentState) {
    case 0:
      stopLight("Green");
      break;

    case 1:
      stopLight("Yellow");
      break;

    case 2:
      stopLight("Red");
      break;
  }
}

function stopLight(color){
  console.log(color + " State");
  fill('rgb(250,250,50)');
  rect(50,50,200,440);

  if (color == "Green") {
    fill('rgb(150,50,50)');
    circle(150,390,100);

    fill('rgb(150,150,30)');
    circle(150,270,100);

    fill('rgb(100,255,100)');
    circle(150,150,100);

  } else if(color == "Yellow"){

    fill('rgb(150,50,50)');
    circle(150,390,100);

    fill('rgb(255,255,50)');
    circle(150,270,100);

    fill('rgb(50,150,50)');
    circle(150,150,100);

  } else if (color == "Red"){
    fill('rgb(255,100,50)');
    circle(150,390,100);
    
    fill('rgb(150,150,30)');
    circle(150,270,100);

    fill('rgb(50,150,50)');
    circle(150,150,100);
  }
}

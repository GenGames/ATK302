var startingXpositionText = 20;
var startingXpositionData = 70;
var startingYPosition = 10;
var endingYposition = 650;
var endingXposition = 850;
var datawidth = 80;

var responses = [];
var answers = ["G","O","O","G","L","E"];


function setup() {
  rectMode(CORNER)
  let url = "1wuyRKWzTVTq1TyJQFwV1_6yPUsy1Gq6n-xws3T4NIYQ";
  let settings = {
    key: url,
    callback: processData,
    simpleSheet: true
  }
  print("If you are reading this, google has throttled my data and the webpage cannot load")

    Tabletop.init(settings);
  // put setup code here
  createCanvas(900,700);
  background("grey");
  for (var i = 0; i < answers.length; i++) {
    responses.push(0);
  }
}

function draw() {
  // put drawing code here
}

function processData(data){
  for (var i = 0; i < data.length; i++) {
    switch (data[i].google) {
      case 'The "G" of course, Iconic':
      responses[0]++;
        break;
      case 'The first "O" really sets the stage for why its a great word.':
      responses[1]++;
        break;
      case 'the Second "O" hands down.':
      responses[2]++;
        break;
      case 'The Second "G", Often forgotten but always there':
      responses[3]++;
        break;
      case 'The "L" is just the kind of labio-dental voiceless sound the word needs.':
      responses[4]++;
        break;
      case 'No, the true best letter is the unsung hero, the "E".':
      responses[5]++;
        break;
      default:

    }
  }

  visualizeData();
}

function visualizeData(){
  var highestTotal = 0;
  var highestIndex = 0;

  for (var i = 0; i < responses.length; i++) {
    if (responses[i] > highestTotal) {
      highestTotal = responses[i];
      highestIndex = i;
    }
  }

  textSize(40);
  for (var i = 0; i < responses.length; i++) {
    // if (i = highestIndex) {
    //   fill("yellow")
    // }else{
    //   fill("Black");
    // }
    text(answers[i],startingXpositionText,startingYPosition*6.3+((endingYposition - startingYPosition)/responses.length)*i);
    rect(startingXpositionData,startingYPosition+((endingYposition - startingYPosition)/responses.length)*i,(endingXposition-startingXpositionData)*(responses[i]/highestTotal),datawidth);
  }

}

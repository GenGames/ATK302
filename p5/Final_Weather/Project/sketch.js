var weatherJSON;
var backgroundImage = [];
var xOffset = 50;
var yOffset = 50;
var currentDirection;
var weatherConditionIndex = 0;

function preload(){
  // default
  backgroundImage.push(loadImage('https://media-exp1.licdn.com/dms/image/C4D1BAQGRg38lvZy0Ow/company-background_10000/0?e=2159024400&v=beta&t=PukLEz1lZ_JtC5VNpHST9cqx1ryocwEu8fXu9drkVjc'));
  // Clear
  backgroundImage.push(loadImage('https://bloximages.chicago2.vip.townnews.com/missoulian.com/content/tncms/assets/v3/editorial/5/aa/5aa9642f-e19b-5cb8-91b8-e07165f99a3b/59a05d725869b.image.jpg?resize=1200%2C800'));
  // cloudy
  backgroundImage.push(loadImage('https://hoodline.imgix.net/uploads/story/image/409127/istock__..featured_image_1..cloudy_2.jpg.jpg?auto=format'));
  // Rain
  backgroundImage.push(loadImage('https://s7d2.scene7.com/is/image/TWCNews/rain_jpg-9'));
  // Storm
  backgroundImage.push(loadImage('https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'));
  // Snow
  backgroundImage.push(loadImage('https://cdn.shopify.com/s/files/1/2658/1334/products/YY00273_grande.jpg?v=1571678283'));
}

function setup() {
  // put setup code here
  createCanvas(800,800);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&appid=ecb96c6f2772adc0320aaa567d9006dc',onDataLoaded)
  currentDirection = createVector(1.5,1.5,0);
}

function onDataLoaded(data){
  weatherJSON = data;
  buildInterface();
  print(data);
}

function buildInterface(){
  var currentCondition = weatherJSON.weather[0].main;
  switch (currentCondition) {
    case "Clear":
      weatherConditionIndex = 1;
      break;
    case "Cloudy":
      weatherConditionIndex = 2;
      break;
    case "Rain":
      weatherConditionIndex = 3;
      break;
    case "Storm":
      weatherConditionIndex = 4;
      break;
    case "Snow":
      weatherConditionIndex = 5;
      break;
    default:
  }

  determineCanvas(weatherConditionIndex);

}

function determineCanvas(imageNumber){
  createCanvas(backgroundImage[imageNumber].width,backgroundImage[imageNumber].height);
}

function draw(){
  if (weatherJSON != undefined) {
    background(backgroundImage[weatherConditionIndex]);
    textSize(30);
    text("The weather today is: ", xOffset,yOffset);
    textSize(20);
    text("The Temp: " + weatherJSON.main.temp + "F",xOffset,yOffset + 40);

    if (weatherJSON.main.humidity >= 50) {
      text("And be warned, its rather humid",xOffset,yOffset + 100);
    } else if(weatherJSON.main.humidity >= 70){
      text("And be warned, its VERY humid",xOffset,yOffset + 100);
    }

    if(Math.abs(weatherJSON.main.feels_like-weatherJSON.main.temp) > 7){
      text("But watch out, it feels like: " + weatherJSON.main.feels_like,xOffset,yOffset + 70);
    }

    xOffset += currentDirection.x;
    yOffset += currentDirection.y;
    if (xOffset >= width) {
      xOffset = 0;
    } else if (yOffset >= height) {
      yOffset = 0;
    }

  }
}

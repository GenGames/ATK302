var cars = [];


function preLoad(){

}

function setup() {
  // put setup code here
  rectMode("center");
  createCanvas(800,800);
  for (var i = 0; i < 25; i++) {
    cars.push(new Car());
  }
}

function draw(){
  background("black");
  for (var i = 0; i < cars.length; i++) {
    cars[i].spawn();
    cars[i].update();
  }
}

// Car Constructor
function Car(){
  this.accelerant = 0;
  this.color = createVector(random(255),random(255),random(255));
  this.size = random(50,100);
  this.position = createVector(random(5 + this.size/2, width - 5 -  this.size/2),random(5 + this.size/2, height - 5 -  this.size/2));
  this.velocity = createVector(random(-5,5),random(-5,5));


  this.update = function(){
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < 0 - this.size/2)  {this.position.x =width + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.x > width + this.size/2) {this.position.x = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.y < 0 - this.size/2) {this.position.y =height + this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    else if (this.position.y > height + this.size/2) {this.position.y = 0 -this.size/2; this.velocity = createVector(random(-5-this.accelerant,5+this.accelerant),random(-5-this.accelerant,5+this.accelerant)); this.accelerant++;}
    if (this.accelerant >= 50 && random(100) >99) {
      this.accelerant = 0;
    }
  }

  this.spawn = function(){
    fill(this.color.x,this.color.y,this.color.z);
    rect(this.position.x,this.position.y,this.size,this.size);
  }
}

/* LET'S PLAN
1. There is an array, cars
2. This array generates a bunch of rectangles in random locations inside the canvas
2b. each rectangle gets a random color... these rectangles are cars
3. On spawn each car get's a random vector assigned to it
4. Car's all move along the path of their given vector
5. if a car hits a wall the car disappears and a new car is spawned

CAR MANAGER
------------
tracks the cars
spawns cars at start
perhaps spawns car on destruction?

CAR OBJECT
------------
generates itself on spawn with random color and direction

*/

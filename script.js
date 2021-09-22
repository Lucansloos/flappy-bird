var y;
var velocity;
var acceleration;

var gravity;

function setup() {
  createCanvas(640, 360);

  y = 100;
  velocity = 0;
  acceleration = 0;

  gravity = 0.9;

  acceleration = gravity;
}

function draw() {
  background(127);
  fill(255,0,0);

  if (y >= 300) {
    y = 300;

    if (velocity < 0) {
      y += velocity;
    }
  }
  else {
    velocity += acceleration;
    y += velocity;
  }

  ellipse(640/2, y, 20, 20);
}

function keyPressed() {
  if (keyCode === 32) {
    velocity = -10;
  }
}








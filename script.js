var y;
var velocity;
var acceleration;
var gravity;

class Rect {
  constructor(x, y, w, h, vx, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.color = color
  }


  drawRect() {
    fill(this.color)
    rect(this.x, this.y, this.w, this.h); 
    this.x = this.x + this.vx;

  }
}

var rect1;

function setup() {
  createCanvas(640, 360);

  rect1 = new Rect(640, 300, 30, 100, -5, "green");

  y = 100;
  velocity = 0;
  acceleration = 0;

  gravity = 0.9;

  acceleration = gravity;
}

function draw() {
  background(127);
  fill(255, 0, 0);

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

  ellipse(640 / 2, y, 25, 25);

  rect1.drawRect();
}

function keyPressed() {
  if (keyCode === 32) {
    velocity = -10;
  }
}




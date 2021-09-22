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

var rects = [];

function setup() {
  createCanvas(640, 360);
  flappybirdgeel = loadImage('images/flappy bird geel.png');
  
  rect1 = new Rect(640, 300, 30, 200, -5, "green");
  rect2 = new Rect(640, 0, 30, 150, -5, "green");  
  rects.push(rect1);
  rects.push(rect2);

  y = 100;
  velocity = 0;
  acceleration = 0;

  gravity = 0.9;

  acceleration = gravity;
}

function draw() {
  background(127);
  fill(255, 0, 0);

  if(frameCount % 60 == 0){
    console.log(frameCount);
    let newRectBot = new Rect(640, 300, 30, 200, -5, "green");
    let newRectTop = new Rect(640, 0, 30, 150, -5, "green");  
    rects.push(newRectBot);
    rects.push(newRectTop);
    

    //console.log(rects.length)
  }

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

  image(flappybirdgeel, 600 / 2, y, 70, 70);
 
  rects.forEach(r => r.drawRect());

}

function keyPressed() {
  if (keyCode === 32) {
    velocity = -10;
  }
}









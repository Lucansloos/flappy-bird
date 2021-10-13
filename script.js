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

class Bird {
  constructor(y, velocity, gravity) {
    this.y = y;
    this.velocity = velocity;
    this.gravity = gravity;
    this.flappybirdgeel = loadImage('images/flappy bird geel.png');
  }

  draw() {
    image(this.flappybirdgeel, 600 / 2, this.y, 100, 100);

    if (this.y >= 300) {
      this.y = 300;

      if (this.velocity < 0) {
        this.y += this.velocity;
      }
    }
    else {
      this.velocity += this.gravity;
      this.y += this.velocity;
    }
  }
}

var rects = [];
var bird;
var jumpSound;

var gameState;


function preload(){
  jumpSound = loadSound('sounds/jump.mp3');
}


function setup() {
  createCanvas(640, 360);
  
  bg = loadImage('images/background flappy bird.png');

  
  let randmHeight = random(height / 2);

  rect1 = new Rect(640, 300, 50, randmHeight + 100, -5, "green");
  rect2 = new Rect(640, 0, 50, randmHeight, -5, "green");
  rects.push(rect1);
  rects.push(rect2);

  bird = new Bird(100, 0, 0.9);

  gameState = 0;
  // Gamestate 0: menu
  // 1: game
  // 2: game over;
}

function draw() {
  background(127);
  fill(255, 0, 0);

  background(bg);

  if (gameState == 0) {
    startMenu();
  }
  else if (gameState == 1) {
    game();
  }
  else if (gameState == 2) {
    gameOver();
  }
}

function keyPressed() {
  if (gameState == 0) {
    if (keyCode === 32) {
      gameState = 1;
    }
  }
  else if (gameState == 1) {
    if (keyCode === 32) {
      bird.velocity = -10;
      jumpSound.play();
    }
  }
  else if (gameState == 2) {
    if (keyCode === 32) {
      rects.length = 0;
      gameState = 1;
    }
  }
}

function checkCollision(cx, cy, rad, rx, ry, rw, rh) {
  let testX = cx;
  let testY = cy;
  
  if (cx < rx)         testX = rx;      // test left edge
  else if (cx > rx+rw) testX = rx+rw;   // right edge
  if (cy < ry)         testY = ry;      // top edge
  else if (cy > ry+rh) testY = ry+rh;   // bottom edge
  
  let d = dist(cx, cy, testX, testY);
  
  if (d <= rad) {
    return true;
  }
  return false;

}

function startMenu() {
  text("ABC", 100, 100);
}

function gameOver() {
  text("dood", 100, 100);
}

function game() {
    if (frameCount % 60 == 0) {
    console.log(frameCount);
     let randmHeight = random(height / 2);
    let newRectBot = new Rect(640, randmHeight + 100, 50, height - (randmHeight + 100), -5, "green");
    let newRectTop = new Rect(640, 0, 50, randmHeight, -5, "green");
    rects.push(newRectBot);
    rects.push(newRectTop);


    //console.log(rects.length)
    if(rects.length > 6){
      rects.splice(0,2);
    }
  }


  bird.draw();




  rects.forEach((r) => {
    r.drawRect()
    if(checkCollision(600 / 2 + 50, bird.y + 50, 16, r.x, r.y, r.w, r.h)){
      gameState = 2;
      //r.color = "red";
    }
    else {
      //r.color = "green";
    }
  });
}
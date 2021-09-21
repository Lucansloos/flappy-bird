// function setup() {
// 	createCanvas(500, 400);
// }

// var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

// function draw() {
// 	background(225);
	
// 	fill(0);
// 	text("Use the arrow keys (or WASD) to move the square around", 25, 25);
	
// 	fill(0, 255, 0);
// 	rect(xpos, ypos, 50, 50);
	
// 	if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
// 	if(ypos >= 0 && ypos + 50 <= 500) ypos += yspeed;
// }

// function keyPressed() {
// 	switch(keyCode) {
// 		case 37:
// 		case 65:
// 			xspeed = -2;
// 			break;
// 		case 39:
// 		case 68:
// 			xspeed = 2;
// 			break;
// 		case 38:
// 		case 87:
// 			yspeed = -2;
// 			break;
// 		case 40:
// 		case 83:
// 			yspeed = 2;
// 			break;
// 	}
// }

// function keyReleased() {
// 	switch(keyCode) {
// 		case 37:
// 		case 65:
// 			xspeed = 0;
// 			break;
// 		case 39:
// 		case 68:
// 			xspeed = 0;
// 			break;
// 		case 38:
// 		case 87:
// 			yspeed = 0;
// 			break;
// 		case 40:
// 		case 83:
// 			yspeed = 0;
// 			break;
// 	}
// }








// class Ellipse {
//   constructor(x, y, w, h, vx, vy, color) {
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//       this.vx = vx;
//       this.vy = vy
//       this.color = color
//   }

//   drawEllipse(){
//     fill(this.color)
//    ellipse(this.x, this.y, this.w, this.h);

//    this.x = this.x + this.vx;

//   }
// }

// function setup(){
//   createCanvas(300, 300);

//   ball1 = new Ellipse(60,10,30,30,5,5,"white");

// }

// function draw(){
//   background(225);

//   ball1.drawEllipse();

// }



















// var yVal; 
// var accel; 
// var velocity; 
// var mass; 



// function setup() {
//   createCanvas(640, 360);
  
//   yVal = 0;  
//   velocity = 0; 
//   mass = 50; 
  
//   accel = mass * 0.1; 
// }

// function draw() {
//   background(127);
//   fill(255,0,0);
  
//   velocity += accel; 
//   yVal += velocity;
// 	ellipse(width/2,yVal, mass,mass); 
  
//   if (yVal >= 300) yVal = 300;

//   if (accel < 0) accel = mass * 0.1;
// }


// function mousePressed() {
//   yVal = 0;  
//   velocity = 0; 
// }

// function keyPressed() {
//   if (keyCode === 32) {

//     accel = -20;
//   }
// }

















var y;
var velocity;
var acceleration;

var gravity;

var jumpHeight;

var startJumpHeight;

function setup() {
  createCanvas(640, 360);

  y = 100;
  velocity = 0;
  acceleration = 0;

  gravity = 0.9;

  acceleration = gravity;

  jumpHeight = 30;
}

function draw() {
  background(127);
  fill(255,0,0);

  velocity += acceleration;
  y += velocity;

  print(y - startJumpHeight);

  if (y >= 300) {
    velocity = 0;
    acceleration = 0;
    y = 300;
  }
  ellipse(640/2, y, 20, 20);

  if (y - startJumpHeight <= -jumpHeight) {
    acceleration = gravity;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    startJumpHeight = y;
    acceleration = -1;
    velocity = -5;
  }
}
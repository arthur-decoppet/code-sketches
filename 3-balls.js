let x1 = 100;
let x2 = 300;
let x3 = 500;

let y1 = 100;
let y2 = 300;
let y3 = 500;

let vx1 = 3;
let vx2 = -4;
let vx3 = 5;

let vy1 = 4;
let vy2 = 2;
let vy3 = -3;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(240);

  x1 += vx1;
  y1 += vy1;

  x2 += vx2;
  y2 += vy2;

  x3 += vx3;
  y3 += vy3;

  if (x1 < 0 || x1 > width) vx1 *= -1;
  if (y1 < 0 || y1 > height) vy1 *= -1;

  if (x2 < 0 || x2 > width) vx2 *= -1;
  if (y2 < 0 || y2 > height) vy2 *= -1;

  if (x3 < 0 || x3 > width) vx3 *= -1;
  if (y3 < 0 || y3 > height) vy3 *= -1;

  fill(255, 0, 100);
  circle(x1, y1, 50);

  fill(0, 150, 255);
  circle(x2, y2, 70);

  fill(255, 200, 0);
  circle(x3, y3, 40);
}
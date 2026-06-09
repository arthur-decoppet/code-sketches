var x1 = 0;
var x2 = 0;

function setup() {

  createCanvas(600, 600);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

}

function draw() {

  background(30, 65, 220);

  fill(255);
  noStroke();

  textSize(35);

  for (let i = 0; i < 12; i++) {

    let y = 70 + i * 45;

    if (i % 2 == 0) {

      text(
        "are you ok   are you ok   are you ok   are you ok",
        width / 2 + x1,
        y
      );

    } else {

      text(
        "are you ok   are you ok   are you ok   are you ok",
        width / 2 - x2,
        y
      );

    }

  }

  x1 = x1 + 1.5;
  x2 = x2 + 1.5;

  if (x1 > 300) {
    x1 = -300;
  }

  if (x2 > 300) {
    x2 = -300;
  }

  fill(30, 65, 220);
  noStroke();

  drawPixelO(190, 300, 95);
  drawPixelK(360, 300, 95);

  noFill();
  stroke(255);
  strokeWeight(6);

  drawPixelO(190, 300, 95);
  drawPixelK(360, 300, 95);

}

function drawPixelO(x, y, s) {

  rectMode(CENTER);

  rect(x, y - s, s, 35);
  rect(x, y + s, s, 35);

  rect(x - s / 2, y, 35, s * 2);
  rect(x + s / 2, y, 35, s * 2);

}

function drawPixelK(x, y, s) {

  rectMode(CENTER);

  rect(x - s / 2, y, 35, s * 2.3);

  rect(x + 15, y - 35, 35, 110);
  rect(x + 45, y - 75, 35, 80);

  rect(x + 15, y + 35, 35, 110);
  rect(x + 45, y + 75, 35, 80);

}

function keyPressed() {

  if (key === "s") {

    save("ok.png");

  }

}
let ancienX = 0;
let ancienY = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(255);

}

function draw() {

  ancienX = ancienX + ((mouseX - ancienX) / 8);
  ancienY = ancienY + ((mouseY - ancienY) / 8);

  if (mouseIsPressed) {

    stroke(0);

    line(mouseX, mouseY, ancienX, ancienY);

    line(mouseX + 10, mouseY, ancienX + 10, ancienY);

    line(mouseX - 10, mouseY, ancienX - 10, ancienY);

    line(mouseX, mouseY + 10, ancienX, ancienY + 10);

    line(mouseX, mouseY - 10, ancienX, ancienY - 10);

  }

}

function keyPressed() {

  if (key == "x") {

    background(255);

  }

  if (key == "s") {

    save("elastic.png");

  }

}
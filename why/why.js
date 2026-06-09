let wX = 0;
let wY = 0;

let hX = 0;
let hY = 0;

let yX = 0;
let yY = 0;

let casse = false;

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textStyle(BOLD);

}

function draw() {

  background(245);

  let centreX = width / 2;
  let centreY = height / 2;

  if (casse == true) {

    wX = wX + ((-160 - wX) / 12);
    wY = wY + ((40 - wY) / 12);

    hX = hX + ((0 - hX) / 12);
    hY = hY + ((-120 - hY) / 12);

    yX = yX + ((160 - yX) / 12);
    yY = yY + ((40 - yY) / 12);

  } else {

    wX = wX + ((0 - wX) / 12);
    wY = wY + ((0 - wY) / 12);

    hX = hX + ((0 - hX) / 12);
    hY = hY + ((0 - hY) / 12);

    yX = yX + ((0 - yX) / 12);
    yY = yY + ((0 - yY) / 12);

  }

  fill(0);
  noStroke();

  textSize(120);

  text("W", centreX - 90 + wX, centreY + wY);
  text("H", centreX + hX, centreY + hY);
  text("Y", centreX + 90 + yX, centreY + yY);

}

function mouseClicked() {

  casse = !casse;

}

function keyPressed() {

  if (key == "s") {

    save("why.png");

  }

}
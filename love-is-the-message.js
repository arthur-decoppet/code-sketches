let photos = [];

let phrase = "love is the message";

function preload() {

  for (let i = 1; i <= 13; i++) {

    photos[1] = loadImage("Plan de travail 1.png");
    photos[2] = loadImage("Plan de travail 2.png");
    photos[3] = loadImage("Plan de travail 3.png");
    photos[4] = loadImage("Plan de travail 4.png");
    photos[5] = loadImage("Plan de travail 5.png");
    photos[6] = loadImage("Plan de travail 6.png");
    photos[7] = loadImage("Plan de travail 7.png");
    photos[8] = loadImage("Plan de travail 8.png");
    photos[9] = loadImage("Plan de travail 9.png");

  }

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);

  textStyle(BOLD);

}

function draw() {

  background(250);

  let centreX = width / 2;
  let centreY = height / 2;

  fill(0);

  noStroke();

  let tailleTexte = 40;

  textSize(tailleTexte);

  text(
    phrase,
    centreX,
    centreY
  );

  imageMode(CENTER);

  hoverPhoto(1, centreX - 180, centreY - 30, centreX - 180);
  hoverPhoto(2, centreX - 140, centreY - 30, centreX - 140);
  hoverPhoto(3, centreX - 100, centreY - 30, centreX - 100);
  hoverPhoto(4, centreX - 60, centreY - 30, centreX - 60);

  hoverPhoto(5, centreX - 20, centreY - 30, centreX - 20);

  hoverPhoto(6, centreX + 20, centreY - 30, centreX + 20);
  hoverPhoto(7, centreX + 60, centreY - 30, centreX + 60);
  hoverPhoto(8, centreX + 100, centreY - 30, centreX + 100);
  hoverPhoto(9, centreX + 140, centreY - 30, centreX + 140);

}

function hoverPhoto(numero, x, y, zoneX) {

  let survole = false;

  if (
    mouseX > zoneX - 20 &&
    mouseX < zoneX + 20 &&
    mouseY > height / 2 - 35 &&
    mouseY < height / 2 + 35
  ) {

    survole = true;

  }

  if (survole == true) {

    image(
      photos[numero],
      x,
      y,
      80,
      100
    );

  }

}

function keyPressed() {

  if (key == "s") {

    save("love-is-the-message.png");

  }

}
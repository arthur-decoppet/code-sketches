let angle = 0;

let texte = "CATER BASICS: HEY KIDS LET'S CODE CATER BASICS: HEY KIDS LET'S CODE CATER BASICS: HEY KIDS LET'S CODE ";

function setup() {

  createCanvas(windowWidth, windowHeight);

  textStyle(BOLD);

}

function draw() {

  background(255);

  fill(0);

  noStroke();

  textSize(30);

  let compteur = 0;

  for (let y = 80; y < height - 80; y += 45) {

    for (let x = 40; x < width - 40; x += 20) {

      let lettre = texte[compteur % texte.length];

      let nouveauY = y + sin(angle + compteur * 0.1) * 15;

      text(
        lettre,
        x,
        nouveauY
      );

      compteur++;

    }

  }

  angle = angle + 0.03;

}

function keyPressed() {

  if (key == "s") {

    save("cater-wave.png");

  }

}
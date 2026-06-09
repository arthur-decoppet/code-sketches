let words = [
  "life in 2026",
  "trump",
  "marathon",
  "hyrox",
  "social media",
  "iran",
  "G7",
  "war",
  "palestine genocide",
  "world cup in qatar",
  "saudia olympic",
  "nettanaiyu",
  "puttin",
  "ukrain",
  "tiktok",
  "buy a house",
  "long studies",
  "Feminicide"
];

let currentWord = 0;
let x;
let y;
let vx = 4;
let vy = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(LEFT, TOP);

  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  let w = textWidth(words[currentWord]);
  let h = textAscent() + textDescent();

  x += vx;
  y += vy;

  if (x <= 0) {
    x = 0;
    vx *= -1;
    changeWord();
  }

  if (x + w >= width) {
    x = width - w;
    vx *= -1;
    changeWord();
  }

  if (y <= 0) {
    y = 0;
    vy *= -1;
    changeWord();
  }

  if (y + h >= height) {
    y = height - h;
    vy *= -1;
    changeWord();
  }

  fill(255);
  text(words[currentWord], x, y);
}

function changeWord() {
  let nextWord = currentWord;

  while (nextWord === currentWord) {
    nextWord = floor(random(words.length));
  }

  currentWord = nextWord;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  stroke(0, 0, 0);

  //declare lines variable
  let lines = 0;

  // repeat as long as lines is <= 25
  while (lines <= 24) {
    let r1 = random(0, width);
    let r2 = random(0, height);
    let r3 = random(0, width);
    let r4 = random(0, height);
    line(r1, r2, r3, r4);

    //increment by 1
    lines += 1;
  }
}

function draw() {}

function mouseClicked() {
  setup();
}

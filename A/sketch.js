function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);

  for (y = 0; y < height; y += 100) {
    for (x = 0; x < width; x += 100) {
      rect(x,y,90)
    }
  }

}

function draw() {}

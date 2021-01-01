function setup() {
  myWidth = windowWidth;
  myHeight = windowHeight;

  // store the canvas in a pointer variable
  // now its methods can be accessed
  var myCanvas = createCanvas(myWidth, myHeight);

  // adding canvas as a child of a container
  myCanvas.parent('my-container')
  stroke(255);
  strokeWeight(1);
  smooth();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let v = 0;
let w = 0;

function draw() {
  fill(230, 30);
  rect(0, 0, width, height);

  noFill();
  beginShape();
  for (let x = 0; x < width; x += 1) {
    vertex(x, height / 2 + mouseY *
      sin(v + (x / map(mouseX, 0, width, 1, 600))) *
      tan(w + (x / map(mouseY, 0, width, 50, 1200))) *
      sin(v + (x / map(mouseY, 0, height, 1, 600)))
    );
  }
  endShape();
  v -= 0.02;
  w += 0.04;
}
var x;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(3);
  rectMode(CENTER);
 
  
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //stroke(50);
  //strokeWeight(2);
 
  push();
 
  fill(random(15));
  circle(0, 0, 480-(hr-12)*40);
  pop();
  
  
 
  noFill();
  
  push();
  strokeWeight(2);
  stroke(0, 0, 255);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  rotate(end3);
  ellipse(100, 0, 400, hr*8);
  pop();
  
  
  push();
  stroke(255, 0, 0);
  let end2 = map(mn, 0, 60, 0, 360);
  rotate(end2);
  circle(100, 0, mn*2+20);
  pop();
  
  push();
  
  strokeWeight(2);
  stroke(0, 255, 0);
  let end1 = map(sc, 0, 60 , 0, 360);
  rotate(end1);
  circle(100, 0, sc*1.5+5);
  
  pop();
  
  
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
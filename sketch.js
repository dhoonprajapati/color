let isSqueezed = false;
function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(57,889)
  camera (-40,800,300);
  
  if (isSqueezed === true) {
    
  }

  rotateX(frameCount * 0.10)
  sphere(50)
fill(0,0,0)
rotateY(frameCount * 0.05);
 box(-20, -20, 875);
   rotateX(frameCount * 0.30)
   box(-20, -20, 875);
  fill(45,88,95)
  orbitControl(400)
  sphere( )
}  
var metas = []

function setup() {
  createCanvas(800,800);
metas.push(new Meta(width / 2 - 100, height / 2, 100, false))
metas.push(new Meta(width / 2 + 100, height / 2, 100, true))
}

function draw() {
  background(0);  
 loadPixels()
pixelDensity(6)
 for(var x = 0; x < width; x += 2){
 for(var y = 0; y < height; y += 2){
  var color = 0
   for(var i = 0; i < metas.length; i++){
    color += dist(x, y, metas[i].x, metas[i].y) / 5
   }
  set(x, y, color)
  set(x + 1, y + 1, color)

 }
 }

 
 updatePixels();

 for(var i =0; i < metas.length; i++){
  metas[i].show()
 }
}

class Meta {
  constructor(x, y, r, f){
    this.x = x
    this.y = y
    this.r = r
    this.f = f
  }

  show(){
    
    stroke(0)
   noFill()
   if(this.f===true){
    this.x = mouseX
    this.y = mouseY
   } else {
   
   }

   circle(this.x, this.y, this.r)
  }
}
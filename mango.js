class Mango {
  constructor(x, y, radius) {
    var options = {
        'restitution':0,
        'friction':1,
        'isStatic': true
    }
    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius = radius;
    this.image=loadImage("mango.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill("white");
    imageMode(CENTER)
    image(this.image, 0, 0, this.radius,this.radius);
    pop();
  }
};

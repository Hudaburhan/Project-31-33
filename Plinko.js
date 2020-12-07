class Plinko{
   constructor(x,y){
   var options = {
    'restitution':0.8,
    'isStatic':true,
}
this.radius=10;
this.body = Bodies.circle(x, y, this.radius ,options);
World.add(world, this.body);
}
display(){
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
fill("white");
ellipseMode(RADIUS);
ellipse(0,0, this.radius, this.radius);
pop();
}
} 
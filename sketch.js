function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  for(var j = 0; j < particles.legth; j++){ 
   
    particles[j].display;
  }

  for(var k = 0; k < divisions.legth; k++){ 
   
    divisions[k].display;
  }

  for(var v= 0; v < plinko.legth; v++){ 
   
    plinko[v].display;
  }
}

var particle= []; 
var plinko= [];
var divisions= [];
var divisionHeight=300;

function draw() {
  background(255,255,255);  
  drawSprites();

  for(var k=0; k<=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

if(particle!=null)
{

   particle.display();

if(particle.body.position.y>760)
{

if(particle.body.position.x < 300) 
{
  score=score+500;
  particle=null;

  if(count>=5) gamestate="end";
}

if(particle.body.position.x > 301 && particle.body.position.x < 600) 
{
  score=score+100;
  particle=null;

  if(count>=5) gamestate="end";
}

if(particle.body.position.x > 601 && particle.body.position.x <900) 
{
  score=score+200;
  particle=null;

  if(count>=5) gamestate="end";
}
 }
  }
   }


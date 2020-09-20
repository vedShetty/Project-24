const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world, ground;
var dustbin1, dustbin2, dustbin3;
var paper;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height-20,1200,15);
	
  dustbin1 = new Dustbin(900,height-35,300,15);
  dustbin2 = new Dustbin(750,height-75,15,80);
  dustbin3 = new Dustbin(1050,height-75,15,80);

  paper = new Paper(100,360);

}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  //keyPressed();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-17});
  }

}


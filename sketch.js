
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 var bob1, bob2, bob3, bob4, bob5
 var Roof
 var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(240,500,40)
	bob2 = new bob(320,500,40)
	bob3 = new bob(400,500,40)
	bob4 = new bob(480,500,40)
	bob5 = new bob(560,500,40)

	Roof = new roof(400,200,400,30)

	rope1 = new Rope(bob1.body, 240,200)

	Engine.run(engine);
  
}


function draw() {
	background(255)
  rectMode(CENTER);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  Roof.display()
  rope1.display()
  
  drawSprites();
 
}




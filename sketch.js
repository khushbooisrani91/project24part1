
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper1,dustbinImg,paperImg;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(100,400,40);
	

	ground = new Ground(600,550,1200,20);

	dustbin3 = new Dustbin(950,530,280,20);
	dustbin1 = new Dustbin(800,470,20,100);
	dustbin2 = new Dustbin(1100,470,20,100);
	
	

	Engine.run(engine);
  
	

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();

  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-1})
	   
	 }
   }
   



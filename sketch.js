
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImg = loadImage("dustbin.png");	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(178,631);
	ground = new Ground(300,655,1800,10);
	dustbin1 = new Dustbin(980,650,100,20);
	dustbin2 = new Dustbin(950,610,20,110);
	dustbin3 = new Dustbin(1030,610,20,110);

	dustbin = createSprite(990,580,20,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.5;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-44});
	}
}




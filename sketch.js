
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(70,250,40,40);
	bin1 = new Bin(560,635,270,20);
	bin2 = new Bin(430,555,20,170);
	bin3 = new Bin(701,555,20,170);
    ground = new Ground(350,650,900,15)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ball.display(); 
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
 }

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce
		 (ball.body ,ball.body.position,{x:85, y:-85});
	 }
 }



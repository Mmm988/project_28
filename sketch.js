const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var ground;
var tree,treeImage;
var boy,boyImage;
var stone,sling1;
var mg1,mg2,mg3,mg4,mg5,mg6;

function preload()
{
	boyImage=loadImage("boy.png")
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(200,620,50,50)
	boy.addImage(boyImage);
	boy.scale=0.1

	tree=createSprite(900,415)
	tree.addImage(treeImage)
	tree.scale=0.45

	ground=new Ground(600,690,1200,20)

	mg1=new Mango(930,300,50);
	mg2=new Mango(750,340,50);
	mg3=new Mango(1050,260,50);
	mg4=new Mango(830,200,50);
	mg5=new Mango(1100,350,50);
	mg6=new Mango(950,180,50)

	stone=new Stone(200,200,50);

	sling1=new SlingShot(stone.body,{x:147,y:563})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");

ground.display();

  drawSprites();

 mg1.display();
 mg2.display();
 mg3.display();
 mg4.display();
 mg5.display();
 mg6.display();
 stone.display();
 sling1.display();

    detectollision(stone,mg1);
	detectollision(stone,mg2);
	detectollision(stone,mg3);
	detectollision(stone,mg4);
	detectollision(stone,mg5);
	detectollision(stone,mg6);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly()
}

function detectollision(stone,mg){
	mgBodyPosition=mg.body.position
	stoneBodyPosition=stone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mgBodyPosition.x,mgBodyPosition.y)
	if(distance<=mg.radius+stone.radius){
		Matter.Body.setStatic(mg.body,false)
	}
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:147,y:560})
		launcherObject.attack(stone.body)
	}
}
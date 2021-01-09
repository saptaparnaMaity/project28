var boyIMG, boySprite, treeSprite,treeIMG;
var groundSprite,stone;
var mango1,mango2,mango3,mango4,mango5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine;



function preload()
{
	boyIMG=loadImage("boy.png")
	treeIMG=loadImage("tree.png")	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	
	
	
	
	
	
	
	stone= new Stone(100,460,23);
	mango1= new Mango(600,290,34);
	
	boySprite=createSprite(160, 485);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.09

	treeSprite=createSprite(775, 368);
	treeSprite.addImage(treeIMG)
	treeSprite.scale=0.30

	groundSprite=createSprite(500,550,1000,20);
	groundSprite.shapeColor="brown";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  stone.display();
  drawSprites();
 
}




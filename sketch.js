
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var net1;
var net2;
var net3;
var groundBody;
var groundSprite;
//var netImg;
//var netSprite;

function preload()
{
//	netImg=loadImage("sprites/dustbingreen.png");
  //netImg.scale=10;
}

function setup() {
	createCanvas(1220, 555);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(150 , 450 , 70);
   
    //netSprite=createSprite(1010,385,100,150);
  //  netSprite.addImage(netImg);
   // netImg.scale=200;

  net1= new Net(1000,420,150,170);
	//net2= new Net(900,450,15,100);
	//net3= new Net(1010,485,200,150);

	var groundBody_options={
		isStatic:true
	}
   groundBody = Bodies.rectangle(width/2 , 500 , width , 10 , groundBody_options);
   World.add(world , groundBody);

   groundSprite=createSprite(width/2 , 500 , width , 10);
   groundSprite.shapeColor=color("black");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  rect(width/2 , 689 , width , 10);
  background("cyan");
Engine.update(engine);

  ball.display();
  net1.display();
 // net2.display();
 //net3.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-500});
  }
  
}





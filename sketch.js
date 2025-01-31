
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,180,30);
	mango3=new mango(980,180,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(1050,200,30);
	stone1=new Stone(250,350,15);
	sling1=new Slingshot(stone1.body,{x:400,y:400});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,350,340,200,300);
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  sling1.display();

  groundObject.display();
}
function mouseDragged(){
   Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling1.fly();
}
function detectcollision(Lstone,Lmango){
  mangoBodyPosition = Lmango.body.position;
  stoneBodyPosition = Lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=Lmango.r+Lstone.radius){
    console.log(distance);
    Matter.Body.setStatic(Lmango.body,false);
  }
}
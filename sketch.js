
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backgroundImg
var ball;
var bg ;
//PYRAMID-1 

//LEVEL-1
var box1,box2,box3,box4,box5,box6,box7

//LEVEL-2
var box8,box9,box10,box11,box12;

//LEVEL-3
var box13,box14,box15;

//LEVEL-4
var box16;


//PYRAMID-2
//LEVEL-1
var box17,box18,box17,box19,box20,box21,box22;

//LEVEL-2
var box23,box24,box25,box26,box27;

//LEVEL-3
var box28,box29,box30;

var p2ground;

var launcher;

var score =0;
var bg;
function preload() {
  getBackgroundImg();
}
function setup() {
	var canvas = createCanvas(1400, 700);


		
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground=new Ground(width/2, height-35, width,10);
	ball=new Ball(200,400,50);
	
	launcher = new Launcher(ball.body,{x:200,y:400});
	
	//PYRAMID-1 
	
	//LEVEL-1
	box1 = new Box(330,235,30,40);
	box2 = new Box(360,235,30,40);
	box3 = new Box(390,235,30,40);
	box4 = new Box(420,235,30,40);
	box5 = new Box(450,235,30,40);
	box6 = new Box(480,235,30,40);
	box7 = new Box(510,235,30,40);
	
	//LEVEL-2
	box8 = new Box(360,195,30,40);
	box9 = new Box(390,195,30,40);
	box10 = new Box(420,195,30,40);
	box11= new Box(450,195,30,40);
	box12 = new Box(480,195,30,40);

	//LEVEL-3
	box13 = new Box(390,155,30,40);
	box14 = new Box(420,155,30,40);
	box15 = new Box(450,155,30,40);

	//LEVEL-4
	box16 = new Box(420,115,30,40);

	p1ground = new Ground(420,245,210,10)

	p2ground = new Ground(1090,510,210,10)

	//PYRAMID-2
	//LEVEL-1
	box17 = new Box(1000,500,30,40);
	box18 = new Box(1030,500,30,40);
	box19 = new Box(1060,500,30,40);
	box20 = new Box(1090,500,30,40);
	box21 = new Box(1120,500,30,40);
	box22 = new Box(1150,500,30,40);
	box23 = new Box(1180,500,30,40);

	//LEVEL-2
	box24 = new Box(1030,460,30,40);
	box25 = new Box(1060,460,30,40);
	box26 = new Box(1090,460,30,40);
	box27 = new Box(1120,460,30,40);
	box28 = new Box(1150,460,30,40);

	//LEVEL-3
	box29 = new Box(1060,420,30,40);
	box30 = new Box(1090,420,30,40);
	box31 = new Box(1120,420,30,40);

	//LEVEL-4
	box32 = new Box(1090,380,30,40);
}


function draw() {
  if(backgroundImg)
  background(backgroundImg);
	Engine.update(engine);
  textSize(35)
	text("Score  " + score, 750,140)
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 
  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  box1.score();
 box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
 
  box13.score();
  box14.score();
  box15.score();

  box16.score();

  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();

  box29.score();
  box30.score();
  box31.score();

  box32.score();

  
  

  p1ground.display();
  p2ground.display();
  
  launcher.display();
  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
       launcher.attach(ball.body);
       
       Matter.Body.setPosition(ball.body,{x:200,y:400});
    }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/download.jpg";
  }
  else{
      bg = "sprites/download (1).jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  console.log(hour);

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score=0;

function preload()
{

}


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;
 

soap = new Polygon(200,200,20,20);



    //"tower 1"
 //lowwer stage
 fill ("violet")
 box1 = new Box (580,255,30,40);
 box2 = new Box (610,255,30,40);
 box3 = new Box (640,255,30,40);
 box4 = new Box (670,255,30,40);
 box5 = new Box (700,255,30,40);

 //middle stage
box6 = new Box (610,215,30,40);
box7 = new Box (640,215,30,40);
box8 = new Box (670,215,30,40);
//top
box9 = new Box (640,175,30,40);

ground = new Ground(640,280,180,10);

// "tower 2"

// bottom stage
box10 = new Box (280,555,30,40);
 box12 = new Box (310,555,30,40);
 box13 = new Box (340,555,30,40);
 box14 = new Box (370,555,30,40);
 box15 = new Box (400,555,30,40);
 //middle stage
box16 = new Box (310,515,30,40);
box17 = new Box (340,515,30,40);
box18 = new Box (370,515,30,40);
//top
box11 = new Box (340,475,30,40);

ground2 = new Ground(340,580,180,10);

shot = new Semishot (soap.body,{x:200,y:200})
} 

function draw() {
  //camera.zoom=camera.zoom+1
 



text("SCORE:"+score,650,40);


 drawSprites();
 Engine.update(engine);




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
shot.display();
soap.display();
ground.display();
ground2.display();


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
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
getBG();

}


function mouseDragged(){
 
	Matter.Body.setPosition(soap.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
  shot.fly();
}

function keyPressed(){
  if(keyCode===32){ 
    Matter.Body.setPosition(soap.body,{x:230,y:400})
    shot.attach(soap.body);
  }
  }

  async function getBG (){

var dairymilk = await fetch (" http://worldtimeapi.org/api/timezone/Asia/Kolkata")

var dairymilkjson = await dairymilk.json();

var date = dairymilkjson.datetime;

var hour=date.slice(11,13);
console.log(hour);

if (hour<06&&hour>18){
background ("blue");
}else{
  background("pink");
}


  }

  




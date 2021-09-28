const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var backIM,fly1Im,fly2Im
var hel
var collided = false;
var sadgirl,sadgirlIm;
var sadboy,sadboyIm;
var sadgrandma,sadgrandmaIm
var sadgrandpa,sadgrandpaIm
var happygirlIm,happyboyIm,happygrandmaIm,happygrandpaIm
var fruit,fruitIm
var test
var flood
var happysound
var path
var inst,instIm




function preload()
{
  //major
  backIM=loadImage("pic/10.png")
  fly1Im=loadImage("pic/fly.png")
  fly2Im=loadImage("pic/fly2.png")

  //inst=createSprite=()
  //sad
  sadgirlIm=loadImage("pic/girl.png")
  sadboyIm=loadImage("pic/boy.png");
  sadgrandmaIm=loadImage("pic/grandma.png")
  sadgrandpaIm=loadImage("pic/man.png")
  fruitIm=loadImage("pic/fruit.png")
  //happy
  happyboyIm=loadImage("pic/happyboy.png")
  happygirlIm=loadImage("pic/happygirl.png")
  happygrandmaIm=loadImage("pic/happygrandma.png")
  happygrandpaIm=loadImage("pic/happyman.png")

  //sound
  flood=loadSound("sound/water.mp3")
  happysound=loadSound("sound/happy.wav")
  instIm=loadImage("pic/inst.png")
   
}

function setup() 
{
  createCanvas(1300,650);
  
  engine = Engine.create();
  world = engine.world;  

  hel=createSprite(1000,100)
  //flood.play();
 // hel.addImage("air",fly1Im)
  //hel.scale=0.3
  test=createSprite(100,600)
test.addImage("smell",fruitIm)
test.scale=0.1
test.visible=false
  hel.scale=0.3
hel.velocityX=-5
hel.addImage("blow",fly2Im)

//path =createSprite(500,600,500,10)
//path.isStatic=true;
inst=createSprite(1100,400,10,10)
inst.addImage("brain",instIm)
inst.scale=0.2


sadgirl=createSprite(400,500)
sadgirl.addImage("dull",sadgirlIm)
sadgirl.addImage("green",happygirlIm)
sadgirl.scale=0.3

sadboy=createSprite(520,500)
sadboy.addImage("cry",sadboyIm) 
sadboy.addImage("smart",happyboyIm)
sadboy.scale=0.3

sadgrandma=createSprite(650,500)
sadgrandma.addImage("weak",sadgrandmaIm)
sadgrandma.addImage("old",happygrandmaIm)
sadgrandma.scale=0.4

sadgrandpa=createSprite(800,500)
sadgrandpa.addImage("weaker",sadgrandpaIm)
sadgrandpa.addImage("older",happygrandpaIm)
sadgrandpa.scale=0.4


var opition={
  isStatic:true
}

fruit= Bodies.rectangle(1000,100,70,70,opition)
World.add(world,fruit)

fruit.scale=0.3

//fruit.visible=false
  


   flood.play();
  flood.setVolume(0.5);


 
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
}

function draw() 
{
 // background(51);
  background(backIM);
  Engine.update(engine);
  
 
  hel.addImage("air",fly1Im);
hel.addImage("blow",fly2Im);






if (hel.position.x <= 300 && !collided) {
  hel.velocityX = 5;
 //Matter.Body.setVelocity= (x:5)
  hel.changeAnimation("air",fly2Im);
  hel.scale=0.3
  console.log("right") 



}

  if (hel.position.x >= width - 300 && !collided) {
    hel.velocityX = -5;
    //fruit.velocityX=-5;
    hel.changeImage("blow",fly1Im);
    hel.scale=0.4
    
    //console.log(fly1Im)
   // hel.scale=0.3
  }
  //fruit.position.x=hel.x
//fruit.position.y=hel.y

 
  image(fruitIm,hel.position.x,fruit.position.y,70,70)

  


  drawSprites();


  

}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    happysound.play();
   happysound.setVolume(0.7);
    Matter.Body.setStatic(fruit,false)
    console.log("my")
   //girl
   sadgirl.changeImage("green",happygirlIm)
   sadgirl.scale=0.4
   sadgirl.x=170
   sadgirl.y=500
   //boy
   sadboy.changeImage("smart",happyboyIm)
   sadboy.x=380
   sadboy.y=520
   sadboy.scale=0.3
   //grandma
   sadgrandma.changeImage("old",happygrandmaIm)
   sadgrandma.x=560
   sadgrandma.y=520
   sadgrandma.scale=0.4
   //grandpa
   sadgrandpa.changeImage("older",happygrandpaIm)
   sadgrandpa.x=910
   sadgrandpa.y=490
   sadgrandpa.scale=0.23

   //food
   test.visible=true
   test.x=670
   test.y=550
   //test.velocityY=1
   test.scale=0.2
   test.setTimeout(() => {
     
   }, 2500);
   
   //flood.setVloume=0.01
  }
  
}

 
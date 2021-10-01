const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground1
var  boggie2, boggie3,boggie4,boggie5,boggie6,boggie7
var Con1, Con2, Con3, Con4, Con5
var rcok

function preload(){
  bg = loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground1 = new Ground (600,390, 1200, 10)
  boggie2 = new  Boggie (50,360, 50, 50)
  boggie3 = new  Boggie (150,360, 50, 50)
  boggie4 = new  Boggie (250,360, 50, 50)
  boggie5 = new  Boggie (350,360, 50, 50)
  boggie6 = new  Boggie (450,360, 50, 50)
  boggie7 = new  Boggie (550,360, 50, 50)
  Con1 = new Chain (boggie2.body, boggie3.body)
  Con2 = new Chain (boggie3.body, boggie4.body)
  Con3 = new Chain (boggie4.body, boggie5.body)
  Con4 = new Chain (boggie5.body, boggie6.body)
  Con5 = new Chain (boggie6.body, boggie7.body)
  rcok = new Rock (1120, 360, 100,100)



}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggie2.show()
  boggie3.show()
  boggie4.show()
  boggie5.show()
  boggie6.show()
  boggie7.show()
  Con1.show()
  Con2.show()
  Con3.show()
  Con4.show()
  Con5.show()
  rcok.show()
  var colsion = Matter.SAT.collides (boggie7.body, rcok.body)
  if (colsion.collides){
textSize(30)

  text("train hs crashed", 500,200)

  }
  if (keyCode== RIGHT_ARROW){
    Matter.Body.applyForce(boggie7.body, boggie7.body.position, {x:0.1,y:0})
  }
}
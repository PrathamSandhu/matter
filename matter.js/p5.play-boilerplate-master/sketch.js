const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var brick;
var brick2;
var brick3;
var brick4;
var brick5;
var pig, pig2;
var log;
var log2;
var log3;
var log4;
var ground;
var platform;
var bird;
var slingShot;

/*var a = [ 11, 29, 40, 32, "word", 0.001, [ 1, 2, 3, 4]];
console.log(a[6][2]);
a.push("new element")
console.log(a)*/

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  brick = new Box( 800, 540, 70, 70);
  brick2 = new Box( 1000, 540, 70, 70);
  brick3 = new Box(1000, 440, 70, 70);
  brick4 = new Box(800, 440, 70, 70);
  brick5 = new Box(900, 250, 70, 70);
  pig = new Pig(900, 540, 50, 50);
  pig2 = new Pig(900, 440, 50, 50);
  log = new Log(900, 500, 20, 300, PI/2);
  log2 = new Log(900, 350, 20, 300, PI/2);
  log3 = new Log(850, 250, 20, 150, PI/4);
  log4 = new Log(950, 250, 20, 150, 3 * PI/4);
  platform = new Ground( 200, 520, 100, 200);
  bird = new Bird(250, 70, 70, 70);
  ground = new Ground(600, 590, 1200, 20);
  slingShot = new SlingShot(bird.body, {x:290, y:190});
  //ball = Bodies.circle( 100, 100, 50, {restitution : 1});
  //World.add(world, ball);
}

var bg;

function preload() {
  bg = loadImage("sprites/bg.png");
  cliff = loadImage("sprites/Cliff.png");
}

function draw() {
  background(bg);
  Engine.update(engine);
  brick.display();
  brick2.display();
  brick3.display();
  brick4.display();
  brick5.display();
  pig.display();
  pig2.display();
  log.display();
  log2.display();
  log3.display();
  log4.display();
  ground.display();
  platform.display();
  bird.display();
  slingShot.display();
  
  push();
  imageMode(CENTER);
  image(cliff, 200, 520, 300, 400);
  pop();
  //rectMode(CENTER);
  //ellipseMode(RADIUS);
  //fill("yellow");
  //ellipse(ball.position.x,ball.position.y, 50, 50);
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(bird.body);
  }
}
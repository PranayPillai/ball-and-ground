const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;


function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  var opptions = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,390,400,50,opptions);
  console.log(ground.position.x);
  console.log(ground.position.y);
  World.add(world,ground);

  var opption1 = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20,opption1);
  World.add(world,ball);
}

function draw() {
  background(0); 

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  
  
}
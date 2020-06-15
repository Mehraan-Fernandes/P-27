const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800,500);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,60,700,50)
	bob1 = new Bob(400,400,50)
	bob2 = new Bob(500,400,50)
	bob3 = new Bob(600,400,50)
	bob4 = new Bob(300,400,50)
	bob5 = new Bob(200,400,50)
  rope1 = new Rope(bob1.bob,{x: 400, y:85});
  rope2 = new Rope(bob2.bob,{x: 500, y:85});
  rope3 = new Rope(bob3.bob,{x: 600, y:85});
  rope4 = new Rope(bob4.bob,{x: 300, y:85});
  rope5 = new Rope(bob5.bob,{x: 200, y:85});
 // keyPressed();
  
}

function draw() {
  background(0);
  Engine.update(engine)
  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display(); 
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
 function keyPressed(){
  if(keyCode === 32){
    console.log(keyPressed)
    Matter.Body.applyForce(bob5.bob,bob5.bob.position,{x:-0.15,y:0.1})  
  }
}





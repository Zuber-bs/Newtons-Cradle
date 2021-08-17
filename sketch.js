const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Body = Matter.Body;

// Engine and World
var engine;
var world;

// Bodies
var roof;

// Bobs
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

// Ropes
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
    createCanvas(windowWidth - 30, windowHeight - 30);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    roof = new Roof(width/2, 100, 300, 20);

    var options = { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }

    bob1 = Bodies.circle(457.5, 500, 30, options);
    bob2 = Bodies.circle(517.5, 500, 30, options);
    bob3 = Bodies.circle(577.5, 500, 30, options);
    bob4 = Bodies.circle(637.5, 500, 30, options);
    bob5 = Bodies.circle(697.5, 500, 30, options);
    World.add(world, [bob1, bob2, bob3, bob4, bob5]);

    rope1 = new Link(bob1, roof, -120, 100, 457.5, 100);
    rope2 = new Link(bob2, roof, -60, 100, 517.5, 100);
    rope3 = new Link(bob3, roof, 0, 100, 577.5, 100);
    rope4 = new Link(bob4, roof, 60, 100, 637.5, 100);
    rope5 = new Link(bob5, roof, 120, 100, 697.5, 100);
}

function draw() {
    background("#5999ff")
    Engine.update(engine);

    roof.display();

    ellipse(bob1.position.x, bob1.position.y, 60, 60);
    ellipse(bob2.position.x, bob2.position.y, 60, 60);
    ellipse(bob3.position.x, bob3.position.y, 60, 60);
    ellipse(bob4.position.x, bob4.position.y, 60, 60);
    ellipse(bob5.position.x, bob5.position.y, 60, 60);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}

function keyPressed() {
    if(keyCode === 38) {
        Body.applyForce(bob1, {x: 0, y: 0}, {x: -0.1, y: 0});
    }
}
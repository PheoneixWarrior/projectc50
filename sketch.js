const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform = new Platform(600, 310, 400, 10);

    box1 = new Box(600,290,30,30);
    box2 = new Box(610,290,30,30);
    box3 = new Box(620,290,30,30);
    box4 = new Box(590,290,30,30);
    box5 = new Box(580,290,30,30);
    box6 = new Box(630,290,30,30);
    box7 = new Box(570,290,30,30);
    box8 = new Box(540,290,30,30);
    box9 = new Box(640,290,30,30);

    box10 = new Box(605,275,30,30);
    box11= new Box(610,275,30,30);
    box12= new Box(615,275,30,30);
    box13= new Box(620,275,30,30);
    box14= new Box(595,275,30,30);
    box15= new Box(590,275,30,30);
    box16= new Box(585,275,30,30);

    box17 = new Box(600,250,30,30);
    box18 = new Box(610,250,30,30);
    box19= new Box(620,250,30,30);
    box20= new Box(590,250,30,30);
    box21 = new Box(580,250,30,30);


    box22 = new Box(605,235,30,30);
    box23 = new Box(610,235,30,30);
    box24 = new Box(595,235,30,30);

    box25 = new Box(600,220,30,30);

    
    polygon = new Polygon(50,200,40,40)
    
    slingshot = new SlingShot(polygon.Body,{x:50, y:50});
}

function draw(){
    
        background (0);
    
        noStroke();
       
    
    Engine.update(engine);
    //strokeWeight(4);
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
    

    platform.display();
    
    slingshot.display();
    mouseDragged(); 
    mouseReleased();
  
}

function mouseDragged(){
    
        Matter.Body.setPosition(polygon.Body,{x: mouseX , y: mouseY});
    
}







const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
var engine, world;
var rain=[]
var umbrella;
var thunderboltImg1, rand;
var thunderboltImg2, thunderboltImg3, thunderboltImg4;
var thunder;
var maxRain = 100;
var thunderCreatedFrame = 0;

function preload(){
    thunderboltImg1 = loadImage("images/thunderbolt/1.png");
    thunderboltImg2 = loadImage("images/thunderbolt/2.png");
    thunderboltImg3 = loadImage("images/thunderbolt/3.png");
    thunderboltImg4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
   canvas = createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   //creating rain drops
   if(frameCount % 150 === 0){ 
    for(var i=0; i<maxRain; i++){ 
        rain.push(new Rain(random(0,400), random(0,400))); 
    } 
    }
}

function draw(){
    background('black')
    Engine.update(engine);

    
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){ 
        thunderCreatedFrame=frameCount; 
        thunder = createSprite(random(10,370), random(10,30), 10, 10); 
        switch(rand){ 
            case 1: thunder.addImage(thunderboltImg1); 
            break; 
            case 2: thunder.addImage(thunderboltImg2); 
            break; 
            case 3: thunder.addImage(thunderboltImg3); 
            break; 
            case 4: thunder.addImage(thunderboltImg4); 
            break; default: break;             
        } 
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //to display rain drops
    for(var i=0; i<maxRain; i++)
    {
        rain[i].display();
        rain[i].updateRain();
    }
    drawSprites();
}   


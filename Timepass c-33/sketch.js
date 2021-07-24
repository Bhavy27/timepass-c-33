const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Background, SnowImg, CharacterImg, SnowmanImg;
var Snow3, Snowman, Character;
var Snowparticle=[];

function preload(){
  Background = loadImage("images/snow3.jpg");
  CharacterImg = loadImage("images/Character2.png");
  SnowImg = loadImage("images/Snowman.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

      
  Character = createSprite(540,350,10,10);
  Character.addImage(CharacterImg);
  Character.scale = 0.3;

  Snowman = createSprite(260,300,10,10);
  Snowman.addImage(SnowImg);
  Snowman.scale = 0.3;

}

function draw() {
  background(Background);  
  Engine.update(engine);

  if(frameCount%20===0){
    Snowparticle.push(new Snow(random(100, 700), -50,10));
  }

  for (var j = 0; j < Snowparticle.length; j++) {
    Snowparticle[j].display();
  }
  drawSprites();
}
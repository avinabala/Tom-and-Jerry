var mouse, mouse1, mouseMoving, mouseStop
var cat, cat1, catMoving, catStop
var garden, gardenImg
function preload() {
    //load the images here
    mouse1 = loadAnimation("mouse1.png");
    mouseMoving = loadAnimation("mouse2.png","mouse3.png");
    mouseStop = loadAnimation("mouse4.png");
    cat1 = loadAnimation("cat1.png");
    catMoving = loadAnimation("cat2.png","cat3.png");
    catStop = loadAnimation("cat4.png");
    gardenImg = loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,100,100);
    garden.addAnimation("garden",gardenImg);

    cat = createSprite(700,600,50,50)
    cat.addAnimation("cat1",cat1);
    //cat.addAnimation(catMoving);
    //cat.addAnimation(catStop);
    cat.scale = 0.15;

    mouse = createSprite(150,550,50,50)
    mouse.addAnimation("mouse1",mouse1);
    //mouse.addAnimation(mouseMoving);
    //mouse.addAnimation(mouseStop);
    mouse.scale = 0.15
}

function draw() {
     background(255);
     text(mouseX + ',' + mouseY, 10,45)
    mouseTouching();
    drawSprites();
}

function keyPressed(){
  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
   cat.velocityX = -5
   cat.addAnimation("catMoving",catMoving)
   cat.changeAnimation("catMoving")
   mouse.addAnimation("mouseMoving",mouseMoving)
   mouse.changeAnimation("mouseMoving")
 }
}

function mouseTouching(){
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.position.x = cat.position.x + 60
    cat.velocityX = 0;
    cat.addAnimation("catStop",catStop)
    cat.changeAnimation("catStop")
    mouse.addAnimation("mouseStop",mouseStop)
    mouse.changeAnimation("mouseStop")                 
}
}
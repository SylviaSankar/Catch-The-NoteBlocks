var notecatcher1,notecatcher2,notecatcher3,notecatcher4
var noteblock
var badblock
var camonoteblock
var edges
var badblocksgroup
var noteblocksgroup,camonoteblocksgroup
var score

function preload(){
  bg1=loadImage("bg.jpg")
  b1=loadImage("download.png")
  b2=loadImage("b2.png")
  b3=loadImage("b3.png")
  b5=loadImage("b5.png")
}




function setup() {
  createCanvas(1000,1000);
  notecatcher1=createSprite(100, 100, 100, 100);
  notecatcher1.addImage(b1)
  notecatcher1.scale=0.5
  edges=createEdgeSprites()
  badblocksgroup=new Group()
  noteblocksgroup=new Group()
  camonoteblocksgroup=new Group()
  score=0
}

function draw() {
  background(bg1); 
  textSize(35)
  fill("white")
  text("score:"+score,15,40)
  spawnNoteblocks()
  spawnBadblocks()
  spawnCamoNoteblock()
  if(keyDown("d")){
    notecatcher1.x=notecatcher1.x+10
  }
  if(keyDown("a")){
    notecatcher1.x=notecatcher1.x-10
  }
  if(noteblocksgroup.isTouching(notecatcher1)&&camonoteblocksgroup.isTouching(notecatcher1)){
    score=score+1
    
  }
  if(badblocksgroup.isTouching(notecatcher1)){
   badblocksgroup.setVelocityYEach(0)
   noteblocksgroup.setVelocityYEach(0)
   camonoteblocksgroup.setVelocityYEach(0)
   textSize(100)
   fill("white")
   text("Game Over",200,300)
  }
  notecatcher1.bounceOff(edges)
  drawSprites();
  
}

function spawnNoteblocks(){
  if(frameCount%200===0){
    noteblock=createSprite(50,1000,50,50)
    noteblock.addImage(b2)
    noteblock.scale=0.33
    noteblock.velocityY=-6
    noteblock.x=Math.round(random(50,950))
    noteblocksgroup.add(noteblock)
  }
}

function spawnBadblocks(){
 if(frameCount%200===0){
  badblock=createSprite(25,970,50,50)
  badblock.addImage(b3)
  badblock.scale=0.26
  badblock.velocityY=-9
  badblock.x=Math.round(random(50,950))
  badblocksgroup.add(badblock)
 }
}

function spawnCamoNoteblock(){
  if(frameCount%200===0){
    camonoteblock=createSprite(50,1000,50,50)
    camonoteblock.addImage(b5)
    camonoteblock.scale=Math.round(random(0.7,0.9))
    camonoteblock.velocityY=-12
    camonoteblock.x=Math.round(random(50,950))
    camonoteblocksgroup.add(camonoteblock)
  }
}
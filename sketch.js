var rect1
var rect2
var rect3
var rect4
var rect5
var rect6




function setup() {
  createCanvas(800,400);
rect1 = createSprite(200,200,50,100)  
rect2 = createSprite(100,100,50,100)  
rect1.shapeColor = 'red'
rect2.shapeColor = 'purple'

rect2.debug = true;
rect.debug = true;

rect3 = createSprite(600,0,50,100)  
rect4 = createSprite(600,400,50,100)

rect4.shapeColor = 'cyan'
rect3.shapeColor = 'pink'

rect3.debug = true;
rect4.debug = true;

rect3.velocityY = 3;
rect4.velocityY = -3;

rect5 = createSprite(300,200,50,100)  
rect6 = createSprite(100,200,50,100)  
rect5.shapeColor = 'red'
rect6.shapeColor = 'red'

rect5.debug = true;
rect6.debug= true;
}

function draw() {
 rect2.y = mouseY;
 rect2.x = mouseX;
 
 if (isTouching(rect2,rect6)) {
  rect2.shapeColor = 'green';
  rect6.shapeColor = 'blue';
}
else{
rect6.shapeColor = 'red'
rect2.shapeColor = 'yellow';

}

bounceOff(rect3,rect4);


background(0);  
  drawSprites();
}
function bounceOff(quadrilateral1,quadrilateral2){
  if(quadrilateral1.y- quadrilateral2.y < quadrilateral1.height/2+quadrilateral2.height/2&&quadrilateral2.y- quadrilateral1.y < quadrilateral1.height/2+quadrilateral2.height/2 ){
    quadrilateral1.velocityY = quadrilateral1.velocityY*(-1)
    quadrilateral2.velocityY = quadrilateral2.velocityY*(-1)
    }
    
    if (quadrilateral1.x - quadrilateral2.x < quadrilateral1.width/2 + quadrilateral2.width/2&& quadrilateral2.x - quadrilateral1.x < quadrilateral2.width/2 + quadrilateral1.width/2 ){
    
    quadrilateral2.velocityX = quadrilateral2.velocityX*(-1)
    quadrilateral1.velocityX = quadrilateral1.velocityX*(-1)
    
    
    }
    



}
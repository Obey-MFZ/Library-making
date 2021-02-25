function isTouching(object1,object2){
    if (object2.x-object1.x< object1.width/2+object2.width/2&&object1.x - object2.x <rect1.width/2 +object2.width/2&&object1.y - object2.y < object2.height/2 +object1.height/2&&object2.y -object1.y < object2.height/2 +object1.height/2  ){
      return true;
      } 
      else {
      //rect1.shapeColor = 'red'
      //rect2.shapeColor = 'yellow';
     return false;
    }
  
  
  
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
window.onload = function() 
{
var dog = document.getElementById("fare");
var moving = false;

dog.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 1;
  var newY = e.clientY - 1;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }
  
  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, true);

}
}
function randomImage(){
  var images = [
   'img/background1.jpg',
   'img/background2.jpg',
   'img/background3.jpg',
   'img/background4.jpg',
   'img/background5.jpg',
   'img/background6.jpg',
   'img/background7.jpg'
   ];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('background');
  console.log(element);
  element[0].style["background-image"] = "url("+ images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);
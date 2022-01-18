document.querySelectorAll(".drum")[0].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-1.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-2.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-3.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-4.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click",function(){
  var aud1 = new Audio("sounds/snare.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click",function(){
  var aud1 = new Audio("sounds/crash.mp3");
  aud1.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click",function(){
  var aud1 = new Audio("sounds/kick-bass.mp3");
  aud1.play();
});
document.addEventListener("keypress",function(event){
  if(event.key==="i"){
    var aud1 = new Audio("sounds/tom-1.mp3");
    aud1.play();
  }else if(event.key==="a"){
    var aud1 = new Audio("sounds/tom-2.mp3");
    aud1.play();
  }else if(event.key==="m"){
    var aud1 = new Audio("sounds/tom-3.mp3");
    aud1.play();
  }else if(event.key==="h"){
    var aud1 = new Audio("sounds/tom-4.mp3");
    aud1.play();
  }else if(event.key==="a"){
    var aud1 = new Audio("sounds/snare.mp3");
    aud1.play();
  }else if(event.key==="r"){
    var aud1 = new Audio("sounds/crash.mp3");
    aud1.play();
  }else if(event.key==="s"){
    var aud1 = new Audio("sounds/kick-bass.mp3");
    aud1.play();
  }
});

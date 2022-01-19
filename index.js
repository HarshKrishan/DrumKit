document.querySelectorAll(".drum")[0].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-1.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[0].innerHTML);
});
document.querySelectorAll(".drum")[1].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-2.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[1].innerHTML);
});
document.querySelectorAll(".drum")[2].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-3.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[2].innerHTML);
});
document.querySelectorAll(".drum")[3].addEventListener("click",function(){
  var aud1 = new Audio("sounds/tom-4.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[3].innerHTML);
});
document.querySelectorAll(".drum")[4].addEventListener("click",function(){
  var aud1 = new Audio("sounds/snare.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[4].innerHTML);
});
document.querySelectorAll(".drum")[5].addEventListener("click",function(){
  var aud1 = new Audio("sounds/crash.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[5].innerHTML);
});
document.querySelectorAll(".drum")[6].addEventListener("click",function(){
  var aud1 = new Audio("sounds/kick-bass.mp3");
  aud1.play();
  btanimation(document.querySelectorAll(".drum")[6].innerHTML);
});
document.addEventListener("keypress",function(event){
  if(event.key==="w"){
    var aud1 = new Audio("sounds/tom-1.mp3");
    aud1.play();
    btanimation("w");
  }else if(event.key==="a"){
    var aud1 = new Audio("sounds/tom-2.mp3");
    aud1.play();
    btanimation("a");
  }else if(event.key==="s"){
    var aud1 = new Audio("sounds/tom-3.mp3");
    aud1.play();
    btanimation("s");
  }else if(event.key==="d"){
    var aud1 = new Audio("sounds/tom-4.mp3");
    aud1.play();
    btanimation("d");
  }else if(event.key==="j"){
    var aud1 = new Audio("sounds/snare.mp3");
    aud1.play();
    btanimation("j");
  }else if(event.key==="k"){
    var aud1 = new Audio("sounds/crash.mp3");
    aud1.play();
    btanimation("k");
  }else if(event.key==="l"){
    var aud1 = new Audio("sounds/kick-bass.mp3");
    aud1.play();
    btanimation("l");
  }
});
function btanimation(key) {
  var pressedbt = document.querySelector("."+key);
  pressedbt.classList.add("pressed");
  setTimeout(function () {
    pressedbt.classList.remove("pressed");
  }, 100);
}

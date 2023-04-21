//alert("bitch");
var len = document.querySelectorAll(".drum").length;


// for checking the click
for (var i = 0; i < len; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var kkkk = this.textContent;
    makesound(kkkk);
    animation(kkkk);
  });



//for checking the keyboard
document.addEventListener("keypress", function(event) {
  makesound(event.key);
  animation(event.key);
});





function makesound(key) {
  switch (key) {
    case "w":
      var ak = new Audio("sounds/tom-1.mp3");
      ak.play();
      break;

    case "a":
      var ak = new Audio("sounds/tom-2.mp3");
      ak.play();
      break;
    case "s":
      var ak = new Audio("sounds/tom-3.mp3");
      ak.play();
      break;
    case "d":
      var ak = new Audio("sounds/tom-4.mp3");
      ak.play();
      break;
    case "j":
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;
    case "k":
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;
    case "l":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      f
      break;

    default:
      console.log(key);
  }
}
function animation(key)
{
  var pp="."+key;
  document.querySelector(pp).classList.add("pressed");
  setTimeout(function(){
      document.querySelector(pp).classList.remove("pressed");},100);

}

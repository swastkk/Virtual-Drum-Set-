var numofDrums = document.querySelectorAll(".drum").length;
//for buttons/click
for (var i = 0; i < numofDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("/sounds/tom-2.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("/sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("/sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("/sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("/sounds/crash.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("/sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("/sounds/tom-4.mp3");
        audio.play();
        break;
      default:
        break;
    }
  });
}

//by KeyboardPress
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "a":
      var kickbass = new Audio("/sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "s":
      var snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
}
// for Transpirency of the buttons after click/keyboard press!!
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

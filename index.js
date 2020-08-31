var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "t":
      var tom1 = new Audio("tom1.mp3");
      tom1.play();
      break;

    case "y":
      var tom2 = new Audio("tom2.mp3");
      tom2.play();
      break;

    case "g":
      var tom3 = new Audio('tom3.mp3');
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio('tom4.mp3');
      tom4.play();
      break;

    case "h":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "f":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "b":
      var kick = new Audio('kick.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

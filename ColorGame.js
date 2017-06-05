// alert("File is connected succesfully !!!");
var game = {};
game.winnerDisplay = document.querySelector("h1");
game.display = document.querySelectorAll(".container div");
game.message = document.querySelector("#messageDisplay");
game.rgbDisplay = document.querySelector("#colorDisplay");
game.resetButton = document.querySelector("button[name = resetButton]");
game.easyButton = document.querySelector("button[name = easyButton]");
game.hardButton = document.querySelector("button[name = hardButton]");
game.colors = [];
game.pickedColor;
game.mode = 6;

// for (var i = 0; i < game.display.length; i++) {
//   game.display[i].addEventListener("click", function(){
//     this.style.background = "white";
//   });
// }

game.randomColorGenerater = function(mode) {
  for (var i = 0; i < mode; i++) {
    game.colors[i] =  "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")"  ;

  }
};

game.randomColorSetter = function(mode){
  for (var i = 0; i < mode; i++) {
    if (mode == 3) {
      for (var i = 0; i < 3; i++) {
        game.display[i].style.background = game.colors[i];
      }

      for (var i = 5; i >2 ; i--) {
        game.display[i].style.display = "none"
      }
    }
    else {
      game.display[i].style.display = "block"
      game.display[i].style.background = game.colors[i];

    }
  }
};

game.randomColorPicker = function(mode){
  game.pickedColor = Math.floor(Math.random()*mode);
  game.rgbDisplay.textContent = game.colors[game.pickedColor];
  // game.display[game.pickedColor].classList.add("picked");
  // game.display[game.pickedColor].classList.remove("notPicked");

};

for (var i = 0; i < game.display.length; i++) {
  game.display[i].addEventListener("click", function(){
    // alert("You Clicked");
    var clickedColor = this.style.background;
    if ( clickedColor == game.colors[game.pickedColor]) {
      // alert("You chose right !");
      game.winnerDisplay.style.background = game.colors[game.pickedColor];
      game.message.textContent = "Victory !";
      for (var i = 0; i < 6; i++) {
        game.display[i].style.background = game.colors[game.pickedColor];
        // game.display[i].classList.add("notPicked");

        }


    }
    else {
      this.style.background = "#232323";
    }

  });
};

game.resetButton.addEventListener("click", function(){
  // alert("reset");
  game.randomColorGenerater(game.mode);
  game.randomColorSetter(game.mode);
  game.randomColorPicker(game.mode);
  game.winnerDisplay.style.background = "rgb(19, 115, 249)";
  game.message.textContent = "Game";

});

game.easyButton.addEventListener("click", function(){
  game.easyButton.classList.add("selected");
  game.hardButton.classList.remove("selected");
  game.mode =3;
  game.reset();
});

game.hardButton.addEventListener("click", function(){
  game.hardButton.classList.add("selected");
  game.easyButton.classList.remove("selected");
  game.mode = 6;
  game.reset();
});

game.reset =function(){
  game.randomColorGenerater(game.mode);
  game.randomColorSetter(game.mode);
  game.randomColorPicker(game.mode);
  // game.mode = 6;
}



game.randomColorGenerater(game.mode);
game.randomColorSetter(game.mode);
game.randomColorPicker(game.mode);

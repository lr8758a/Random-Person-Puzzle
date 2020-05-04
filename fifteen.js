"use strict";

var square;
var vertical;
var horizontal;
//Variable that picks random number from 1 to 15
var rand = Math.floor(Math.random() * 15) + 1;

window.onload = function (){
	var puzzleArea = document.getElementById("puzzlearea");
	square = puzzleArea.getElementsByTagName("div");

	for (var a = 0; a < square.length; a++){
		square[a].className = "puzzlepiece";
		square[a].style.left = (a % 4 * 100) + "px";
		square[a].style.top = (parseInt(a / 4) * 100) + "px";
		square[a].style.backgroundPosition = "-" + square[a].style.left + " " + "-" + square[a].style.top;

		square[a].onmouseover = function(){
			//Variable placed in image file path to produce
			//a random face from the images folder
			this.style.backgroundImage = "url(images/" + rand.toString() + ".jpg)";
			if (positionCheck(parseInt(this.innerHTML))){
        this.style.border = "3px solid blue";
				this.style.color = "blue";
			}
		};

		square[a].onmouseout = function(){
			this.style.border = "2px solid black";
			this.style.color = "#000000";
			this.style.textDecoration = "none";
		};

		square[a].onclick = function(){
			if (positionCheck(parseInt(this.innerHTML))){
				switchSpot(this.innerHTML - 1);
			}
		};
	}

	var shuffle = document.getElementById("shufflebutton");
  vertical = "300px";
	horizontal = "300px";

  // Shuffle algorithim using conditionals.
	shuffle.onclick = function(){
		for (var i = 0; i < 300; i++){

			var num = parseInt(Math.random() * 100) % 4;

      if (num == 0){
        var shuff = goLeft(horizontal, vertical);
        if (shuff != -1){
          switchSpot(shuff);
        }
      }

      if (num == 1){
        var shuff = goRight(horizontal, vertical);
        if (shuff != -1){
          switchSpot(shuff);
        }
      }

			if (num == 2){
				var shuff = goDown(horizontal, vertical);
				if (shuff != -1){
					switchSpot(shuff);
				}
			}

			if (num == 3){
				var shuff = goUp(horizontal, vertical);
				if (shuff != -1){
					switchSpot(shuff);
				}
			}

		}
	};
		for (var i = 0; i < 300; i++){

			var num = parseInt(Math.random() * 100) % 4;

      if (num == 0){
        var shuff = goLeft(horizontal, vertical);
        if (shuff != -1){
          switchSpot(shuff);
        }
      }

      if (num == 1){
        var shuff = goRight(horizontal, vertical);
        if (shuff != -1){
          switchSpot(shuff);
        }
      }

			if (num == 2){
				var shuff = goDown(horizontal, vertical);
				if (shuff != -1){
					switchSpot(shuff);
				}
			}

			if (num == 3){
				var shuff = goUp(horizontal, vertical);
				if (shuff != -1){
					switchSpot(shuff);
				}
			}

		}
};

//FOUR functions that perform the movements of squares to go left, right, up, or down
function goLeft(x, y){
	var x_coord = parseInt(x);
	var y_coord = parseInt(y);

  if (x_coord > 0){

		for (var a = 0; a < square.length; a++){
			if (parseInt(square[a].style.left) + 100 == x_coord && parseInt(square[a].style.top) == y_coord){
				return a;
			}
		}
	}

	else{
		return -1;
	}
}

function goRight (x, y){
	var x_coord = parseInt(x);
	var y_coord = parseInt(y);

	if (x_coord < 300)
	{
		for (var a = 0; a < square.length; a++){
			if (parseInt(square[a].style.left) - 100 == x_coord && parseInt(square[a].style.top) == y_coord){
				return a;
			}
		}
	}

	else{
    return -1;
	}
}

function goDown (x, y)
{
	var x_coord = parseInt(x);
	var y_coord = parseInt(y);

	if (y_coord < 300){
		for (var a = 0; a < square.length; a++){
			if (parseInt(square[a].style.top) - 100 == y_coord && parseInt(square[a].style.left) == x_coord){
				return a;
			}
		}
	}

	else{
		return -1;
	}
}

function goUp(x, y){
	var x_coord = parseInt(x);
	var y_coord = parseInt(y);

	if (y_coord > 0){
		for (var a = 0; a < square.length; a++){
			if (parseInt(square[a].style.top) + 100 == y_coord && parseInt(square[a].style.left) == x_coord){
				return a;
			}
		}
	}

	else{
		return -1;
	}
}

//Performs the moving of two squares when one is clicked.
function switchSpot (spot){
	var newSpot = square[spot].style.top;

	square[spot].style.top = vertical;
	vertical = newSpot;

	newSpot = square[spot].style.left;

	square[spot].style.left = horizontal;
	horizontal = newSpot;
}

//Checks the position of square and determines which direction to move.
function positionCheck(spot){

	if (goLeft(horizontal, vertical) == (spot - 1)){
		return true;
	}

  if (goRight(horizontal, vertical) == (spot - 1)){
		return true;
	}

	if (goDown(horizontal, vertical) == (spot - 1)){
		return true;
	}

	if (goUp(horizontal, vertical) == (spot - 1)){
		return true;
	}

}

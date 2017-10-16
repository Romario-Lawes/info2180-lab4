"use strict";

window.onload = function () {
  document.getElementById("boundary1").onmouseover = function () {
    this.className += " youlose";
  };

  let wall = document.getElementsByClassName("boundary");
  let loseMsg = "";
  let exampleWall = document.getElementsByClassName("example")[0];

  for (let i = 0; i < wall.length; i++) {
      wall[i].onmouseover = function () {
        this.className += " youlose";
        loseMsg = "You Lose!";
      };
  }

  document.getElementById("end").onmouseover = function () {
    if (loseMsg === "You Lose!") {
      alert(loseMsg);
    } else {
      alert("You Win!");
    }
  };

  document.getElementById("start").onclick = function () {
    for (let i = 0; i < wall.length; i++) {
      wall[i].className = "boundary";
    }
    exampleWall.className = "boundary example";
    loseMsg = "";
  };

};

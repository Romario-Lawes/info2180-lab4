"use strict";

window.onload = function () {
  document.getElementById("boundary1").onmouseover = function () {
    this.className += " youlose";
  };

  let wall = document.getElementsByClassName("boundary");
  let loseMsg = "";
  let exampleWall = document.getElementsByClassName("example")[0];
  let status = document.getElementById("status");

  for (let i = 0; i < wall.length; i++) {
      wall[i].onmouseover = function () {
        this.className += " youlose";
        loseMsg = "You Lose!";
      };
  }

  document.getElementById("end").onmouseover = function () {
    if (loseMsg === "You Lose!") {
      status.innerHTML = loseMsg;
      //alert(loseMsg);
    } else {
      status.innerHTML = "You Win!";
      //alert("You Win!");
    }
  };

  document.getElementById("start").onclick = function () {
    for (let i = 0; i < wall.length; i++) {
      wall[i].className = "boundary";
    }
    exampleWall.className = "boundary example";
    status.innerHTML = 'Move your mouse over the "S" to begin.';
    loseMsg = "";

    document.getElementById('maze').onmouseleave = function () {
      loseMsg = "You Lose!";
      status.innerHTML = loseMsg;
      for (let i = 0; i < wall.length; i++) {
        wall[i].className += " youlose";
      }
    };
  };

};

"use strict";

window.onload = function () {
  document.getElementById("boundary1").onmouseover = function () {
    this.className += " youlose";
  };

  let wall = document.getElementsByClassName("boundary");

  for (let i = 0; i < wall.length; i++) {
      wall[i].onmouseover = function () {
        this.className += " youlose";
      };
  }
  
};

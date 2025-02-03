"use strict";

// Defining variables
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const check = document.querySelector(".check");
const again = document.querySelector(".again");
let status = document.querySelector(".status");
let highscore = Number(document.querySelector(".highscore span").textContent);
let scoreBoard = document.querySelector(".score span");
//test

//events

check.addEventListener("click", () => {
  let enteredNumber = Number(document.querySelector(".number").value);
  if (score < 1 || score === 0) {
    status.textContent = "🙊 You have lost.";
  } else {
    if (!enteredNumber) {
      status.textContent = "Please enter a number 🔢";
      score--;
      scoreBoard.textContent = score;
      //it was correct
    } else if (enteredNumber === secretNumber) {
      status.textContent = "🍹 You have won.";
      scoreBoard.textContent = score;
      document.querySelector(".secret").textContent = secretNumber;

      if (highscore < score) {
        highscore = score;
        document.querySelector(".highscore span").textContent = highscore;
      }
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector("input").style.backgroundColor = "white";
      document.querySelector("input").style.color = "green";

      //too high
    } else if (enteredNumber > secretNumber) {
      status.textContent = "📈 Too high";
      score--;
      scoreBoard.textContent = score;
      //too low
    } else if (enteredNumber < secretNumber) {
      status.textContent = "📉 Too low";
      score--;
      scoreBoard.textContent = score;
    }
  }
});
// try again button

again.addEventListener("click", () => {
  score = 20;
  scoreBoard.textContent = score;
  status.textContent = "🙄 Start Guessing ...";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector("input").style.backgroundColor = "transparent";
  document.querySelector("input").style.color = "royalblue";
  document.querySelector(".secret").textContent = "?";
});

var userNum;
var compNum;
var totalWins = 0;
var totalLosses = 0;
var totalTies = 0;

const Rock = document.querySelector('rock');
const Paper = document.querySelector('paper');
const Scissors = document.querySelector('scissors');

const Wins = document.querySelector('wins');
const Losses = document.querySelector('losses');
const Ties = document.querySelector('ties');

function outputScores() {
  wins.textContent = "Wins: " + totalWins
  losses.textContent = "Losses: " + totalLosses
  ties.textContent = "Ties: " + totalTies
}

rock.addEventListener('click', function() {
  compNum = Math.floor(Math.random() * 3);
  switch (compNum) {
    case 0:
      totalTies += 1
      alert("Computer chose rock! You tied!")
      break;
    case 1:
      totalLosses += 1
      alert("Computer chose paper! You lost!")
      break;
    case 2:
      totalWins += 1
      alert("Computer chose scissors! You won!")
      break;
  }
  outputScores();
})

paper.addEventListener('click',  function() {
  compNum = Math.floor(Math.random() * 3);
  switch (compNum) {
    case 0:
      totalWins += 1
      alert("Computer chose rock! You won!")
      break;
    case 1:
      totalTies += 1
      alert("Computer chose paper! You tied!")
      break;
    case 2:
      totalLosses += 1
      alert("Computer chose scissors! You lost!")
      break;
  }
  outputScores();
})

scissors.addEventListener('click',  function() {
  compNum = Math.floor(Math.random() * 3);
  switch (compNum) {
    case 0:
      totalLosses += 1
      alert("Computer chose rock! You lost!")
      break;
    case 1:
      totalWins += 1
      alert("Computer chose paper! You won!")
      break;
    case 2:
      totalTies += 1
      alert("Computer chose scissors! You tied!")
      break;
  }
  outputScores();
})
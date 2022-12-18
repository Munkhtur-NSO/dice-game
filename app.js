//2 toglogchiin eelj hadgalah huvsagch
//Player 1 = 0, Player 2 = 1
var activePlayer, scores, roundScore;
shineerEhleh();

//  Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", shooShid);

document.querySelector(".btn-hold").addEventListener("click", onooHadgalah);

document.querySelector(".btn-new").addEventListener("click", shineerEhleh);

function shooShid() {
  //1-6 доторх санамсаргүй нэг тоо
  var diceNumber = Math.ceil(Math.random() * 6);

  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = "dice-" + diceNumber + ".png";

  if (diceNumber != 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchPlayer();
  }
}

function onooHadgalah() {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
    document.getElementById("score-" + activePlayer).textContent = "WINNER!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {

     switchPlayer();
  }
}

function shineerEhleh() {
  activePlayer = 0;

  //Players point
  scores = [0, 0];

  //Player point now
  roundScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
 
  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}

function switchPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог алга болгоно
  document.querySelector(".dice").style.display = "none";
}

//2 toglogchiin eelj hadgalah huvsagch
//Player 1 = 0, Player 2 = 1

var activePlayer = 0;

//Players point 
var scores = [0, 0];

//Player point now 
var roundScore = 0;



//Togloom ehleh stage
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

//  Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", shooShid);

function shooShid() {
    //1-6 доторх санамсаргүй нэг тоо
    var diceNumber = Math.ceil(Math.random() * 6);

    document.querySelector('.dice').style.display = "block";
    document.querySelector('.dice').src = 'dice-' + diceNumber + ".png";
    
    if (diceNumber != 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    } else {
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;


        if (activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }

        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        // Шоог алга болгоно
        document.querySelector('.dice').style.display= "none";
    }
}

document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;
document.getElementById('playAgain').onclick = reload;

var userScore = 0;
var computerScore = 0;

function playRound() {
    var userChoice = this.id;
    console.log("User: " + userChoice);

    var computerChoice = Math.floor(Math.random()* 3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
    } else { 
        computerChoice = "scissors";
    };

    console.log("Computer: " + computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissors")
                            ||
        (userChoice === "paper" && computerChoice === "rock")
                            ||
        (userChoice === "scissors" && computerChoice === "paper")) {
            userScore += 1;
            result = ("User wins the round!!"
            + "<br><br>Users score: " + userScore + "<br>Computer score: " + computerScore);
            console.log("User wins the round!!");

            if (userScore === 5) {
                result += "<br><br>You Won!!!";
                document.getElementById('playAgain').style.display = 'block';
                document.getElementById('rock').disabled = true;
                document.getElementById('paper').disabled = true;
                document.getElementById('scissors').disabled = true;
            }
    
    }
     else if (userChoice === computerChoice) {
                    result = ("It's a tie!!"
                    + "<br><br>Users score: " + userScore + "<br>Computer score: " + computerScore );
                    console.log("It's a tie!!");
                }
                else {
                    computerScore += 1;
                    result = ("Computer wins the round!!"
                    + "<br><br>Users score: " + userScore + "<br>Computer score: " + computerScore);
                    console.log("Computer wins the round!!");

                    if (computerScore === 5) {
                        result += "<br><br>Computer Wins!!!";
                        document.getElementById('playAgain').style.display = 'block';
                        document.getElementById('rock').disabled = true;
                        document.getElementById('paper').disabled = true;
                        document.getElementById('scissors').disabled = true;
                    }
                };
                document.getElementById('roundResults').innerHTML = result;
                
};

function reload() {
    location.reload(true);
};
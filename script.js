let choice = ["rock", "paper", "scissors"];
let pScore = 0, cScore = 0;

function game(){
    let rounds = 5;
    const playerSelection = "rock";

    //loop game
    while (rounds-- > 0){
        console.log(playRound(prompt("Make your selection (Rock, paper, scissors): "), getComputerChoice()));
    }

    //display score
    console.log(`The score is: ${pScore} : ${cScore}`);

    //check winner
    if (cScore > pScore){
        console.log("You lose.");
    }
    else if (pScore > cScore){
        console.log("You win!");
    }
    else {
        console.log("You tied.");
    }

}

function getComputerChoice(){
    return choice[getRandomInt(3)];
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function playRound(playerChoice, compChoice){
    switch (playerChoice.toLowerCase()){
        case "rock":
            switch (compChoice){
                case "rock":
                    return "Rock and rock is a tie.";
                    break;
                case "paper":
                    cScore++;
                    return "Paper beats rock, you lose.";
                    break;
                case "scissors":
                    pScore++;
                    return "Rock beats scissors, you win!";
                    break;
                default:
                    alert(compChoice);
                    break;
            }
            break;
        case "paper":
            switch (compChoice){
                case "rock":
                    pScore++;
                    return "Paper beats rock, you win!";
                    break;
                case "paper":
                    return "Paper and paper is a tie.";
                    break;
                case "scissors":
                    cScore++;
                    return "Scissors beats paper, you lose.";
                    break;
                default:
                    alert(compChoice);
                    break;
            }
            break;
        case "scissors":
            switch (compChoice){
                case "rock":
                    cScore++;
                    return "Rock beats scissors, you lose.";
                    break;
                case "paper":
                    pScore++;
                    return "Scissors beats paper, you win!";
                    break;
                case "scissors":
                    return "Scissors and scissors is a tie.";
                    break;
                default:
                    alert(compChoice);
                    break;
            }
            break;
        default:
            alert(playerChoice);
            break;
    }
}

game();
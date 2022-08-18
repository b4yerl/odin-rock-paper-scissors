// 0 = rock, 1 = paper, 2 = scissors 
function getComputerChoice() {
    return Math.floor(Math.random() * 3);    
}

function playRound(playerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();
    const computerObject = ['Rock', 'Paper', 'Scissors'];
    //validação do input
    let teste = 0;
    for (let i = 0; i < 3; i++) {
        if (player == computerObject[i].toLowerCase())
        {
            i = 3;
            teste++;
        }
    }
    if (teste == 0) {return 'stop'};
    //condições de vitória
    if ((computer == 0 && player == "scissors") || (computer == 1 && player == "rock") || (computer == 2 && player == "paper"))
    {
        return `You Lose! ${computerObject[computer]} beats ${player}`;
    }
    else if ((player == 'rock' && computer == 2) || (player == 'paper' && computer == 0) || (player == 'scissors' && computer == 1))
    {
        return `YOU WIN! ${player} beats ${computerObject[computer]}`;
    }
    else {return 'It\'s a draw';}
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let n = parseInt(prompt('How many games do you want to play?'));
    for (let i = 0; i < n; i++){
        let userChoice = prompt('Choose between "Rock, Paper or Scissors": ');
        let result = playRound(userChoice);
        
        if (result[4] == 'W') {playerScore++; console.log(result);}
        else if (result[4] == 'L') {computerScore++; console.log(result);}
        else if (result[4] == 'stop') {return 'Please insert a valid option.'}
        else {console.log(result);}
    }

    if (playerScore > computerScore) {
        return(`At the end, you won by ${playerScore}-${computerScore}`)
    }
    else if (playerScore < computerScore) {
        return(`At the end, you lost by ${playerScore}-${computerScore}`)
    }
    else {return `It's a draw by ${playerScore}-${computerScore}`}
}

console.log(game());
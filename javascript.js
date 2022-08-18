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
    if (teste == 0) {return 'Please insert a valid value'};
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

function computerPlay () {
    let cpuChoice;
    let randInt = Math.floor(Math.random() * 3);
    if (randInt == 0) {
        cpuChoice = 'rock';
        return cpuChoice;
    }
    cpuChoice = (randInt > 1) ? cpuChoice = 'scissors' : cpuChoice = 'paper';
    return cpuChoice;
    }

function playerPrompt(){
    let valid = false;
    let playerInput;
    do{
    playerInput = prompt("Please enter your choice:");
    playerInput = playerInput.toLowerCase();

    alert(`You chose ${playerInput}`);
    if (
        (playerInput === 'rock') ||
        (playerInput === 'paper') ||
        (playerInput === 'scissors')
        ){
        valid = true;
    }
    else {
        alert('That is not a valid choice!');
    }

    }

    while (!valid);


    return playerInput;


}

function displayTally (playerTally, cpuTally){
    const summaryMessage = document.querySelector('#summary');
    summaryMessage.textContent = `The current score is ${playerTally} vs ${cpuTally}.`;
    return;

}

function getwhoWon(playerTally, cpuTally){
    const summaryMessage = document.querySelector('#summary');
    let winMessage = 'You are a true hero. Congrats!';
    let lostMessage = 'Damn bro, you lost to a mindless machine.';
    let drawMessage = 'BOOOOORING';
    let finalMessage = '';



    if (playerTally > cpuTally){
        finalMessage = winMessage;
    }
    else if (playerTally < cpuTally){
        finalMessage = lostMessage;
    }
    else {
        finalMessage = drawMessage;
    }
    summaryMessage.textContent =`FULL TIME: ${playerTally} vs ${cpuTally}! ${finalMessage}`;

return;
}



function game(){
    let lostMessage = 'You lost this one!';
    let winMessage = 'You win mofucka!';
    let drawMessage = 'This one was a tie.';

    let playerTally = 0;
    let cpuTally = 0;



    for (let i = 1; i < 6 ; i++){
        let playerPlay = playerPrompt();
        let cpuPlay = computerPlay();

        alert(`Game #${i}!
            Your choice: ${playerPlay}
            CPU choice: ${cpuPlay}`);

            if (playerPlay === cpuPlay ){
                alert(drawMessage);
                displayTally(playerTally, cpuTally);
                }
            else if (
                (playerPlay === 'rock' && cpuPlay === 'scissors') ||
                (playerPlay === 'scissors' && cpuPlay === 'paper') ||
                (playerPlay === 'paper' && cpuPlay === 'rock')
                )
                {
                    alert(winMessage);
                    playerTally = ++playerTally;
                    displayTally(playerTally, cpuTally);
                }
            else if (
                (cpuPlay === 'rock' && playerPlay === 'scissors') ||
                (cpuPlay === 'scissors' && playerPlay === 'paper') ||
                (cpuPlay === 'paper' && playerPlay === 'rock')
                )
                {
                    alert(lostMessage);
                    cpuTally = ++cpuTally;
                    displayTally(playerTally, cpuTally);
                }

        }
    getwhoWon(playerTally, cpuTally);


}
game();


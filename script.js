function computerPlay () {
    let cpuChoice;
    let randInt = Math.floor(Math.random() * 3);
    if (randInt == 0) {
        cpuChoice = 'ROCK';
        return cpuChoice;
    }
    cpuChoice = (randInt > 1) ? cpuChoice = 'SCISSORS' : cpuChoice = 'PAPER';
    return cpuChoice;
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



function game(choice){
    let lostMessage = 'You lost this one!';
    let winMessage = 'You win mofucka!';
    let drawMessage = 'This one was a tie.';





        let playerPlay = choice;
        let cpuPlay = computerPlay();
        let playSelection = document.querySelector('#play-selection');
        let cpuSelection = document.querySelector('#cpu-selection');
        let resultMessage = document.querySelector('#result-text');

        playSelection.textContent = `You chose: ${playerPlay}`;
        cpuSelection.textContent = `The Computer chooses..... ${cpuPlay}`;



            if (playerPlay === cpuPlay ){
                resultMessage.textContent = drawMessage;
                displayTally(playerTally, cpuTally);
                }
            else if (
                (playerPlay === 'ROCK' && cpuPlay === 'SCISSORS') ||
                (playerPlay === 'SCISSORS' && cpuPlay === 'PAPER') ||
                (playerPlay === 'PAPER' && cpuPlay === 'ROCK')
                )
                {
                    resultMessage.textContent = winMessage;
                    playerTally = ++playerTally;
                    displayTally(playerTally, cpuTally);
                }
            else if (
                (cpuPlay === 'ROCK' && playerPlay === 'SCISSORS') ||
                (cpuPlay === 'SCISSORS' && playerPlay === 'PAPER') ||
                (cpuPlay === 'PAPER' && playerPlay === 'ROCK')
                )
                {
                    resultMessage.textContent = lostMessage;
                    cpuTally = ++cpuTally;
                    displayTally(playerTally, cpuTally);
                }

    if (playerTally === winThreshold || cpuTally === winThreshold){
        getwhoWon(playerTally, cpuTally);
    }



}

const winThreshold = 5;
let playerTally = 0;
let cpuTally = 0;
let choice;
const buttons = document.querySelectorAll('.btn-ctn button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        choice = button.id.toUpperCase();
        game(choice);
    })
})

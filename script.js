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
        alert(`The current score is ${playerTally} vs ${cpuTally}.`)
        return;

    }

    function getwhoWon(playerTally, cpuTally){
        alert(`The final score is ${playerTally} vs ${cpuTally}!`);

        if (playerTally > cpuTally){
            alert('You won this round!');
        }
        else if (playerTally < cpuTally){
            alert('Suck it! You lost to the computer.');
        }
        else {
            alert('It was a tie. Boring.');
        }
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


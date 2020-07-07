
	let player = computer = 0;
	let computerSelection = computerPlay();
	let playerSelection  = "";
	const btnR = document.querySelector(".btnR");
	const btnP = document.querySelector(".btnP");
	const btnS = document.querySelector(".btnS");  
	let playerScore = document.querySelector(".playerScore"); 
    let computerScore = document.querySelector(".computerScore");
    let results = document.querySelector(".results")
    const btnagain = document.getElementById('btnagain');

function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3) + 1;
	return (randomNumber === 1) ? "rock" : (randomNumber === 2) ? "paper" : "scissors";
}

function playRound(playerSelection, computerSelection) {
   
	if (playerSelection == computerSelection){
		results.textContent = "It is a draw";
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
		results.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
		
	} else {
		results.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
	}
}

function status(playerSelection, computerSelection){ 
	
	if (playerSelection == computerSelection){ 
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
     	return 1;
	} else{
     	return -1;
	}
}
	

function game () {
	let score;
        playRound(playerSelection, computerSelection);
        score = status(playerSelection, computerSelection);

         if (score == 1){
			player++;
			playerScore.textContent = `${player}`;
    	} else if (score == -1){
       		computer++;
       		computerScore.textContent = `${computer}`;
   		}

    	if (player == 5){
        	results.textContent = "You Win congratulations";
     	   	
    	} else if (computer == 5){
        	results.textContent = "You Lose, luck next time";
        	
    	}
    
}

	btnR.addEventListener('click', () => {
	  playerSelection = "rock";
	  computerSelection = computerPlay();
	  game();
	});

	btnP.addEventListener('click', () => {
	  playerSelection = "paper";
	  computerSelection = computerPlay();
      game();
	});

	btnS.addEventListener('click', () => {
	  playerSelection = "scissors";
	  computerSelection = computerPlay();
	  game();
	});

	btnagain.addEventListener('click', () => {
		results.textContent = "";
		player = computer = 0;
		playerScore.textContent = `${player}`;
		computerScore.textContent = `${computer}`;
	})
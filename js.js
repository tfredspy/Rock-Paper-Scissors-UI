function computerPlay(){
    const rand = Math.floor(Math.random()*3);
    const rock = 'Rock'
    const paper = 'Paper'
    const scissor = 'Scissor'
    if(rand === 0){
        const play = rock
        return play
    }
    else if(rand === 1){
       const play = paper
       return play
    }
    else{
        const play = scissor
        return play 
    }
}

console.log("If you want to play one game, write playRound('rock'), playRound('paper'), or playRound('scissor') in the console!")

function playRound(playerSelection='', computerSelection){
    const firstChar = playerSelection.slice(0,1);
    const firstCharCapitalize = firstChar.toUpperCase();
    const rest = playerSelection.slice(1, playerSelection.length);
    const restCapitalize = rest.toLowerCase();
    const playerFinal = firstCharCapitalize + restCapitalize;
    computerSelection = computerPlay();
    if(playerFinal === 'Rock'){
        if(computerSelection === 'Rock'){
            const status = 'Tie';
            return status;
        }else if(computerSelection === 'Paper'){
            const status = 'Lose';
            return status;
        }else{
            const status = 'Win';
            return status;
        }
    }else if(playerFinal === 'Paper'){
        if(computerSelection === 'Paper'){
            const status = 'Tie';
            return status;
        }
        else if(computerSelection === 'Rock'){
            const status = 'Win';
            return status;
        }else{
            const status = 'Lose';
            return status;
        }
    }else if(playerFinal === 'Scissor'){
        if(computerSelection === 'Scissor'){
            const status = 'Tie';
            return status;
        }
        else if(computerSelection === 'Paper'){
            const status = 'Win';
            return status;
        }else{
            const status = 'Lose';
            return status;
        }
    }
}

function scoreReset(){
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;
    scoreTxt.textContent = 'Score: 0 - 0';
    result.textContent = 'Result: ';
    gameTxt.textContent = 'Game: ';
}

function announceWinner(){
    if(playerScore == 5){
        alert('You Won!');
    }
    else{
        alert('The computer wins!');
    }
    scoreReset();
}

function check(){
    if(playerScore == 5 || computerScore == 5){
        announceWinner();
    }
}


var playerScore = 0;
var computerScore = 0;
var gameCount = 0;
const result = document.querySelector('#result');
const scoreTxt = document.querySelector('#score');
const rock = document.querySelector('#rock');
const gameTxt = document.querySelector('#game');
rock.addEventListener('click', function(){
    gameCount+=1;
    gameTxt.textContent = 'Game: ' + gameCount;
    var game = playRound('rock') 
    result.textContent = 'Result: ' + game;
    if(game == 'Tie'){
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore; 
    }
    else if(game == 'Lose'){
        computerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    else if (game== 'Win'){
        playerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    check();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){
    gameCount+=1;
    gameTxt.textContent = 'Game: ' + gameCount;
    game = playRound('paper')
    result.textContent = 'Result: ' + game;
    if(game == 'Tie'){
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore; 
    }
    else if(game == 'Lose'){
        computerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    else if (game== 'Win'){
        playerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    check();
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', function(){
    gameCount+=1;
    gameTxt.textContent = 'Game: ' + gameCount;
    game = playRound('scissor')
    result.textContent = 'Result: ' + game;
    if(game == 'Tie'){
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore; 
    }
    else if(game == 'Lose'){
        computerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    else if (game== 'Win'){
        playerScore+=1;
        scoreTxt.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    }
    check();
});




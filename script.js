//global variables
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

const displayResult_div = document.querySelector(".result");
const displayFinalResult_div = document.querySelector(".final-score")

const playerChoice_span = document.querySelector(".player-choice");
const computerChoice_span = document.querySelector(".computer-choice");

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");

const button_btn = document.querySelectorAll("button");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

//returns a random move from computer
function computerPlay()
{
         
  let randomNum = Math.random();

  if (randomNum < 0.33)
  {
      return "rock";
  }

  else if (randomNum > 0.33 && randomNum < 0.66)
  {
      return "paper";
  }

  else
  {
      return "scissor";
  }

}

function game (userChoice)
{

  if(gameRound >= 5)
  {
    return 0;
  }

  const computerChoice = computerPlay();
  const result = playRound(userChoice, computerChoice);
  const finalResult = gameOver();

  playerChoice_span.innerHTML = ("You chose: " + userChoice);
  computerChoice_span.innerHTML = ("Computer chose: " + computerChoice);
  displayResult_div.innerHTML = result;
  playerScore_span.innerHTML = ("You: " + playerScore);
  computerScore_span.innerHTML = ("Computer: " + computerScore);
  displayFinalResult_div.innerHTML = finalResult;
}
//takes player and computer selections as parameters and returns the result and increments score
function playRound(playerSelection, computerSelection)
{

  if(playerSelection == "rock" && computerSelection == "paper") 
  {
    computerScore++;
    return "You lose! Paper beats rock";
  }

  else if(playerSelection == "rock" && computerSelection == "scissor") 
  {
    playerScore++;
    return "You win! Rock beats scissor";
  }

  else if(playerSelection == "paper" && computerSelection == "rock")
  {
    playerScore++;
    return "You win! Paper beats rock";
  } 

  else if(playerSelection == "paper" && computerSelection == "scissor") 
  {
    computerScore++;
    return "You lose! Scissor beats paper";
  }

  else if(playerSelection == "scissor" && computerSelection == "rock") 
  {
    computerScore++;
    return "You lose! Rock beats paper";
  }

  else if(playerSelection == "scissor" && computerSelection == "paper") 
  {
    playerScore++;
    return "You win! Scissor beats paper";
  }

  else return "It's a tie!";

}


//calls the game function with user's choice as parameter when user clicks a button
function main()
{
  rock_div.addEventListener('click', function () 
  {
    game("rock");
    gameRound++;
  });

  paper_div.addEventListener('click', function () 
  {
    game("paper");
    gameRound++;
  });

  scissor_div.addEventListener('click', function () 
  {
    game("scissor");
    gameRound++;
  });
  
}

function gameOver ()
{
  if (gameRound === 4)
  {
    if (playerScore > computerScore)
    {
      return `YOU WON THE GAME BY ${playerScore - computerScore} POINT(S)`;
    }
    else if (playerScore < computerScore)
    {
      return `YOU LOST THE GAME BY ${computerScore - playerScore} POINT(S)`;
    }
    return `GAME IS TIED!`;
  }
  else return "";
}


main();









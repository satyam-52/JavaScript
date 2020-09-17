const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
      return userInput;
  }
  else {
    console.log('ERROR');
  }
};
// input = getUserChoice('paper');

const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3)
  switch (computerInput) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return 'game was a tie';
  } else if (userChoice === 'bomb') {
    return 'User Won';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  }
}
// console.log(determineWinner(getUserChoice('paper'), getComputerChoice()))

const playGame = () => {
  userChoice = getUserChoice('BOMB');
  console.log(`User Choice: ${userChoice}`);
  computerChoice = getComputerChoice();
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(`RESULT: ${determineWinner(userChoice, computerChoice)}`);
}

playGame();

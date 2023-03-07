const paper = window.document.querySelector('.paper'); 
const outerOval = window.document.querySelectorAll('.outer-oval');
const innerOval1 = window.document.querySelectorAll('.inner-oval1');
const innerOval2 = window.document.querySelectorAll('.inner-oval2');
const innerOval3 = window.document.querySelectorAll('.inner-oval3');
const innerImg = window.document.querySelectorAll('.inner-oval-img')
const ovalContainer = window.document.querySelector('.oval-container');
const upper = window.document.querySelector('.upper');
const lower = window.document.querySelector('.lower'); 
const scissors = window.document.querySelector('.scissors'); 
const rock = window.document.querySelector('.rock'); 
const selection = window.document.querySelector('.selection');
const picked = window.document.querySelector('.picked');
const housePicked = window.document.querySelector('.house-picked');
const pickedUpper = window.document.querySelector('.picked.t-upper');
const housePickedUpper = window.document.querySelector('.house-picked.t-upper');
const pickedLower = window.document.querySelector('.picked.t-lower');
const housePickedLower = window.document.querySelector('.house-picked.t-lower');
const emptyCircle = window.document.querySelector('.empty-circle');
const emptyCircleRock = window.document.querySelector('.empty-circle-rock');
const gameProgress = window.document.querySelector('#game-progress');
const playAgainWin = window.document.querySelectorAll('.user-win .play-again')
const playAgainLose = window.document.querySelectorAll('.user-lose .play-again')


const activateElt = (elt, type, cssType="display") => {
  elt.style[cssType] = type;
}

const selectedItemDim = [
  {
    width: '292.61px',
    height: '300px',
  },
  {
    width: '292.61px',
    height: '286.7px',
  },
  {
    width: '224.63px',
    height: '224.63px',
  },
  {
    width: '224.63px',
    height: '212.81px',
  },
]

//Resize and display elements after click
const ovalResize = (item) => {
  const items = [paper, scissors, rock];
  const ovals = [outerOval, innerOval1, innerOval2, innerOval3];
  const lowerList  = [2];
  items[item].style.pointerEvents = 'none'; 

  items.forEach((elt) => {
    if (elt !== items[item]) activateElt(elt, 'none');
  });
  activateElt(items[item], 'block');
  activateElt(selection, 'none', 'background');
  selection.classList.add('selected');

  Object.keys(selectedItemDim).forEach((elt, index) => {
    ovals[index][item].classList.add('selected');
  });

  // for(let i = 0; i < pic.length; i++){
  const pickedActive = lowerList.includes(item) ? pickedLower : pickedUpper;
  const housePickedActive = lowerList.includes(item) ? housePickedLower : housePickedUpper;
    activateElt(picked, 'block');
  activateElt(housePicked, 'block'); 
  activateElt(pickedActive, 'block');
  activateElt(housePickedActive, 'block'); 
  // }

  // innerImg[item].style.width = '141.87px';
  // innerImg[item].style.height = '141.87px';
  // innerOval3[item].style.marginTop = '11.8px';
}

//computer selection
const computerSelection = [
  paper,
  rock,
  scissors
]

const playersItem = [
  'paper',
  'rock',
  'scissors'
]

const getRandom = (id) => {
  const filterPlayersItems = playersItem.filter((elt, index) => index !== id);
  const filteredItems = computerSelection.filter((elt, index) => index !== id);
  const randomNum = Math.floor(Math.random() * filteredItems.length)
  const random = filteredItems[randomNum];
  return [random, filterPlayersItems[randomNum]];
}


//Generate component and set the dimensions equal to the user's selected
const computerSelectionMode = (node, type, conputerType) => {
  node.style.pointerEvents = 'none'; 

  setTimeout(() => { 
    if (type === 'rock') {
      emptyCircleRock.style.display = 'none';
      lower.style.paddingTop = '63px';
    }
    else {
      emptyCircle.style.display = 'none';
      upper.style.paddingTop = '63px';
    }
    node.style.display = 'block';
    const ovals = ['outer-oval', 'inner-oval1', 'inner-oval2', 'inner-oval3']

    Object.keys(selectedItemDim).forEach((elt, index) => {
      const currentDim = selectedItemDim[elt];
      const currentNode = node.querySelector(`.${ovals[index]}`)
      // currentNode.style.width = currentDim.width;
      // currentNode.style.height = currentDim.height;
      currentNode.classList.add('selected');
      currentNode.classList.add(`${type}1`);
      currentNode.classList.add('comp');

      // if (ovals[index] === 'outer-oval' && type === 'rock') currentNode.style.marginLeft = '-130px';
      // else if (ovals[index] === 'outer-oval') currentNode.style.marginLeft = '-60px';
      // if (ovals[index] === 'inner-oval3') currentNode.style.marginTop = '11.82px';
      // const nodeInnerImg = currentNode.querySelector('img');
      // nodeInnerImg.style.width = '141.87px';
      // nodeInnerImg.style.height = '141.87px';
      })

    playRound(type, conputerType);

  }, 1000);
}


//user selection
paper.addEventListener('click', () => {
  emptyCircle.style.display = 'block';
  ovalResize(0);
  const [element, text] = getRandom(0);
  computerSelectionMode(element, 'paper', text)
  upper.appendChild(element);
})

scissors.addEventListener('click', () => {
  emptyCircle.style.display = 'block';
  ovalResize(1);
  const [element, text] = getRandom(2);
  computerSelectionMode(element, 'scissors', text)
  upper.appendChild(element);

})

rock.addEventListener('click', () => {
  upper.style.display = 'none';
  lower.style.justifyContent = 'space-between';
  emptyCircleRock.style.display = 'block';
  const [element, text] = getRandom(1);
  ovalResize(2);
  computerSelectionMode(element, 'rock', text)
  lower.appendChild(element);
});


//increase user's score and store in the localStorage
const increaseScore = userWin => {
  var score = localStorage.getItem('score');
  const storedScore = localStorage.getItem('score');
  score = storedScore ? parseInt(storedScore) : 0;

  if(userWin) {
    score++
  } else {
    score--
  }
  
  localStorage.setItem('score', score.toString())
  
  var userScore = window.document.querySelector('.num');
  userScore.innerHTML = parseInt(score.toString());
  score = parseInt(userScore.innerHTML);
}

//determine the winner base on user and computer selection
const determineWinner = (userChoice, computerChoice) => {
  const replayRoundUpper = window.document.querySelector('.replay-round.r-upper');
  const replayRoundLower = window.document.querySelector('.replay-round.r-lower');
  const replayRoundLowerMobile = window.document.querySelector('.replay-round.m-sect');
  const pick = window.document.querySelector('.pick');
  // const upperList = ['paper', 'scissors']
  const lowerList = ['rock']

  replayRoundLower.style.marginLeft = '-35px'
  replayRoundUpper.style.marginLeft = '35px'
  pick.style.gap = '320px' 

  if ((userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")) {
    if(userChoice === "rock") lower.style.maxWidth = '938px'
    const replaySect = lowerList.includes(userChoice) ? replayRoundLower: replayRoundUpper;
    replaySect.classList.add('show');  
    replaySect.querySelector('.user-win').style.display = 'block';
    replaySect.querySelector('.user-lose').style.display = 'none';
    
    replayRoundLowerMobile.classList.add('show');  
    replayRoundLowerMobile.querySelector('.user-win').style.display = 'block';
    replayRoundLowerMobile.querySelector('.user-lose').style.display = 'none';
    return userChoice; //user wins
  } else {
    if(userChoice === "rock") lower.style.maxWidth = '938px'
    const replaySect = lowerList.includes(userChoice) ? replayRoundLower: replayRoundUpper;
    replaySect.classList.add('show');  
    replaySect.querySelector('.user-win').style.display = 'none';
    replaySect.querySelector('.user-lose').style.display = 'block';

    replayRoundLowerMobile.classList.add('show');  
    replayRoundLowerMobile.querySelector('.user-win').style.display = 'none';
    replayRoundLowerMobile.querySelector('.user-lose').style.display = 'block';
    return computerChoice; //computer wins
  }
}

//play round between user and computer
const playRound = (userChoice, computerChoice) => {
  var playResult = determineWinner(userChoice, computerChoice)

  if (playResult === userChoice) {
    increaseScore(true); // Increase the score if the user wins
  } else if (playResult === computerChoice) {
    increaseScore(false); // Decrease the score if the user loses
  }
  selection.classList.add('media-select') //increase the width on click to make space for play again button
  selection.classList.add(`${userChoice}-mob`)
 }

//keep track of the score after the page refreshes
window.onload = () => {
  const numElement = window.document.querySelector('.num')
  numElement.innerText = localStorage.getItem('score')
}

//play another round from the beginning
for(var i = 0; i < playAgainWin.length; i++) {
  playAgainWin[i].addEventListener("click", () => window.location.reload());
  playAgainLose[i].addEventListener("click", () => window.location.reload());
}
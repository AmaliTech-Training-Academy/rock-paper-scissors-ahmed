const scissorsAd = window.document.querySelector('.scissors-ad');
const spockAd = window.document.querySelector('.spock-ad');
const paperAd = window.document.querySelector('.paper-ad');
const lizardAd = window.document.querySelector('.lizard-ad');
const rockAd = window.document.querySelector('.rock-ad');
const oval = window.document.querySelectorAll('.oval')
const oval1 = window.document.querySelectorAll('.oval1')
const oval2 = window.document.querySelectorAll('.oval2')
const oval3 = window.document.querySelectorAll('.oval3')
const playAdvanced = window.document.querySelector('.play-advanced')
const pentagon = window.document.querySelector('.pentagon')
const empty_Circle = window.document.querySelector('.empty_circle')
const ovalScissors = window.document.querySelector('.oval.scissors')
const pickAd = window.document.querySelector('.pick-ad')
const pickedAd = window.document.querySelector('.picked-ad')
const housePickedAd = window.document.querySelector('.house-picked-ad')
const playAgainWinAd = window.document.querySelector('.user_win .play_again')
const playAgainLoseAd = window.document.querySelector('.user_lose .play_again')




const activateElement = (elt, type, cssType="display") => {
  elt.style[cssType] = type;
}

const selectedItemDimension = [
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
const ovalsResize = (item) => {
  const items = [scissorsAd, spockAd, paperAd, lizardAd, rockAd];
  const ovals = [oval, oval1, oval2, oval3];
  // const lowerList  = [2];
  items[item].style.pointerEvents = 'none'; 

  items.forEach((elt) => {
    if (elt !== items[item]) activateElement(elt, 'none');
  });
  activateElement(items[item], 'block');
  activateElement(pentagon, 'none');
  activateElement(pickedAd, 'block')
  // activateElement(pickAd, '-425px', 'marginTop')
  activateElement(housePickedAd, 'block')
  pickAd.classList.add('active')
  playAdvanced.classList.add('selected');

  Object.keys(selectedItemDimension)?.forEach((elt, index) => {
    console.log(ovals[index][item]);
    ovals[index][item]?.classList?.add('selected');
    
  });

  // const pickedActive = lowerList.includes(item) ? pickedLower : pickedUpper;
  // const housePickedActive = lowerList.includes(item) ? housePickedLower : housePickedUpper;
  // activateElement(picked, 'block');
  // activateElement(housePicked, 'block'); 
  // activateElement(pickedActive, 'block');
  // activateElement(housePickedActive, 'block'); 
}



//computer selection
const computersAdSelection = [
  scissorsAd,
  spockAd,
  paperAd,
  lizardAd,
  rockAd
]

const playersAdItem = [
  'scissors',
  'spock',
  'paper',
  'lizard',
  'rock'
]

const getRandomItem = (id) => {
  console.log(id)
  const filterPlayersItems = playersAdItem.filter((elt, index) => index !== id);
  console.log(filterPlayersItems)
  const filteredItems = computersAdSelection.filter((elt, index) => index !== id);
  const randomNum = Math.floor(Math.random() * filteredItems.length)
  const random = filteredItems[randomNum];
  return [random, filterPlayersItems[randomNum]];
}



//Generate component and set the dimensions equal to the user's selected
const computerSelectMode = (node, type, conputerType) => {
  node.style.pointerEvents = 'none'; 

  setTimeout(() => { 
    if (type) {
      empty_Circle.style.display = 'none';
      node.classList.add('selected');
      // pickAd.classList.add('selected');
    }
    // else {
    //   emptyCircle.style.display = 'none';
    //   upper.style.paddingTop = '63px';
    // }
    node.style.display = 'block';
    const ovals = ['oval', 'oval1', 'oval2', 'oval3']

    Object.keys(selectedItemDimension).forEach((elt, index) => {
      const currentDim = selectedItemDimension[elt];
      const currentNode = node.querySelector(`.${ovals[index]}`)
      currentNode?.classList?.add('selected');
      // currentNode.classList.add(`${type}1`);
      // currentNode.classList.add('comp');
      })

    play_Round(type, conputerType);

  }, 7000);
}



//play round between user and computer
const play_Round = (userChoice, computerChoice) => {
  var playResult = determine_Winner(userChoice, computerChoice)

  if (playResult === userChoice) {
    increaseUserScore(true); // Increase the score if the user wins
  } else if (playResult === computerChoice) {
    increaseUserScore(false); // Decrease the score if the user loses
  }
  // selection.classList.add('media-select') //increase the width on click to make space for play again button
  // selection.classList.add(`${userChoice}-mob`)
 }



 //increase user's score and store in the localStorage
// const increaseUserScore = userWin => {
//   var score = localStorage.getItem('score');
//   const storedScore = localStorage.getItem('score');
//   score = storedScore ? parseInt(storedScore) : 0;

    
//   if(userWin) {
//     score++
//   } else {
//     score--
//   }
  
//   localStorage.setItem('score', score.toString())
  
//   var userScore = window.document.querySelector('.num');
//   userScore.innerHTML = parseInt(score.toString());
//   score = parseInt(userScore.innerHTML);
// }



//determine the winner base on user and computer selection
const determine_Winner = (userChoice, computerChoice) => {
  // const replayRoundUpper = window.document.querySelector('.replay-round.r-upper');
  // const replayRoundLower = window.document.querySelector('.replay-round.r-lower');
  // const replayRoundLowerMobile = window.document.querySelector('.replay-round.m-sect');
  // const pick = window.document.querySelector('.pick');
  // const lowerList = ['rock']
  // replayRoundLower.style.marginLeft = '-35px'
  // replayRoundUpper.style.marginLeft = '35px'
  pickAd.classList.add('selected')

  if ((userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper") || 
  (userChoice === 'rock' && computerChoice === 'lizard') || 
  (userChoice === 'lizard' && computerChoice === 'spock') || 
  (userChoice === 'spock' && computerChoice === 'scissors') || 
  (userChoice === 'scissors' && computerChoice === 'lizard') || 
  (userChoice === 'lizard' && computerChoice === 'paper') ||
  (userChoice === 'paper' && computerChoice === 'spock') ||
  (userChoice === 'spock' && computerChoice === 'rock')) {
    if(userChoice) playAdvanced.style.maxWidth = '938px'
    playAdvanced.classList.add('selected')
    window.document.querySelector('.replay_round').classList.add('show');
    window.document.querySelector('.user_win').style.display = 'block';
    window.document.querySelector('.user_lose').style.display = 'none';

    // const replaySect = lowerList.includes(userChoice) ? replayRoundLower: replayRoundUpper;
    // replaySect.classList.add('show');  
    // replaySect.querySelector('.user-win').style.display = 'block';
    // replaySect.querySelector('.user-lose').style.display = 'none';
    
    // replayRoundLowerMobile.classList.add('show');  
    // replayRoundLowerMobile.querySelector('.user-win').style.display = 'block';
    // replayRoundLowerMobile.querySelector('.user-lose').style.display = 'none';
    return userChoice; //user wins
  } else {
    // if(userChoice === "rock") 
    playAdvanced.style.maxWidth = '938px'
    window.document.querySelector('.replay_round').classList.add('show');
    window.document.querySelector('.user_win').style.display = 'none';
    window.document.querySelector('.user_lose').style.display = 'block';
    return computerChoice; //computer wins
  }
}



scissorsAd.addEventListener('click', () => {
  empty_Circle.style.display = 'block';
  scissorsAd.classList.add('active')
  ovalsResize(0);
  const [element, text] = getRandomItem(0);
  computerSelectMode(element, 'scissors', text)
  playAdvanced.appendChild(element);
})

spockAd.addEventListener('click', () => {
  empty_Circle.style.display = 'block';
  spockAd.classList.add('active')
  ovalsResize(1);
  const [element, text] = getRandomItem(1);
  computerSelectMode(element, 'spock', text)
  playAdvanced.appendChild(element);
})

paperAd.addEventListener('click', () => {
  empty_Circle.style.display = 'block';
  paperAd.classList.add('active')
  ovalsResize(2);
  const [element, text] = getRandomItem(2);
  computerSelectMode(element, 'paper', text)
  playAdvanced.appendChild(element);
})

lizardAd.addEventListener('click', () => {
  empty_Circle.style.display = 'block';
  lizardAd.classList.add('active')
  ovalsResize(3);
  const [element, text] = getRandomItem(3);
  computerSelectMode(element, 'lizard', text)
  playAdvanced.appendChild(element);
})

rockAd.addEventListener('click', () => {
  empty_Circle.style.display = 'block'
  rockAd.classList.add('active')
  ovalsResize(4)
  const [element, text] = getRandomItem(4)
  computerSelectMode(element, 'rock', text)
  playAdvanced.appendChild(element)
})


playAgainWinAd.addEventListener('click', () => window.location.reload())
playAgainLoseAd.addEventListener('click', () => window.location.reload())
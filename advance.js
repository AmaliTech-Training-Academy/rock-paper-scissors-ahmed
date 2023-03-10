const scissorsAd = window.document.querySelector('.scissors-ad');
const spockAd = window.document.querySelector('.spock-ad');
const paperAd = window.document.querySelector('.paper-ad');
const lizardAd = window.document.querySelector('.lizard-ad');
const rockAd = window.document.querySelector('.rock-ad');
const oval = window.document.querySelectorAll('.oval')
const oval1 = window.document.querySelectorAll('.oval1')
const oval2 = window.document.querySelectorAll('.oval2')
const oval3 = window.document.querySelectorAll('.oval3')
const playAdvanced = window.document.querySelector('.play-advance')
const pentagon = window.document.querySelector('.pentagon')


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
  console.log(item);
  const items = [scissorsAd, spockAd, paperAd, lizardAd, rockAd];
  const ovals = [oval, oval1, oval2, oval3];
  // const lowerList  = [2];
  items[item].style.pointerEvents = 'none'; 

  items.forEach((elt) => {
    if (elt !== items[item]) activateElement(elt, 'none');
  });
  activateElement(items[item], 'block');
  activateElement(pentagon, 'none');
  // playAdvanced.classList.add('selected');

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
const computersSelection = [
  scissorsAd,
  spockAd,
  paperAd,
  lizardAd,
  rockAd
]

const playerItem = [
  'scissors',
  'spock',
  'paper',
  'lizard',
  'rock'
]

const getRandomItem = (id) => {
  const filterPlayersItems = playersItem.filter((elt, index) => index !== id);
  const filteredItems = computerSelection.filter((elt, index) => index !== id);
  const randomNum = Math.floor(Math.random() * filteredItems.length)
  const random = filteredItems[randomNum];
  return [random, filterPlayersItems[randomNum]];
}



//Generate component and set the dimensions equal to the user's selected
const computerSelectMode = (node, type, conputerType) => {
  node.style.pointerEvents = 'none'; 

  setTimeout(() => { 
    // if (type === 'rock') {
    //   emptyCircleRock.style.display = 'none';
    //   lower.style.paddingTop = '63px';
    // }
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

  }, 500);
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
const increaseUserScore = userWin => {
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
const determine_Winner = (userChoice, computerChoice) => {
  // const replayRoundUpper = window.document.querySelector('.replay-round.r-upper');
  // const replayRoundLower = window.document.querySelector('.replay-round.r-lower');
  // const replayRoundLowerMobile = window.document.querySelector('.replay-round.m-sect');
  // const pick = window.document.querySelector('.pick');
  // const lowerList = ['rock']

  // replayRoundLower.style.marginLeft = '-35px'
  // replayRoundUpper.style.marginLeft = '35px'
  // pick.style.gap = '320px' 

  if ((userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")) {
    if(userChoice === "rock") lower.style.maxWidth = '938px'
    // const replaySect = lowerList.includes(userChoice) ? replayRoundLower: replayRoundUpper;
    // replaySect.classList.add('show');  
    // replaySect.querySelector('.user-win').style.display = 'block';
    // replaySect.querySelector('.user-lose').style.display = 'none';
    
    // replayRoundLowerMobile.classList.add('show');  
    // replayRoundLowerMobile.querySelector('.user-win').style.display = 'block';
    // replayRoundLowerMobile.querySelector('.user-lose').style.display = 'none';
    console.log('User Win')
    return userChoice; //user wins
  } else {
    // if(userChoice === "rock") lower.style.maxWidth = '938px'
    // const replaySect = lowerList.includes(userChoice) ? replayRoundLower: replayRoundUpper;
    // replaySect.classList.add('show');  
    // replaySect.querySelector('.user-win').style.display = 'none';
    // replaySect.querySelector('.user-lose').style.display = 'block';

    // replayRoundLowerMobile.classList.add('show');  
    // replayRoundLowerMobile.querySelector('.user-win').style.display = 'none';
    // replayRoundLowerMobile.querySelector('.user-lose').style.display = 'block';
    console.log('User lose')
    return computerChoice; //computer wins
  }
}



scissorsAd.addEventListener('click', () => {
  // emptyCircle.style.display = 'block';
  ovalsResize(0);
  const [element, text] = getRandomItem(0);
  computerSelectMode(element, 'paper', text)
  // upper.appendChild(element);
})

spockAd.addEventListener('click', () => {
  // emptyCircle.style.display = 'block';
  ovalsResize(1);
  const [element, text] = getRandomItem(1);
  computerSelectMode(element, 'paper', text)
  // upper.appendChild(element);
})

paperAd.addEventListener('click', () => {
  // emptyCircle.style.display = 'block';
  ovalsResize(2);
  const [element, text] = getRandomItem(2);
  computerSelectMode(element, 'paper', text)
  // upper.appendChild(element);
})

lizardAd.addEventListener('click', () => {
  // emptyCircle.style.display = 'block';
  ovalsResize(3);
  const [element, text] = getRandomItem(3);
  computerSelectMode(element, 'paper', text)
  // upper.appendChild(element);
})

rockAd.addEventListener('click', () => {
  // emptyCircle.style.display = 'block';
  ovalsResize(4);
  const [element, text] = getRandomItem(4);
  computerSelectMode(element, 'paper', text)
  // upper.appendChild(element);
})
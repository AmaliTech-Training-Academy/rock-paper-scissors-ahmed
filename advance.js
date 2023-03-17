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
const ovalImg = window.document.querySelectorAll('.oval-img')
const selectionAd = window.document.querySelectorAll('.selection')


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
  items[item].style.pointerEvents = 'none'; 

  items.forEach((elt) => {
    if (elt !== items[item]) activateElement(elt, 'none');
  });
  activateElement(items[item], 'block');
  activateElement(pentagon, 'none');
  activateElement(pickedAd, 'block')
  activateElement(housePickedAd, 'block')
  pickAd.classList.add('active')
  playAdvanced.classList.add('selected');
  
  Object.keys(selectedItemDimension)?.forEach((elt, index) => {
    ovals[index][item]?.classList?.add('selected');
    
  }); 
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
    }
    
    node.style.display = 'block';
    const ovals = ['oval', 'oval1', 'oval2', 'oval3']
    // ovalImg.classList.add('selected');
    
    Object.keys(selectedItemDimension).forEach((elt, index) => {
      const currentDim = selectedItemDimension[elt];
      const currentNode = node.querySelector(`.${ovals[index]}`)
      currentNode?.classList?.add('selected');
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

  localStorage.setItem('roundsPlayed', Number(localStorage.getItem('roundsPlayed') || 0) + 1);

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
    if(userChoice) playAdvanced.classList.add('active')
    playAdvanced.classList.add('selected')
    window.document.querySelector('.replay_round').classList.add('show');
    window.document.querySelector('.user_win').style.display = 'block';
    window.document.querySelector('.user_lose').style.display = 'none';
    return userChoice; //user wins
  } else {
    playAdvanced.classList.add('active')
    playAdvanced.classList.add('selected')
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



// Get the button and content elements
const advanced = document.querySelector('.advanced');
const content1 = document.querySelector('.selection');
const content2 = document.querySelector('.play-advanced');

// Retrieve the current content state from local storage
let currentContent = localStorage.getItem('currentContent');

// If there is no stored state, set the default state to 'content1'
if (!currentContent || (currentContent !== 'content1' && currentContent !== 'content2')) {
  currentContent = 'content1';
  localStorage.setItem('currentContent', currentContent);
}

if (currentContent === 'content1') {
  content1.style.display = 'block';
  content2.style.display = 'none';
  advanced.innerText = 'Advance'
} else {
  content1.style.display = 'none';
  content2.style.display = 'flex';
  advanced.innerText = 'Main'
}

advanced.addEventListener('click', () => {
  if (currentContent === 'content1') {
    currentContent = 'content2';
    content1.style.display = 'none';
    content2.style.display = 'flex';
    advanced.innerText = "Main";
  } else {
    currentContent = 'content1';
    content1.style.display = 'block';
    content2.style.display = 'none';
    advanced.innerText = "Advance";
  }

  localStorage.setItem('currentContent', currentContent); // Store the updated content state in local storage
})

playAgainWinAd.addEventListener('click', () => window.location.reload())
playAgainLoseAd.addEventListener('click', () => window.location.reload())


//keep track of the score after the page refreshes
window.onload = () => {
  const numElement = window.document.querySelector('.num')
  numElement.innerText = localStorage.getItem('score')
  const roundsPlayed = localStorage.getItem('roundsPlayed') || 0;

  let scores = JSON.parse(localStorage.getItem("scores")) || {};
  if (Number(roundsPlayed) === 5) {
    let name = prompt("Enter your name:");
    const currentScore = Number(localStorage.getItem('score'))

    if (name in scores) {
      scores[name] += currentScore;
    } else {
      scores[name] = currentScore;
    }
    
    localStorage.setItem('scores', JSON.stringify(scores))
    localStorage.setItem("leaderboardScore", Number(localStorage.getItem("leaderboardScore") || 0) + currentScore)
    localStorage.setItem('score', Number(0))
    var userScore = window.document.querySelector('.num');
    userScore.innerText = 0

    localStorage.setItem('roundsPlayed', 0)
  }

}


let leaderboardTableAd = document.getElementById("leaderboardTable");
    
const updateLeaderBoard = () => {
  let scores = JSON.parse(localStorage.getItem("scores"));
  let sortedScores = Object.entries(scores || {})
    .filter(([name, score]) => typeof score === "number")
    .sort((a, b) => b[1] - a[1]);

  // Clear existing rows
  let tbody = leaderboardTableAd.querySelector('tbody')
  tbody.innerHTML = ""

  // Populate the table with the sorted scores
  let rank = 1;
  sortedScores.slice(0,5).forEach((entry) => {
    let row = document.createElement('tr');
    let rankCell = document.createElement('td');
    let nameCell = document.createElement('td');
    let scoreCell = document.createElement('td');

    rankCell.textContent = rank;
    nameCell.textContent = entry[0];
    scoreCell.textContent = entry[1];

    row.appendChild(rankCell);
    row.appendChild(nameCell);
    row.appendChild(scoreCell);

    tbody.appendChild(row);

    rank++;
  });
  
  // Save the scores to local storage
  localStorage.setItem("scores", JSON.stringify(scores));
  
  // Show the leaderboard table
  leaderboardTableAd.style.display = "table";
}



//user selection
const paper = window.document.querySelector('.paper'); 
const outerOval = window.document.querySelector('.outer-oval');
const innerOval1 = window.document.querySelector('.inner-oval1');
const innerOval2 = window.document.querySelector('.inner-oval2');
const innerOval3 = window.document.querySelector('.inner-oval3');
const innerImg = window.document.querySelector('.inner-oval-img')
const ovalContainer = window.document.querySelector('.oval-container');
const upper = window.document.querySelector('.upper');
const lower = window.document.querySelector('.lower'); 
const scissors = window.document.querySelector('.scissors'); 
const rock = window.document.querySelector('.rock'); 
const selection = window.document.querySelector('.selection');
const picked = window.document.querySelector('.picked');
const housePicked = window.document.querySelector('.house-picked');
const emptyCircle = window.document.querySelector('.empty-circle');

const outerOvalScissors = window.document.querySelector('.outer-oval.scissors')
const innerOvalScissors1 = window.document.querySelector('.inner-oval1.scissors');
const innerOvalScissors2 = window.document.querySelector('.inner-oval2.scissors');
const innerOvalScissors3 = window.document.querySelector('.inner-oval3.scissors');

const outerOvalRock = window.document.querySelector('.outer-oval.rock')
const innerOvalRock1 = window.document.querySelector('.inner-oval1.rock');
const innerOvalRock2 = window.document.querySelector('.inner-oval2.rock');
const innerOvalRock3 = window.document.querySelector('.inner-oval3.rock');




paper.addEventListener('click', () => {
  // console.log('height', window.innerHeight);
  // console.log('width', window.innerWidth);
  if(paper.style.display === 'none'){
    paper.style.display = 'none'
  } else {
    paper.style.display = 'block'
    picked.style.display = 'block'
    rock.style.display = 'none'
    scissors.style.display = 'none'
    selection.style.background = 'none'
    
    housePicked.style.display = 'block'
    selection.classList.add('selected');
    emptyCircle.style.display = 'block';
    outerOval.style.width = '292.61px';
    outerOval.style.height = '300px';

    innerOval1.style.width = '292.61px';
    innerOval1.style.height = '286.7px';

    innerOval2.style.width = '224.63px';
    innerOval2.style.height = '224.63px';

    innerOval3.style.width = '224.63px';
    innerOval3.style.height = '212.81px';
    innerOval3.style.marginTop = '11.82px'

    // innerImg.style.width = '141.87px';
    // innerImg.style.height = '141.87px';
  }
})

scissors.addEventListener('click', () => {
  if(scissors.style.display === 'none'){
    scissors.style.display = 'none'
  } else {
    scissors.style.display = 'block'
    picked.style.display = 'block'
    rock.style.display = 'none'
    paper.style.display = 'none'
    selection.style.background = 'none'
    
    housePicked.style.display = 'block'
    selection.classList.add('selected');
    emptyCircle.style.display = 'block';

    outerOvalScissors.style.width = '292.61px';
    outerOvalScissors.style.height = '300px';

    innerOvalScissors1.style.width = '292.61px';
    innerOvalScissors1.style.height = '286.7px';

    innerOvalScissors2.style.width = '224.63px';
    innerOvalScissors2.style.height = '224.63px';

    innerOvalScissors3.style.width = '224.63px';
    innerOvalScissors3.style.height = '212.81px';
    innerOvalScissors3.style.marginTop = '11.82px'


    // innerImg.style.width = '141.87px';
    // innerImg.style.height = '141.87px';
    }
})

rock.addEventListener('click', () => {
  if(rock.style.display === 'none'){
    rock.style.display = 'none'
  } else {
    rock.style.display = 'block'
    picked.style.display = 'block'
    scissors.style.display = 'none'
    paper.style.display = 'none'
    selection.style.background = 'none'

    // lower.classList.add('active')
    // lower.style.display = 'flex'
    // lower.style.flexDirection = 'column-reverse'
    // emptyCircle.classList.add('active')

    housePicked.style.display = 'block'
    selection.classList.add('selected');
    emptyCircle.style.display = 'block';
    emptyCircle.style.marginLeft = '400px';

    outerOvalRock.style.width = '292.61px';
    outerOvalRock.style.height = '300px';

    innerOvalRock1.style.width = '292.61px';
    innerOvalRock1.style.height = '286.7px';

    innerOvalRock2.style.width = '224.63px';
    innerOvalRock2.style.height = '224.63px';
  

    innerOvalRock3.style.width = '224.63px';
    innerOvalRock3.style.height = '212.81px';
    innerOvalRock3.style.marginTop = '11.82px'


    // innerImg.style.width = '141.87px';
    // innerImg.style.height = '141.87px';
    }
})


//computer selection
// var computerSelection = [
//   paper,
//   rock,
//   scissors
// ]

// const getRandom = () => {
//   var random = computerSelection[Math.floor(Math.random() * computerSelection.length)];
// }
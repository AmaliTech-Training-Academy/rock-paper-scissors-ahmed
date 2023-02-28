
//user selection
const paper = window.document.querySelector('.paper'); 
const outerOval = window.document.querySelector('.outer-oval');
const innerOval1 = window.document.querySelector('.inner-oval1');
const innerOval2 = window.document.querySelector('.inner-oval2');
const innerOval3 = window.document.querySelector('.inner-oval3');
const innerImg = window.document.querySelector('.inner-oval-img')
const upper = window.document.querySelector('.upper');
const scissors = window.document.querySelector('.scissors'); 
const rock = window.document.querySelector('.rock'); 
const selection = window.document.querySelector('.selection');
const picked = window.document.querySelector('.picked');
const housePicked = window.document.querySelector('.house-picked');
const emptyCircle = window.document.querySelector('.empty-circle');
// const selectionText = window.document.querySelector('.selection-text');

paper.addEventListener('click', () => {
  console.log('height', window.innerHeight);
  console.log('width', window.innerWidth);
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

    innerImg.style.width = '141.87px';
    innerImg.style.height = '141.87px';
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
    // selection.classList.add('selected');
    // emptyCircle.style.display = 'block';

    // outerOval.style.width = '292.61px';
    // outerOval.style.height = '400px';

    // innerOval1.style.width = '292.61px';
    // innerOval1.style.height = '286.7px';

    // innerOval2.style.width = '224.63px';
    // innerOval2.style.height = '224.63px';

    // innerOval3.style.width = '224.63px';
    // innerOval3.style.height = '212.81px';

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

    // housePicked.style.display = 'block'
    // selection.classList.add('selected');
    // emptyCircle.style.display = 'block';

    // outerOval.style.width = '292.61px';
    // outerOval.style.height = '400px';

    // innerOval1.style.width = '292.61px';
    // innerOval1.style.height = '286.7px';

    // innerOval2.style.width = '224.63px';
    // innerOval2.style.height = '224.63px';

    // innerOval3.style.width = '224.63px';
    // innerOval3.style.height = '212.81px';

    // innerImg.style.width = '141.87px';
    // innerImg.style.height = '141.87px';
    }
})
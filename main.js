
//user selection
const paper = window.document.querySelector('.paper'); 
const scissors = window.document.querySelector('.scissors'); 
const rock = window.document.querySelector('.rock'); 
const selection = window.document.querySelector('.selection');
const picked = window.document.querySelector('.picked');
const housePicked = window.document.querySelector('.house-picked');
// const selectionText = window.document.querySelector('.selection-text');

paper.addEventListener('click', () => {
  if(paper.style.display === 'none'){
    paper.style.display = 'none'
  } else {
    paper.style.display = 'block'
    paper.style.position = 'relative'
    paper.style.top = '63px'
    // paper.style.left = '347px'
    picked.style.display = 'block'
    // picked.style.position = 'relative'
    // picked.style.left = '421px'
    // picked.style.top = '270px'
    // picked.style.bottom = '63px'
    housePicked.style.display = 'none'
    rock.style.display = 'none'
    scissors.style.display = 'none'
    selection.style.background = 'none'
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
    }
})
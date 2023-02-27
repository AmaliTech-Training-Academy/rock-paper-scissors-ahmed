
//user selection
const paper = window.document.querySelector('.paper'); 
const scissors = window.document.querySelector('.scissors'); 
const rock = window.document.querySelector('.rock'); 
const selection = window.document.querySelector('.selection');

paper.addEventListener('click', () => {
  console.log('You clicked')
  if((selection.style.display === 'none')){
    selection.style.display = 'block'
    // rock.style.display = 'block'
  } else {
    selection.style.display = 'none'
    // rock.style.display = 'block'  
  }
})
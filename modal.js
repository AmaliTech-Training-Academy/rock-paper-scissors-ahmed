const openRules = window.document.querySelector('[data-modal-target]'); //opens rules modal
const closeRules = window.document.querySelector('[data-close-button]'); //closes rules modal
const overlay = window.document.querySelector('#overlay');
const modal = window.document.querySelector('#modal'); // gets the modal
const advance = window.document.querySelector('#advanced'); // gets the modal
const openAdvanced = window.document.querySelector('[data-target]')
const closeAdvanced = window.document.querySelector('[data-close]')
const playAdvance = window.document.querySelector('.play-advanced')
const logo = window.document.querySelector('.logo')
const logoBonus = window.document.querySelector('.logo-bonus')


//rules modal
openRules.addEventListener('click', () => openModal());
closeRules.addEventListener('click', () => closeModal());

const openModal = () => {
  if(selection.style.display === 'none') {
    advance.classList.add('active');
    overlay.classList.add('active');
    return;
  }
  
  modal.classList.add('active');
  overlay.classList.add('active');
  return;
} 

const closeModal = () => {
  if(modal === null) 
  return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//open advance
openAdvanced.addEventListener('click', () => openAdvance());
closeAdvanced.addEventListener('click', () => closeAdvance());

const openAdvance = () => {
  if(selection.style.display === 'none') {
    activateElt(playAdvance, 'none');
    activateElt(selection, 'block');
    activateElt(logo, "block");
    activateElt(logoBonus, "none");
    return;
  } 

  activateElt(playAdvance, 'flex');
  activateElt(selection, 'none');
  activateElt(logo, "none");
  activateElt(logoBonus, "block");
  return;
} 

const closeAdvance = () => {
  if(advance === null) return 
  advance.classList.remove('active')
  overlay.classList.remove('active')
}

// change button text on click
const changeButtonText = () => {
  var btn = document.getElementById("addAdvance");
  if (btn.value == "Advance") {
    btn.value = "Main";
    btn.innerHTML = "Main";
    // localStorage.setItem('buttonText', 'Main')
  } else {
    btn.value = "Advance";
    btn.innerHTML = "Advance";
    // localStorage.setItem('buttonText', 'Advance')
  }
}

// window.addEventListener('load', () => {
//   var btn = document.getElementById("addAdvance");
//   const savedButtonText = localStorage.getItem('buttonText');
//   if (savedButtonText) {
//     btn.value = savedButtonText;
//     btn.innerHTML = savedButtonText;
//   } else {
//     // If no saved button text, set the default based on current content
//     const currentContent = getCurrentContent(); // Replace with your code to get current content
//     if (currentContent == "Main") {
//       btn.value = "Advance";
//       btn.innerHTML = "Advance";
//     } else {
//       btn.value = "Main";
//       btn.innerHTML = "Main";
//     }
//     localStorage.setItem('buttonText', btn.value);
//   }
// });


// const onContentChange = () => {
//   const currentContent = getCurrentContent(); // Replace with your code to get current content
//   var btn = document.getElementById("addAdvance");
//   if (currentContent == "Advance") {
//     btn.value = "Advance";
//     btn.innerHTML = "Advance";
//   } else {
//     btn.value = "Main";
//     btn.innerHTML = "Main";
//   }
//   localStorage.setItem('buttonText', btn.value);
// }

//keep page contents after refreshing
// window.onload = () => {
//   let state = {
//     main: '',
//     advance: ''
//   }
//   localStorage.setItem('main', JSON.stringify(state));
//   localStorage.setItem('advance', JSON.stringify(state))
// }


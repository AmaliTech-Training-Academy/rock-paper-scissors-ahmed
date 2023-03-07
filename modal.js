const openRules = window.document.querySelector('[data-modal-target]'); //opens rules modal
const closeRules = window.document.querySelector('[data-close-button]'); //closes rules modal
const overlay = window.document.querySelector('#overlay');
const modal = window.document.querySelector('#modal'); // gets the modal
const advance = window.document.querySelector('#advanced'); // gets the modal
const openAdvanced = window.document.querySelector('[data-target]')
const closeAdvanced = window.document.querySelector('[data-close]')


//rules modal
openRules.addEventListener('click', () => openModal());
closeRules.addEventListener('click', () => closeModal());

const openModal = () => {
  if(modal === null) return 
  modal.classList.add('active')
  overlay.classList.add('active')
}

const closeModal = () => {
  if(modal === null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//advanced modal
openAdvanced.addEventListener('click', () => openAdvance());
closeAdvanced.addEventListener('click', () => closeAdvance());

const openAdvance = () => {
  if(advance === null) return 
  advance.classList.add('active')
  overlay.classList.add('active')
}

const closeAdvance = () => {
  if(advance === null) return 
  advance.classList.remove('active')
  overlay.classList.remove('active')
}
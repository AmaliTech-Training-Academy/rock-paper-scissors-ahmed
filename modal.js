const openRules = window.document.querySelector('[data-modal-target]'); //opens rules modal
const closeRules = window.document.querySelector('[data-close-button]'); //closes rules modal
const overlay = window.document.querySelector('#overlay');
const modal = window.document.querySelector('#modal'); // gets the modal

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


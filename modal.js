const openRules = document.getElementById('modal'); //opens rules modal
const closeRules = document.getElementById('close'); //closes rules modal
const overlay = documet.getElementsById('overlay');
const modal = document.getElementById('modal'); // gets the modal

// openRules.addEventListener('click', () => {
//   const modal = document.querySelector('#overlay')
//   openModal(modal)
// })

// closeRules.addEventListener('click', () => {
//   const modal = document.querySelector.closest('.close-rules')
//   closeModal(modal)
// })

// const openModal = modal => {
//   if(modal === null) 
//     return 
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// const closeModal = modal => {
//   if(modal === null) 
//     return 
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }

openRules.onclick = () => {
  modal.style.display = 'block';
}

closeRules.onclick = () => {
  close.style.display = 'none';
}

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
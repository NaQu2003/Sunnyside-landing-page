const menuButton = document.querySelector('.menu-button')
const menuBar = document.querySelector('.menu-bar');


menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('active')
})
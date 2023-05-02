const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.menu-links1');
const btnClose = document.querySelector('.menu-vector');

document.addEventListener('click', (e)=>{
 if(e.target.classList.contains('menu-icon') || e.target.classList.contains('menu-vector')){
  menuLinks.classList.toggle('displaynow')
  menuIcon.classList.toggle('hambo')
 }
})
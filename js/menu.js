let menuIcon = document.querySelector('.menu-icon')
let menuLinks = document.querySelector('.menu-links1')
let btnClose = document.querySelector('.close')
let menu_a = document.querySelectorAll('.menu-a')
menuIcon.addEventListener('click', (e)=>{
    if(menuLinks.style.display = 'none' && btnClose.style.display == 'none'){
        menuLinks.style.display ='flex'
        btnClose.style.display = 'block'
    }else{
         menuLinks.style.display = 'none'
    }
})
btnClose.addEventListener('click', ()=>{
    if(menuLinks.style.display = 'flex'){
        menuLinks.style.display = 'none'
        btnClose.style.display = 'none'
    }
})

const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.menu-links1');
const btnClose = document.querySelector('.close');
const menuA = document.querySelectorAll('.menu-a');

if (window.innerWidth < 769) {
  menuIcon.addEventListener('click', () => {
    if (menuLinks.style.display === 'none' || btnClose.style.display === 'none') {
      menuLinks.style.display = 'flex';
      btnClose.style.display = 'block';
    } else {
      menuLinks.style.display = 'none';
    }
  });

  btnClose.addEventListener('click', () => {
    if (menuLinks.style.display === 'flex') {
      menuLinks.style.display = 'none';
      btnClose.style.display = 'none';
    }
  });
}

for (let i = 0; i < menuA.length; i += 1) {
  menuA[i].onclick = () => {
    menuLinks.style.display = 'none';
    btnClose.style.display = 'none';
  };
}

let nav = document.querySelector('nav');
let burger = document.querySelector('.menu-toggle');
let xmark = document.querySelector('.menu-toggle2');
let isiToggle = document.querySelector('.isi-toggle');

nav.addEventListener('click', (e)=>{
  if(e.target.className == 'menu-toggle'){
    e.target.style.display = 'none';
    isiToggle.style.display = 'flex';
    isiToggle.style.transition = '';

    xmark.style.display = 'flex';
    
  }
})

xmark.addEventListener('click',()=>{
  isiToggle.style.display = 'none';
  xmark.style.display = 'none';
  burger.style.display = 'flex';
})
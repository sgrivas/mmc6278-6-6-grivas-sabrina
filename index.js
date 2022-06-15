var hamburgerButton=document.querySelector('nav button');
var hamburgerMenu=document.getElementById('main-menu')
var menu=document.querySelector('nav')

hamburgerButton.addEventListener('click', function(){
    if (hamburgerMenu.classList.contains('show-menu')) {
        closeMenu()
    } else{
        openMenu()
    }
})

document.addEventListener('keyup', function(event) {      
    if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')){
        closeMenu();
    }
});

function openMenu(){
    hamburgerMenu.classList.add('show-menu')
    hamburgerButton.setAttribute('aria-expanded', 'true')
}

function closeMenu() {
    hamburgerMenu.classList.remove('show-menu')
    hamburgerButton.focus();
    hamburgerButton.setAttribute('aria-expanded', 'false')
}

document.body.addEventListener('click', function(e){
    if (menu.contains(e.target)) {
        return
      }
      closeMenu()
})
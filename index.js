var hamburgerButton=document.querySelector('nav button');
var hamburgerMenu=document.getElementById('main-menu')
hamburgerButton.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('show-menu')
    hamburgerButton.setAttribute('aria-expanded', 'true')
})

document.addEventListener('keyup', function(event) {      
    if (event.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')){
        hamburgerMenu.classList.remove('show-menu')
        hamburgerButton.focus();
    }
});

if (!(hamburgerMenu.classList.contains('show-menu'))) {
    hamburgerButton.setAttribute('aria-expanded', 'false')
}
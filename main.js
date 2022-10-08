const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    deskTopMenu.classList.toggle('inactive');
    menuEmail.classList.toggle('open-desktop-menu');
}
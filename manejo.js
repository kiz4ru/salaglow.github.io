function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('header');
    const body = document.body;

    // Alterna clases para mostrar/ocultar elementos y gestionar la cortina
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
    header.classList.toggle('menu-open');

    // Desactiva el scroll cuando el menú está abierto
    if (navLinks.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

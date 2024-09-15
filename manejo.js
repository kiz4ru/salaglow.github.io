function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.getElementById('nav-links');
    const body = document.body;

    // Alterna la visibilidad de los iconos y del menú
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Desactiva el scroll cuando el menú está abierto
    if (navLinks.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Oculta la X por defecto
    closeIcon.style.display = 'none';

    menuIcon.addEventListener('click', function() {
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        toggleMenu();
    });

    closeIcon.addEventListener('click', function() {
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        toggleMenu();
    });
});

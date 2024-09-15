document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        const newTransformValue = -(index * 100) / 3; // Desplaza el contenedor 33.33% por cada slide
        document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % (slides.length / 3); // Avanza una imagen, repite al final
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length / 3) % (slides.length / 3); // Retrocede una imagen
        showSlide(currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Inicializa la primera diapositiva
    showSlide(currentSlide);
});

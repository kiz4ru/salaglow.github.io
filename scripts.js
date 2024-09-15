document.addEventListener("scroll", function() {
    const rotatingIcon = document.querySelector(".rotating-icon img");
    const rotation = window.scrollY / 5;  // Ajusta la velocidad de rotación
    rotatingIcon.style.transform = `rotate(${rotation}deg)`;
});
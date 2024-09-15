document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Captura los valores del formulario
    const name = document.getElementById('name').value;
    const mesa = document.getElementById('mesa').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Muestra la confirmación de la reserva
    document.getElementById('confirm-name').textContent = name;
    document.getElementById('confirm-mesa').textContent = mesa;
    document.getElementById('confirm-fecha').textContent = fecha;
    document.getElementById('confirm-hora').textContent = hora;

    document.getElementById('reservation-confirmation').classList.remove('hide');
    document.getElementById('reservation-confirmation').style.display = 'block';
});

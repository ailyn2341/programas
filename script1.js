// Función para mostrar la interfaz correspondiente según la opción seleccionada
function showForm(option) {
    // Ocultar todas las interfaces
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        form.style.display = 'none';
    });

    // Mostrar el formulario correspondiente
    const selectedForm = document.getElementById(option);
    if (selectedForm) {
        selectedForm.style.display = 'block';
    }
}

// Función para calcular el total de la compra en el formulario de Medicamento
function calcularTotal() {
    const precioMedicamento = parseFloat(document.getElementById('precioMedicamento').value) || 0;
    const cantidad = parseInt(document.getElementById('cantidad').value) || 0;
    const total = precioMedicamento * cantidad;
    document.getElementById('total').innerText = 'Total de la compra: $' + total.toFixed(2);
}

// Función para mostrar mensaje de cita agendada
function confirmarCita() {
    alert('¡Tu cita está agendada exitosamente!');
}

// Función para enviar el formulario de certificados
function enviarCertificado() {
    alert('¡Certificado ingresado correctamente!');
}

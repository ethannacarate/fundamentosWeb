// Agregar evento de escucha al formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recargar la página al enviar el formulario

    // Obtener los valores de los campos de entrada
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const tablaBody = document.getElementById('tablaPersonas').querySelector('tbody');

    // Validación del formato del RUT
    const rutPattern = /^[0-9]{8}-[0-9Kk]{1}$/;
    if (!rutPattern.test(rut)) {
        alert("RUT inválido. Debe tener el formato 12345678-K o 12345678-1.");
        return; // Detener si el RUT no es válido
    }

    // Crear una nueva fila con los datos ingresados
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${rut}</td>
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${correo}</td>
        <td>${celular}</td>
    `;
    tablaBody.appendChild(nuevaFila); // Agregar la fila a la tabla

    // Limpiar los campos del formulario
    document.getElementById('form').reset();
});

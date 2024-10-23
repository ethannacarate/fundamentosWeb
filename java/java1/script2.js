document.getElementById('botonBienvenida').addEventListener('click', function() {
	const nombre = document.getElementById('nombre').value;
	const mensaje = document.getElementById('mensaje');
	
	if (nombre) {
		mensaje.textContent = `¡Bienvenido, ${nombre}!`;
	} else {
		mensaje.textContent = 'debe ingresar su nombre.';
	}
});
document.getElementById('botonLimpiar').addEventListener('click', function() {
    document.getElementById("nombre").value = '';
    document.getElementById("mensaje").textContent = '';
});
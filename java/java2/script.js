document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('message').innerText = `Bienvenido, ${username}!`;

                window.location.href = 'http://127.0.0.1:5500/java/java1/trabajo.java.html;  
    } else {
        document.getElementById('message').innerText = 'Por favor ingresa un nombre de usuario y contraseña.';
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, contraseña })
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        if (data.success) {
            messageElement.textContent = data.message;
            messageElement.classList.remove('error');
            messageElement.classList.add('success');
        } else {
            messageElement.textContent = data.message;
            messageElement.classList.remove('success');
            messageElement.classList.add('error');
        }
    })
    .catch(error => console.error('Error:', error));
});

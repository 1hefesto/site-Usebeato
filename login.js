document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'adm' && password === '123') {
            window.location.href = 'adm.html';
        } else if (username === 'cliente' && password === '123') {
            window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter both username and password');
    }
});


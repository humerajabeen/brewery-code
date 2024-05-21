document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "../home/home.html";
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        return;
    }

    fetch('https://your-api-url.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .catch((error) => {
        console.error('Error:', error);
    });
});
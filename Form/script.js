// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (check if fields are empty)
    if (username === '' || password === '') {
        document.getElementById('message').textContent = "Please fill out both fields.";
        return;
    }

    // Simple authentication (for demo purposes only)
    if (username === "user" && password === "password") {
        document.getElementById('message').textContent = "Login successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Invalid username or password.";
    }
});

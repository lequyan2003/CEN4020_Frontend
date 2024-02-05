document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Perform validation and login logic here
        if (!username || !password) {
            loginError.textContent = 'Please enter both username and password.';
        } else {
            // Verify password format
            if (!isValidPassword(password)) {
                loginError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.';
                return;
            }

            // Send login request to backend
            login(username, password);
        }
    });

    const signupLink = document.getElementById('signup-link');
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect or display signup form
        console.log('Redirect to signup page');
    });

    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function login(username, password) {
        // Send login request to backend
        console.log('Sending login request to backend:', { username, password });
        // This is where you would make an HTTP request to your backend API
    }
});

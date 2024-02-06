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

            // Send login request to backend (not implemented yet)
            // login(username, password);
        }
    });

    const signupForm = document.getElementById('signup-form');
    const signupUsernameInput = document.getElementById('signup-username');
    const signupPasswordInput = document.getElementById('signup-password');
    const signupSchoolInput = document.getElementById('signup-school');
    const signupError = document.getElementById('signup-error');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = signupUsernameInput.value;
        const password = signupPasswordInput.value;
        const school = signupSchoolInput.value;

        // Perform validation for signup form
        if (!username || !password || !school) {
            signupError.textContent = 'Please enter all required fields.';
        } else {
            // Verify password format
            if (!isValidPassword(password)) {
                signupError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.';
                return;
            }

            // Send signup request to backend
            signup(username, password, school);
        }
    });

    function isValidPassword(password) {
        // Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function signup(username, password, school) {
        // Send signup request to backend
        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                hashed_password: password,
                school: school,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Signup successful:', data);
            // Handle success (e.g., display success message)
        })
        .catch(error => {
            console.error('Error signing up:', error);
            // Handle error (e.g., display error message)
        });
    }
});

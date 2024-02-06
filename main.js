document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (!username || !password) {
                loginError.textContent = 'Please enter both username and password.';
            } else {
                if (!isValidPassword(password)) {
                    loginError.textContent = 'Invalid password format. Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.';
                    return;
                }

                // Send login request to backend
                login(username, password);
            }
        });
    }

    const signupForm = document.getElementById('signup-form');
    const signupUsernameInput = document.getElementById('signup-username');
    const signupPasswordInput = document.getElementById('signup-password');
    const signupSchoolInput = document.getElementById('signup-school');
    const signupError = document.getElementById('signup-error');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = signupUsernameInput.value;
            const password = signupPasswordInput.value;
            const school = signupSchoolInput.value;

            if (!username || !password || !school) {
                signupError.textContent = 'Please enter all required fields.';
            } else {
                if (!isValidPassword(password)) {
                    signupError.textContent = 'Invalid password format. Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.';
                    return;
                }

                signup(username, password, school);
            }
        });
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    function login(username, password) {
        // Send login request to backend
        console.log('Sending login request to backend:', { username, password });
        // This is where you would make an HTTP request to your backend API
    }

    function signup(username, password, school) {
        // Send signup request to backend
        console.log('Sending signup request to backend:', { username, password, school });
        // This is where you would make an HTTP request to your backend API
    }
});

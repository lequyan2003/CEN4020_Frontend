document.addEventListener('DOMContentLoaded', function() {
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
                    signupError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character.';
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

    function signup(username, password, school) {
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

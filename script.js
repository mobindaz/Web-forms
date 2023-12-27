function validateForm() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const dateOfBirth = document.getElementById('dateOfBirth').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate form
            if (!firstName || !lastName || !dateOfBirth || !email || !password) {
                alert('Please fill out all the fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Display success message
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Registration successful!';
        }

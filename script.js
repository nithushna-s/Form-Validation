
        const form = document.getElementById('registrationForm');

        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Name validation
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.length > 15) {
                nameError.textContent = 'Name must be 15 characters or less';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            // Phone number validation
            const phoneNumberInput = document.getElementById('phoneNumber');
            const phoneError = document.getElementById('phoneError');
            if (!/^\d{10}$/.test(phoneNumberInput.value)) {
                phoneError.textContent = 'Invalid phone number (10 digits required)';
                isValid = false;
            } else {
                phoneError.textContent = '';
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            if (!emailInput.value.includes('@')) {
                emailError.textContent = 'Invalid email address';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation
            const passwordInput = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            if (!isValid) {
                event.preventDefault(); 
            }
        });

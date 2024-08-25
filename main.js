document.addEventListener('DOMContentLoaded', function () {
    console.log("Bienvenue sur Mon Site BG moderne!");

    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async function (event) {
            event.preventDefault();
            const email = event.target.email.value;
            const password = event.target.password.value;

            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                alert('Inscription réussie ! Veuillez vérifier votre email pour confirmer votre inscription.');
            } else {
                alert('Erreur lors de l\'inscription. Veuillez réessayer.');
            }
        });
    }
});

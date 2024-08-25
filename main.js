document.addEventListener('DOMContentLoaded', function () {
    console.log("Bienvenue sur Mon Site BG moderne!");

    const googleSignInButton = document.querySelector('.google-signin');
    googleSignInButton.addEventListener('click', function () {
        console.log("Tentative de connexion avec Google.");
    });

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log("Inscription avec email:", event.target.email.value);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log("Connexion avec email:", event.target.email.value);
        });
    }
});


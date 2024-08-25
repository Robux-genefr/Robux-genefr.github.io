const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let users = {}; // Utilisation d'un simple objet pour stocker les utilisateurs temporairement

// Configurer Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Route d'inscription
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const verificationToken = crypto.randomBytes(32).toString('hex');

    users[email] = { password, verificationToken, verified: false };

    // Envoi de l'email de vérification
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmez votre inscription',
        html: `<p>Cliquez <a href="http://localhost:3000/verify?token=${verificationToken}&email=${email}">ici</a> pour vérifier votre email.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi de l\'email.');
        } else {
            console.log('Email envoyé: ' + info.response);
            res.status(200).send('Inscription réussie.');
        }
    });
});

// Route de vérification de l'email
app.get('/verify', (req, res) => {
    const { token, email } = req.query;

    if (users[email] && users[email].verificationToken === token) {
        users[email].verified = true;
        res.send('Email vérifié avec succès. Vous pouvez maintenant vous connecter.');
    } else {
        res.send('Lien de vérification invalide.');
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

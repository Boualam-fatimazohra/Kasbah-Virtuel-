require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Autorise React à parler au serveur

// Connexion DB
connectDB();

// Routes
const authController = require('./controllers/authController');
const gameController = require('./controllers/gameController');

// Définition des routes API
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register); // Utile pour créer le 1er admin
app.get('/api/games', gameController.getGames);
app.post('/api/games', gameController.addGame);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend lancé sur le port ${PORT}`));
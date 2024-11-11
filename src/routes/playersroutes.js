// src/routes/femaleroutes.js
const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playerscontrollers');

// Rutas para los usuarios
router.post('/players', playersController.createPlay);  // Crear un nuevo jugador
router.get('/players', playersController.getPlayers);    // Obtener todos los jugadores paginados con filtros
router.get('/players/:id', playersController.getPlayById);  // Obtener jugador por ID
router.put('/players/:id', playersController.updatePlayById);  // Obtener jugador por ID
module.exports = router;

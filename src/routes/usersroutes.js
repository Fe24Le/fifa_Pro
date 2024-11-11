
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userscontrollers');

// Rutas para los usuarios
router.post('/users', usersController.createUser);  // Crear un nuevo User
router.get('/users/:id', usersController.getUserById);  // Obtener User por ID
router.put('/users/:id', usersController.updateUserById);  // Obtener User por ID
module.exports = router;

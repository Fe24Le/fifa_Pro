const { Op } = require('sequelize');
const User = require('../models/user');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);  // Buscar por ID

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el Usuario' });
    }
};

// Actualizar usuario

const updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return   res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await user.update(req.body);
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

module.exports = {
    createUser,
    getUserById,
    updateUserById,
};

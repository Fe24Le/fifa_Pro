const { Op } = require('sequelize');
const Play = require('../models/players');

// Crear un nuevo usuario
const createPlay = async (req, res) => {
    try{
        const newPlayer = await Play.create(req.body);
        res.status(201).json(newPlayer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

// Obtener jugadores con filtros y paginación (version a mejorar)

const getPlayers = async (req, res) => {
    const { page = 1, limit = 3, name = '', club = '', nacion = 'Argentina' } = req.query;
    try {
        const players = await Play.findAll({
            where: {
                long_name: {
                    [Op.like]: `%${name}%` // Filtro por nombre
                },
                club_name: {
                    [Op.like]: `%${club}%` // Filtro por club
                },
                nationality_name: {
                    [Op.like]: `%${nacion}%` // Filtro por pais
                }
            },
            offset: (page - 1) * limit,
            limit: parseInt(limit),
        });
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los jugadores' });
    }
};

// Obtener un usuario por ID
const getPlayById = async (req, res) => {
    try {
        const player = await Play.findByPk(req.params.id);  // Buscar por ID

        if (!player) {
            return res.status(404).json({ message: 'Jugador no encontrado' });
        }

        res.status(200).json(player);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el jugador' });
    }
};

// Actualizar jugador

const updatePlayById = async (req, res) => {
    const { id } = req.params;
    try {
        const player = await Play.findByPk(id);
        if (!player) {
            return   res.status(404).json({ message: 'Jugador no encontrado' });
        }
        await player.update(req.body);
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el jugador' });
    }
};

module.exports = {
    createPlay,
    getPlayers,
    getPlayById,
    updatePlayById,
};

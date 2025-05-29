const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Route pour obtenir toutes les villes
router.get('/', cityController.getAllCities);

// Route pour obtenir une ville par ID
router.get('/:id', cityController.getCityById);

// Route pour créer une nouvelle ville
router.post('/', cityController.createCity);

// Route pour mettre à jour une ville
router.put('/:id', cityController.updateCity);

// Route pour supprimer une ville
router.delete('/:id', cityController.deleteCity);

// Exporter le router (c'est ce qui manquait probablement)
module.exports = router;
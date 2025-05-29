const { default: mongoose } = require("mongoose");

exports.getAllCities = async (req, res,next) => {
  try {
    const citySchema = new mongoose.Schema({},{strict : false})
    const City = mongoose.model("cities" , citySchema)
    const cities =await  City.find()
     res.status(200).json({ data: cities });
   } catch (error) {
    next()
    //  res.status(500).json({ message: "failed to fetch all cities" });
   }
};
exports.getCityById = async (req, res) => {
  try {
    // Vérifier que l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "ID de ville invalide"
      });
    }

    const city = await city.findById(req.params.id);
    
    if (!city) {
      return res.status(404).json({
        success: false,
        message: "Ville non trouvée"
      });
    }

    res.status(200).json({
      success: true,
      data: city
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération de la ville",
      error: error.message
    });
  }
};

exports.createCity = async (req, res) => {
  try {
    // Validation des données
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({
        success: false,
        message: "Le nom et la description sont requis"
      });
    }

    // Créer la nouvelle ville
    const newCity = new City({
      name: req.body.name,
      description: req.body.description,
      highlights: req.body.highlights || []
    });

    // Sauvegarder dans la base de données
    const savedCity = await newCity.save();

    res.status(201).json({
      success: true,
      message: "Ville créée avec succès",
      data: savedCity
    });
  } catch (error) {
    // Gestion des erreurs de duplication
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Une ville avec ce nom existe déjà"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Erreur lors de la création de la ville",
      error: error.message
    });
  }
};
exports.updateCity =async (req, res) => {
  try {
    // Vérifier que l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "ID de ville invalide"
      });
    }

    // Préparer les mises à jour
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.description) updates.description = req.body.description;
    if (req.body.highlights) updates.highlights = req.body.highlights;

    // Trouver et mettre à jour la ville
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedCity) {
      return res.status(404).json({
        success: false,
        message: "Ville non trouvée"
      });
    }

    res.status(200).json({
      success: true,
      message: "Ville mise à jour avec succès",
      data: updatedCity
    });
  } catch (error) {
    // Gestion des erreurs de duplication
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Une ville avec ce nom existe déjà"
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Erreur lors de la mise à jour de la ville",
      error: error.message
    });
  }
};
exports.deleteCity = async (req, res) => {
  try {
    // Vérifier que l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "ID de ville invalide"
      });
    }

    const deletedCity = await City.findByIdAndDelete(req.params.id);
    
    if (!deletedCity) {
      return res.status(404).json({
        success: false,
        message: "Ville non trouvée"
      });
    }

    res.status(200).json({
      success: true,
      message: "Ville supprimée avec succès",
      data: deletedCity
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la suppression de la ville",
      error: error.message
    });
  }
};

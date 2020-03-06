const Plants = require('../helpers/plants-model.js');

function validatePlant(req, res, next) {
  const id = req.params.id;

  Plants.findById(id)
    .then(plant => {
      if (plant) {
        next();
      } else {
        res.status(400).json({ errorMessage: 'need plant ID' });
      }
    })
    .catch(errorMessage => {
      res.status(500).json({ errorMessage: 'need specific ID to validate plant' });
    })
}

module.exports = validatePlant;
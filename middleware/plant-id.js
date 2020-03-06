const Plants = require('../helpers/plants-model.js');

async function validatePlant(req, res, next) {
 const { id } = req.params


  const plant = await Plants.myPlantId(id)

  if(!plant){
    res.status(404).json({ message: 'plant does not exist'})
  } else {
    next();
  }
  
}

module.exports = validatePlant;



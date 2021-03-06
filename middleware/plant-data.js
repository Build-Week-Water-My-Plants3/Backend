async function checkPlantData(req, res, next) {
 
  const { id } = req.params

  const plant = await Plants.myPlantId(id)

  if(!plant){
    res.status(404).json({ message: 'plant does not exist'})
  } else if (!plant.nickname || !plant.species || !plant.water_schedule){
    res.status(404).json({ message: 'Input missing data fields'})
  }
    next();
  }

  
  module.exports = checkPlantData;



const router = require('express').Router();
const Plants = require('../helpers/plants-model.js');
const restricted = require('../middleware/restricted.js');
const validatePlant = require('../middleware/plant-id.js');
const checkPlantData = require('../middleware/plant-data.js');


router.get('/', restricted, (req, res) => {
  Plants.find()
    .then(plants => {
      res.status(200).json(plants);
    })
    .catch(err => {
      res.status(500).json({ error: 'list of plants is not received' })
    })
})

router.get('/:id', restricted, validatePlant, (req, res) => {
  const id = req.params.id;

  Plants.myPlantId(id)
    .then(plants => {
      res.status(200).json(plants);
    })
    .catch(err => {
      res.status(500).json({ error: 'plant is not received' })
    })
})

router.put('/:id', restricted, validatePlant, checkPlantData, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const updatedPlant = { ...changes, id };

  Plants.update(id, changes)
    .then(editPlant => {
      console.log(editPlant);
      res.status(200).json(updatedPlant);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'could not change plant information' });
    })
})

router.delete('/:id', restricted, validatePlant, (req, res) => {
  const id = req.params.id;

  Plants.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: ` deleted plant was success` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'could not delete a plant' });
    })
})

module.exports = router;
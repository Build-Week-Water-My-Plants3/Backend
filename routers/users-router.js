const router = require('express').Router();
const bc = require('bcryptjs');
const Users = require('../helpers/users-model.js');
const Plants = require('../helpers/plants-model.js');
const restricted = require('../middleware/restricted.js');
const validateUserId = require('../middleware/validate-user-id.js');
const checkForPlantData = require('../middleware/check-for-plant-data.js');


// GET a list of all users

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'users list not received' })
    })
})

router.get('/:id', restricted, validateUserId, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'user not received' })
    })
})

router.put('/:id', restricted, validateUserId, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const hash = bc.hashSync(changes.password, 8); 
  changes.password = hash;
  const updatedUser = { ...changes, id };

  Users.update(id, changes)
    .then(editUser => {
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'users could not be modified' });
    })
})

router.delete('/:id', restricted, validateUserId, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: `user was deleted from the database` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'user could not be deleted' });
    })
})

router.get('/:id/plants', restricted, validateUserId, (req, res) => {
  console.log(req.params.id);
  Plants.findPlantsByUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Could not get the list of plants for user' })
    })
})

router.post('/:id/plants', restricted, validateUserId, checkForPlantData, (req, res) => {
  const id = req.params.id;
  let plants = req.body;
  plants = { ...plants, user_id: id };

  Plants.add(plants)
    .then(newPlant => {
      res.status(201).json(newPlant);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Could not save the plant to the database' });
    })
})

module.exports = router;

const router = require('express').Router();
const bc = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const checkForUserData = require('../middleware/user-data.js');
const Users = require('../helpers/users-model.js');


router.post('/register', checkForUserData, (req, res) => {
  let credentials = req.body;
  const hash = bc.hashSync(credentials.password, 8); 
  credentials.password = hash;
  
  Users.add(credentials)
  .then(savedUser => {
      const token = generateToken(savedUser);
    
      res.status(201).json({ message: 'register success', savedUser, token })
  })
    .catch(error => {
      res.status(500).json(error.message);
    });
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bc.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: `Logged in! Welcome ${user.username}!`, user_id: user.id, token }); 

      } else {
        res.status(401).json({ message: 'The login credentials provided are invalid' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    })
})

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
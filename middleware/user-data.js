function checkUserData(req, res, next) {
  const newUser = req.body
   
    if(!newUser){
      res.status(404).json({ message: 'user does not exist'}) 
    } else {
      next();
    }
  }
  
  module.exports = checkUserData;
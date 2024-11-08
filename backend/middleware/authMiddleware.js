const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const authenticateUser = async (req, res, next) => {

   let token = req.cookies.jwt; // Récupère le token depuis le cookie

   if (token) {
      try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = await UserModel.findById(decoded.userId).select('-password'); // Exclut le mot de passe
         next();
      } catch (error) {
         console.error(error);
         res.status(403).json({ error: 'Invalid token' });
      }
   } else {
      res.status(401).json({ error: 'Not authenticated' });
   }
};

module.exports = authenticateUser;
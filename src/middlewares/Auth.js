const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401).json({message: 'No token, authorization denied'});
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.sendStatus(401).json({message: 'Token is not valid'});
    }
};

function admin(req, res, next) {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
  next();
}
module.exports = {auth};
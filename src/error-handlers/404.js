'use strict';


module.exports = (req, res, next) => {
  res.status(404).json({msg: '404 not found'});
  next();
}
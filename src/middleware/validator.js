'use strict';

const validateName = (req, res, next) => {
  if (req.query.name == 'string') {
    next();
  }else{
    next('Not what I meant by name')
  }
}

module.exports = validateName;
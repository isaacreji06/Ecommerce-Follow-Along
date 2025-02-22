const jwt = require('jsonwebtoken');
if (process.env.NODE !== 'PRODUCTION') {
  require('dotenv').config({
    path: '../config/.env',
  });
}

const verifyUser = (err, req, res, next) => {
  if (req.body.token) {
    return res.status(404).send({ message: 'Send token over rqeuest' });
  }

  const data = jwt.verify(req.body.token, process.env.SECRET_KEY);
  req.userEmailAddress = data.email;
  req.UserId=data.id
  //   req.body.userEmailAddress
  next();
};

module.exports = verifyUser;
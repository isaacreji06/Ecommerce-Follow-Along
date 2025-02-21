const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'isaacreji2006@gmail.com',
    pass: 'vifv sles fuok vhig',
  },
});

module.exports = transporter;
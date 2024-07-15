// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// require('dotenv').config();

// exports.register = async (req, res) => {
//   const { username, email, password } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   try {
//     const user = await User.create({ username, email, password: hashedPassword });
//     res.send({ user: user._id });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// };
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ where: { email } });
//   if (!user) return res.status(400).send('Email or password is wrong');
//   const validPass = await bcrypt.compare(password, user.password);
//   if (!validPass) return res.status(400).send('Invalid password');
//   const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
//   res.header('Authorization', token).send(token);
// };




// controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, mobileNumber, numberOfProperties, location, password } = req.body;
  if (!name || !email || !mobileNumber || !numberOfProperties || !location || !password) {
    return res.status(400).json({ error: 'Please fill all the required fields.' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      mobileNumber,
      numberOfProperties,
      location,
      password: hashedPassword
    });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'User creation failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).send('Email or password is wrong');
  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');
  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
  res.header('Authorization', token).send(token);
};

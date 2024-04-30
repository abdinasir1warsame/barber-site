const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = 'kasdjldjksdjsajdlasdjasdj';
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: 'http://192.168.182.1:000',
  })
);

mongoose.connect(process.env.MONGO_URL);
// app.get('/test', (req, res) => {
//   res.json('test ok');
// });
app.post('/signUp', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json({ userDoc });
  } catch (e) {
    res.status(422).json(e);
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        { expiresIn: '7d' },
        (err, token) => {
          if (err) throw err;
          res
            .cookie('token', token, {
              httpOnly: true, // Ensures the cookie is only accessible via HTTP requests
              maxAge: 7 * 24 * 60 * 60 * 1000, // Expiration time in milliseconds (7 days)
            })
            .json(userDoc);
        }
      );
    } else {
      res.status(422).json('pass not ok');
    }
  } else {
    res.json('not found');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  res.json({ token });
});
app.listen(process.env.PORT);
module.exports = app;

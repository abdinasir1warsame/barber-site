const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Booking = require('./models/booking');
require('dotenv').config();

const app = express();

const bcryptSalt = bcrypt.genSaltSync(12);
const jwtSecret = process.env.JWT_SECRET || 'dsfdsfdsfdsfsdf'; // Use environment variable for the JWT secret

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: 'https://barber-site-seven.vercel.app', // Ensure this matches your frontend URL
    methods: ['POST', 'GET'],
  })
);

// Use environment variable for MongoDB connection string
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/logout', (req, res) => {
  res.cookie('token', '', { maxAge: 0, httpOnly: true }).json(true);
});

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
        { expiresIn: '40m' }, // Token expires in 40 minutes
        (err, token) => {
          if (err) throw err;
          res
            .cookie('token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
              maxAge: 40 * 60 * 1000, // 40 minutes
            })
            .json(userDoc);
        }
      );
    } else {
      res.status(422).json('Password incorrect');
    }
  } else {
    res.status(404).json('User not found');
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post('/bookings', async (req, res) => {
  const { date, time, service, barberName } = req.body;
  try {
    const decodedToken = jwt.verify(req.cookies.token, jwtSecret);
    const userEmail = decodedToken.email;

    // Look up the user by email to get the name
    const user = await User.findOne({ email: userEmail });
    const userName = user ? user.name : null;

    const booking = await Booking.create({
      date,
      time,
      service,
      barberName,
      userName,
      userEmail,
    });
    res.json(booking);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

app.get('/bookings', async (req, res) => {
  try {
    // Verify the JWT token and extract the user information
    const decodedToken = jwt.verify(req.cookies.token, jwtSecret);
    const userEmail = decodedToken.email;

    // Find bookings that belong to the authenticated user
    const bookings = await Booking.find({ userEmail });
    res.json(bookings);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Export the app for Vercel deployment
module.exports = app;

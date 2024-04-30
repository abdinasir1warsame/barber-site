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
const jwtSecret = 'your_jwt_secret_here'; // Replace with a strong random secret
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,

    origin: 'https://barber-site-seven.vercel.app',
    methods: ['POST', 'GET'],
  })
);

mongoose.connect(
  'mongodb+srv://awarsame1993:F5nkwbTFHhRP1sc2@cluster0.f9mvien.mongodb.net/barber-app'
);

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
app.options('/profile', (req, res) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://barber-site-seven.vercel.app'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(204); // No content
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
              httpOnly: true,
              maxAge: 7 * 24 * 60 * 60 * 1000,
              sameSite: 'None', // Set sameSite to "None"
              secure: true,
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

// Protected route using JWT
app.get('/profile', (req, res) => {
  // Check for the presence of token in cookies
  const { token } = req.cookies;
  if (token) {
    // If token exists, verify it
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) {
        console.error(err); // Log any errors
        return res.status(401).json({ message: 'Unauthorized' });
      } else {
        const messages = ['Hello!', 'Welcome!', 'How are you today?'];
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        res.json({ message: randomMessage });
      }
    });
  } else {
    // If no token is found, send an appropriate response (e.g., unauthorized)
    res.status(401).json({ message: 'Unauthorized' });
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

    Booking.create({ date, time, service, barberName, userName, userEmail })
      .then((doc) => {
        res.json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});
// Define all your route handlers and middleware here

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('/', (req, res) => {
  res.send('Server connection successful!');
});

app.listen(4000);

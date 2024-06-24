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
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_here'; // Use environment variables for secrets
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'https://barber-site-seven.vercel.app', // Frontend domain
    methods: ['GET', 'POST'],
    credentials: true, // Allow cookies to be sent with requests
  })
);

mongoose.connect(
  process.env.MONGO_URI ||
    'mongodb+srv://awarsame1993:F5nkwbTFHhRP1sc2@cluster0.f9mvien.mongodb.net/barber-app'
);

app.post('/logout', (req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 0, // Clear the cookie
    })
    .json(true);
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
        { expiresIn: '1h' }, // Token expires in 1 hour
        (err, token) => {
          if (err) throw err;
          res
            .cookie('token', token, {
              httpOnly: true,
              secure: true, // Set to true if using HTTPS
              sameSite: 'None', // Necessary for cross-site cookies
              maxAge: 3600000, // 1 hour in milliseconds
            })
            .json(userDoc);
        }
      );
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } else {
    res.status(422).json({ message: 'User not found' });
  }
});

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
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
app.get('/', (req, res) => {
  res.send('Server connection successful!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  barberName: { type: String, required: true },
  service: {
    name: { type: String, required: true },
    price: { type: String, required: true },
  },
  date: { type: String, required: true },
  time: { type: String, required: true },

  // Include fields for user's name and email
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;

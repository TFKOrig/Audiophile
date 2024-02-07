const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  paymentmethod: {
    type: String,
    required: true,
  },
  emoneynumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  emoney: {
    type: String,
    required: true,
  },
  cashondelivery: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Customer', billingSchema);

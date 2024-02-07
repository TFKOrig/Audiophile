const express = require('express');
const router = express.Router();
const Billing = require('../models/billing');

// Get all billings
router.get('/', async (req, res) => {
  try {
    const billings = await Billing.find();
    res.json(billings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific billing
router.get('/:id', getbilling, (req, res) => {
  res.json(res.billing);
});

// Create a new billing
router.post('/', async (req, res) => {
    // console.log(req.body)
  const billing = new Billing({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    zip: req.body.zip,
    country: req.body.country,
    paymentmethod: req.body.paymentmethod,
    emoneynumber: req.body.emoneynumber,
    email: req.body.email,
    city: req.body.city,
    emoney: req.body.emoney,
    cashondelivery: req.body.cashondelivery
  });

  try {
    const newbilling = await billing.save();
    res.status(201).json(newbilling);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an billing
router.patch('/:id', async (req, res) => {
  try {
    const updatedbilling = await billing.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        duration: req.body.duration,
        difficulty: req.body.difficulty,
        imageUrl: req.body.imageUrl,
      },
      { new: true }
    );

    res.json(updatedbilling);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Delete an billing
router.delete('/:id', async (req, res) => {
  try {
    const deletedbilling = await Billing.findByIdAndDelete(req.params.id);
    if (!deletedbilling) {
      return res.status(404).json({ message: 'billing not found' });
    }
    res.json({ message: 'billing deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get an billing by ID
async function getbilling(req, res, next) {
  try {
    const billing = await billing.findById(req.params.id);
    if (billing == null) {
      return res.status(404).json({ message: 'billing not found' });
    }
    res.billing = billing;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// ... (Previous code remains unchanged)

// Get a specific billing
router.get('/:id', getbilling, (req, res) => {
  res.json(res.billing);
});

// ... (Remaining CRUD operations remain unchanged)


module.exports = router;

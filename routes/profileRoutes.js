const express = require('express');
const Profile = require('../models/profile');
const validate = require('../validation/profile');

const router = express.Router();

router.post('/', async (req, res) => {
  // Validate request body
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const newProfile = new Profile({
    email: req.body.email,
    name: req.body.name,
    occupation: req.body.occupation,
    // Other profile fields
  });

  try {
    // Save the new profile
    const savedProfile = await newProfile.save();
    res.status(200).json(savedProfile);
  } catch (error) {
    res.status(500).json({ error: 'Error saving profile' });
  }
});

module.exports = router;
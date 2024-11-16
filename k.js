const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Setup Express
const app = express();
app.use(bodyParser.json()); // to parse JSON bodies

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/your-database', { useNewUrlParser: true, useUnifiedTopology: true });

// Your user schema (simplified)
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  gender: String,
  dob: String,
  educationLevel: String,
  fieldOfStudy: String,
  professionalTitle: String,
  howDidYouKnow: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);


// POST route for registration
app.post('/register', async (req, res) => {
  try {
    const { name, email, phone, address, gender, dob, educationLevel, fieldOfStudy, professionalTitle, howDidYouKnow } = req.body;

    // Check if all required fields are present
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Create a new user and save to the database
    const newUser = new User({
      name,
      email,
      phone,
      address,
      gender,
      dob,
      educationLevel,
      fieldOfStudy,
      professionalTitle,
      howDidYouKnow
    });

    await newUser.save();

   
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

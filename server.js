// server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const port = 3000;


app.use(cors());

// Middleware to parse JSON in the request body
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://sanjaikumar5961:Sanjaykumar123@cluster0.uqvp1vt.mongodb.net/Testdatabase",{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const userschema = new mongoose.Schema({
  email: String,
  password: String,
},{collection : 'credentials'})
const User = mongoose.model("User", userschema); 
app.post("/Registration", async function (req, res) {
  console.log(req.body.email);
  const user = new User({
      email: req.body.email,
      password: req.body.password,
  });
  try {
      await user.save();
      res.status(200).json({success: true, message: "Registered Successfully"});
  } catch (err) {
      throw err;
  }
});
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const email = username;
  try {
    const user = await User.findOne({ email });
    console.log(email,user, req.body)
    if (!user) {
      return res.status(404).json({message : 'User not found'});
    }
    if (user.password !== password) {
        return res.status(401).json({message : 'Incorrect password'});
    }
    res.status(200).json({message : 'Login successful'});
  } catch (error) {
    res.status(500).json({message : 'Internal Server Error'});
  }
});

 


// app.post('/signin', (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     // Set the user in the session
//     req.session.user = user;

//     // Successful login
//     res.json({ success: true, message: 'Login successful' });
//   } else {
//     // Invalid credentials
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

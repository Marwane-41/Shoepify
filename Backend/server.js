const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, '../Frontend')));


// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/Login.jsx'));
});


//app.get('/', (req, res) => {
  
//});

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/Login.html'));
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // For testing purposes

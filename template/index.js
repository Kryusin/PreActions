// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  module.exports = { app, server }; // サーバーをエクスポート
} else {
  module.exports = { app };
}

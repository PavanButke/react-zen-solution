const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const itemsFilePath = path.join(__dirname, 'items.json');
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.get('/api/items', (req, res) => {
  fs.readFile(itemsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading items.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const items = JSON.parse(data);
    res.json(items);
  });
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

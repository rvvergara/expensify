const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(8000, () => console.log('Server started'));

const express = require('express');
const app = express();
const port = process.env.PORT || 3010;
const cors = require('cors');
const path = require('path');
const corsOptions = {
  origin: 'https://vitejs-vite-7z45ca--3000.local.webcontainer.io',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
// app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  const test = [{ name: 'John', age: 33 }];

  res.json(test);
});

app.listen(port);

const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

// HOME
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
// Routes
const { dbSeeder, employees } = require('./routes');

app.use('/seed_db', dbSeeder);
app.use('/employees', employees);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

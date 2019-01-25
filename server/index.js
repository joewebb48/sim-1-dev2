const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
require('dotenv').config();

const ctrl = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbResponse => {
    app.set('db', dbResponse);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.addProduct);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`knock knock... whoses there? Port ${PORT}`);
});

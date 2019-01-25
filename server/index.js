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
app.delete(`/api/product/:id`, ctrl.deleteProduct);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => {
  console.log(`knock knock... whoses there? Port ${SERVER_PORT}`);
});

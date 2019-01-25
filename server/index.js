const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING)
  .then(dbResponse => {
    app.set('db', dbResponse);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.json());

// cont port = 5555
app.listen(5555, () => {
  console.log(`knock knock... whoses there? Port 5555`);
});

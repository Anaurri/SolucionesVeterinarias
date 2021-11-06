const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
require('./config/db.config');
const router = require('./config/routes.config')
const app = express();



/** Configure routes */

app.use('/api', router);

  
const port = Number(process.env.PORT || 3001);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Ready! Listen on port ${port}`);
  })
}

module.exports = app

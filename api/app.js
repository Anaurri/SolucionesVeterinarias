const express = require('express');

const app = express();



/** Configure routes */

//const router = require('./config/routes.config')//
//app.use('/api', router);

  
const port = Number(process.env.PORT || 3001);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Ready! Listen on port ${port}`);
  })
}

module.exports = app

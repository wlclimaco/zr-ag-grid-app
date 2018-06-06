const express = require('express');
//just sets up the google+(oAuth2.0) passport strategy
require('./services/passport'); 

const app = express();

//immediately call the function that is returned from authRoutes.js
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
require('./services/passport');

const app = express();

//immediately call the function that is returned from authRoutes.js
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

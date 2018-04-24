let path = require('path');
let express = require('express');
let mainRouter = require('./mainRoutes');
let app = express();

app.use('/', mainRouter);
app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");

//This is a s imple commit test

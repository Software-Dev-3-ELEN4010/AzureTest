let path = require('path');
let express = require('express');
let mainRouter = require('./mainRoutes');
let app = express();


// mainRouter.get('/', function (req, res) {
//     res.send('Hello World');
// });

// mainRouter.get('/about', function(req, res) {
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });

app.use('/', mainRouter);
app.listen(3000);
console.log("Express server running on port 3000");


// let app = express();

// app.get('/', function (req, res){
//     res.send('Hello World');
// });

// app.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });

// app.listen(3000);
// console.log("Express server running on port 3000");
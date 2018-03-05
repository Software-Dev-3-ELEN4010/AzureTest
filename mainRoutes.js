let path = require('path');
let express = require('express');
// let app = express();
let mainRouter = express.Router();

mainRouter.get('/', function (req, res) {
    res.send('Hello World, I\'m Node.js');
});

mainRouter.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

module.exports = mainRouter;

// app.use('/', mainRouter);
// app.listen(3000);
// console.log("Express server running on port 3000");
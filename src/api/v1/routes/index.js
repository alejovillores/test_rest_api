var express = require('express');
var globalMiddleware = require('../middlewares/global.js');
var specificMiddleware = require('../middlewares/specific.js');

var router = express.Router();

router.use(globalMiddleware);

// define the home page route
router.get('/', function (req, res) {
	res.send('Cats home page');
});

// define the about route
router.get('/about', function (req, res) {
	res.send('About cats');
});

// define the about route
router.get('/specific', specificMiddleware, function (req, res) {
	res.send('Specific ');
});

module.exports = router;

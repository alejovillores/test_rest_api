var express = require('express');
var parser = require('body-parser');

var specificMiddleware = require('../middlewares/specific.js');
var BirdController = require('../../../controllers/birds.js');

var router = express.Router();
var jsonParser = parser.json();

// define the home page route
router.get('/', function (req, res) {
	res.send('Birds home page');
});

router.post('/birds', jsonParser, function (req, res) {
	const bird = req.body;
	var birdController = new BirdController();
	var response = birdController.createBird(bird);

	res.status(201);
	res.send(response);
});

// define the about route
router.get('/about', specificMiddleware, function (req, res) {
	res.send('About birds');
});

module.exports = router;

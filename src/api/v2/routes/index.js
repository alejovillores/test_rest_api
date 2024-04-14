var express = require('express');
var parser = require('body-parser');
const { validationResult } = require('express-validator');

var specificMiddleware = require('../middlewares/specific.js');
var BirdController = require('../../../controllers/birds.js');
var birdsSchemaValidationChain = require('../middlewares/birds_validation.js');

var router = express.Router();
var jsonParser = parser.json();

// define the home page route
router.get('/', function (req, res) {
	res.send('Birds home page');
});

router.post(
	'/birds',
	jsonParser,
	birdsSchemaValidationChain,
	function (req, res) {
		var result = validationResult(req);
		console.log(result);
		if (result.isEmpty()) {
			var bird = req.body;
			var birdController = new BirdController();
			var response = birdController.createBird(bird);

			res.status(201);
			res.send(response);
		}
		res.status(422);
		res.send(result.errors);
	}
);

// define the about route
router.get('/about', specificMiddleware, function (req, res) {
	res.send('About birds');
});

module.exports = router;

const { body } = require('express-validator');

const birdsSchemaValidationChain = [
	body('name')
		.exists({ checkFalsy: true })
		.withMessage('User name is required')
		.isString()
		.withMessage('User name should be string'),
	body('age')
		.exists()
		.withMessage('Age is required')
		.isDecimal()
		.withMessage('Age should be int'),
];

module.exports = birdsSchemaValidationChain;

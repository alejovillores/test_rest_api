const { v4: uuidv4 } = require('uuid');

class BirdController {
	constructor() {
		console.log('¡Hola desde la clase exportada!');
	}

	createBird(bird) {
		console.log('Bird created!');

		const response = {
			id: uuidv4(),
			name: bird.name,
			age: bird.age,
		};
		return response;
	}
}

module.exports = BirdController;

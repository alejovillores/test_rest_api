const express = require('express');

const catsRouter = require('./v1/routes/index.js');
const birdsRouter = require('./v2/routes/index.js');

const app = express();
const PORT = 3000;

app.use('/api/v1', catsRouter);
app.use('/api/v2', birdsRouter);

app.listen(PORT, (error) => {
	if (!error)
		console.log(
			'Server is Successfully Running, and App is listening on port ' + PORT
		);
	else console.log("Error occurred, server can't start", error);
});

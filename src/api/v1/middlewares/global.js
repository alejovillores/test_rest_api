var theGlobal = (req, res, next) => {
	console.log('Esta es un middleware global');
	next();
};

module.exports = theGlobal;

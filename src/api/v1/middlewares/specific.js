var theSpecific = (req, res, next) => {
	console.log('Esta es un middleware especifico a un METHOD');
	next();
};

module.exports = theSpecific;

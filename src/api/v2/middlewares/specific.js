var theSpecific = (req, res, next) => {
	console.log('Esta es un middleware especifico a un METHOD en v2');
	next();
};

module.exports = theSpecific;

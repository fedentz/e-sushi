/* const User = require('../database/models/Users');

function userLoggedMw(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.email;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMw; 
// 1:28:00 para editar el navbar y el avatar */
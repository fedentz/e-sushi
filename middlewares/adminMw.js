const User = require('../database/models/Users');
let db = require('../database/models')

async function adminMw(req, res, next) {
    res.locals.isLogged = false;
    res.locals.isAdmin = false;

    let emailInCookie = req.cookies.email;

    let userFromCookie

    if (emailInCookie) {
        userFromCookie = await db.User.findOne({
            where: {
                email: emailInCookie
            }
        });
    }

    if (userFromCookie) {
        req.session.usuarioLogueado = userFromCookie;
    }

    if (req.session && req.session.usuarioLogueado) {
    
        res.locals.isLogged = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado;

        if(req.session.usuarioLogueado.rol_id === 1){
            res.locals.isAdmin = true

            return res.redirect('/')
        }
    }

    next();
}

module.exports = adminMw;


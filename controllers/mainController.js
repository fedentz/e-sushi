
const controlador = {
    index: (req, res) => {
        res.render('index.ejs');
    },
    menu: (req, res) => {
        res.render("menu.ejs")
    },
    contacto: (req, res) => {
        res.render('contacto.ejs')
    },
    register: (req, res) => {
        res.render('register.ejs')
    },
    login: (req, res) => {
        res.render('login.ejs')
    },
    eventos: (req, res) => {
        res.render('eventos.ejs')
    },
    perfil: (req, res) => {
        res.render('perfil.ejs')
    }
};


module.exports = controlador;



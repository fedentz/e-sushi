const express = require('express');
const app = express();
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.use(express.static(publicPath));


/* const userLoggedMiddleware = require('./middlewares/userLoggedMw.js'); */

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

/* app.use(userLoggedMiddleware); */

app.use(cookies());

//Routes

const mainRoute = require('./routers/main.js');
const productRoute = require('./routers/product.js');
const userRoute = require('./routers/userRoutes.js');

//API routes
const userApi = require('./routers/api/userRoutesApi')
const productApi = require('./routers/api/productRoutesApi')

app.use('/', mainRoute);
app.use('/api/product', productApi)
app.use('/api/user', userApi)
app.use('/products', productRoute);
app.use('/user', userRoute);

//404
app.use((req, res, next) => {
    res.status(404).render("not-found");
})

app.listen(3030, () => {console.log('Corriendo el puerto 3030')});
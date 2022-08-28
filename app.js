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


const userLoggedMiddleware = require('./middlewares/userLoggedMw.js');

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

/* app.use(userLoggedMiddleware); */

app.use(cookies());


const mainRoute = require('./routers/main.js');
const productRoute = require('./routers/product.js');
const userRoute = require('./routers/userRoutes.js');

app.use('/', mainRoute);
app.use('/products', productRoute);
app.use('/user', userRoute);

app.listen(3030, () => console.log('Corriendo el puerto 3030'));
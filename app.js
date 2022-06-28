const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const mainRoute = require('./routers/main.js');
const productRoute = require('./routers/product.js');

app.set('view engine','ejs');
app.use(express.static(publicPath));


app.use('/', mainRoute);
app.use('/menu', mainRoute)
app.use('/login', mainRoute);
app.use('/register', mainRoute)
app.use('/eventos', mainRoute);
app.use('/carrito', mainRoute);

app.use('/producto', productRoute)

app.listen(3030, () => console.log('Corriendo el puerto 3030'));
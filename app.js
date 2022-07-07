const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const mainRoute = require('./routers/main.js');
const productRoute = require('./routers/product.js');
app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.use(express.static(publicPath));


app.use('/', mainRoute);
app.use('/products', productRoute);

app.listen(3030, () => console.log('Corriendo el puerto 3030'));
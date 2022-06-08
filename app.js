const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html')));
app.get('/carrito', (req, res) => res.sendFile(path.join(__dirname, './views/carrito.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html')));
app.get('/producto', (req, res) => res.sendFile(path.join(__dirname, './views/producto.html')));
app.get('/registro', (req, res) => res.sendFile(path.join(__dirname, './views/registro.html')));
app.listen(3030, () => console.log('Corriendo el puerto 3030'));
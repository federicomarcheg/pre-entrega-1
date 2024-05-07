const express = require('express');
const fs = require('fs');
const {v4: uuidv4} = require('uuid');

const app = express();
app.use(express.json());

const productsRouter = express.Router(); 
productsRouter.get('/', (req, res) => { 

});

productsRouter.get('/:pid', (req, res) => {

});

productsRouter.post('/', (req, res) => {

});

productsRouter.put('/:pid', (req, res) => {

});

productsRouter.delete('/:pid', (req, res) => {

});


const cartsRouter = express.router();

cartsRouter.post('/', (req, res) => {

});

cartsRouter.get('/:cid', (req, res) => {

});

cartsRouter.post('/:cid/product/:pid', (req, res) => {

});


app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});


const fs = require('fs');
const path = require('path');

const productsFilePath = 
path.join(__dirname, 'productos.json');

const cartsFilePath = path.join(__dirname, 'carrito.json');

function leerArchivoJSON(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('error al leer el archivo JSON:', error);
        return [];
    }
}


function escribirArchivoJSON(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
        console.log('datos escritos en el archivo JSON correctamente.');

    } catch (error) {
        console.error('error al escribir en el archivo JSON:', error)
    }
}

const productos = leerelArchivoJSON(productsFilePath);
console.log('productos:', productos)

const nuevosProductos = [
    {id: 1, cafetera: 'producto1', precio:5000},
    {id: 2, licuadora: 'producto2', precio:7500},
    {id: 3, heladera: 'producto3', precio:10000},
    {id: 4, microondas:'producto4', precio: 15000},


    
]
import express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('RUTA GET EN "/"');
})

app.get('/prueba', (req,res)=>{
    res.send('GET EN "/prueba"');
})
const PUERTO: number = 8080;

const server = app.listen(PUERTO, () => {
    console.log(`Servidor express typescript escuchando en http://localhost:${PUERTO}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});
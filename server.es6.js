const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS
    app.get('/', (req, res) => {
        res.send('RUTA GET EN "/"');
    })

    app.get('/prueba', (req,res)=>{
        res.send('GET EN "/prueba"');
    })


// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});

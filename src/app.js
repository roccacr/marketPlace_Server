const express = require('express');
const app = express();
const port = 7225

app.get('/', (request, response) => {
    response.send('Bienvenido a la página del Servidor App Rocca Market Place');
})

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto: ${port}`)
})
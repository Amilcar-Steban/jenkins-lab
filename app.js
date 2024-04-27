const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('¡Hola, me llamo Amilcar!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

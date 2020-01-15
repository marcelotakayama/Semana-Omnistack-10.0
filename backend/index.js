const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello Omnistack" });
});


app.listen(3333);

// Comentario teste para o commit 
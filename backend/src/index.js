const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ckcwb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// A partir daqui nao ta funcionando, deve ser a configuração do cors
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
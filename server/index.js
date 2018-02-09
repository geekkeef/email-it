const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT ||  5000;

// express tells node to listen to a specific port
app.listen(PORT);
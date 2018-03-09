const express = require('express'); // common js module = 'require'
const app = express();

app.get('/', (req, res) => {
    res.send({ geek: 'Keef' });
});

const PORT = process.env.PORT || 5000;

// express tells node to listen to a specific port
app.listen(PORT);
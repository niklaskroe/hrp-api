const express = require('express');
const app = express()
const PORT = 8080;

app.use(express.json());

app.get('/shopping-list', (req, res) => {
    res.status(200).send({
        id: 1,
        name: 'dm'
    })
});

app.listen(PORT, () => console.log(`Look on http://localhost:${PORT}`));
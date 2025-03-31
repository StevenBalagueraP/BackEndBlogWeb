const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
    res.send('Welcome'));
app.post('/', (req, res) =>
    res.send(`Hello ${req.body.name}!`));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

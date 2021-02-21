const express = require('express');


const app = express();


app.use('/expenses', require('./routes/routes'));

app.get('/', (req, res) => {
    res.send('Hello Numan');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App sterted at: http://localhost:${PORT}/`);
});
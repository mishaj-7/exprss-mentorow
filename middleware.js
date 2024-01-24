const express = require('express');
const app = express();
const PORT = 5004;
const { products } = require('./data');
const logger = require('./logger')
const autherize = require('./autherize');
const morgan = require('morgan');

app.use(morgan('tiny'))


app.get("/", (req, res) => {
    res.send("home");
    
});

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send("products")
})


app.listen(PORT, () => {
    console.log('serv start on port ' + PORT);
});
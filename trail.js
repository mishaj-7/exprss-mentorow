const express = require('express');
const app = express();
const { products } = require('./data')


app.get('/api/products/:productId', (req, res) => {
    console.log(productId);
    const { productId } = req.params;
    console.log(prId);
     console.log(req.params);
    const firstProduct = products.find((prd) => prd.id === Number(prId));
    //console.log(firstProduct);
    res.send(firstProduct);
})


app.listen(5001, () => {
    console.log('helo there its trail');
})
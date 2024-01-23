const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/', (req, res) => {
    res.send('<h1> thsis is home </h1> <a href = "/api/products">products</a>');

})

app.get('/api/products', (req, res) => {
    console.log(products);
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return {
            id,
            name,
            image,
        };
    });
    res.json(newProducts )
});

app.get('/api/products/:pid', (req, res) => {
    console.log(req.params);
    const firstProduct = products.find((prd) => prd.id === 1);
    res.json(firstProduct);
})

app.listen(5000, () => {
    console.log('server startd port 5k');
}); 

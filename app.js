const express = require('express');
const app = express();
const {products} = require('./data')


app.get('/', (req, res) => {
    res.send('<h1> thsis is home </h1> <a href = "/api/products">products</a>');

})

app.get('/api/products', (req, res) => {
    //console.log(products);
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

app.get('/api/products/:prId', (req, res) => {
    
    const { prId } = req.params;
     console.log(prId);
     console.log(req.params);
    const firstProduct = products.find((prd) => prd.id === Number(prId));
    // console.log(firstProduct);
    res.json(firstProduct);
})

app.get('/api/new/qurey', (req, res) => {

    console.log(req.query);

    const { search, limit } = req.query;
    let sortedprdct = [...products];
    
    if (search) {
        sortedprdct = sortedprdct.filter( (prd) => {
            return prd.name.startsWith(search)
        })
    }

    if (limit) {
        sortedprdct = sortedprdct.slice(0, Number(limit));
    }
    res.status(200).json(sortedprdct)
    console.log(sortedprdct);
})

app.listen(5000, () => {
    console.log('server startd port 5k');
}); 

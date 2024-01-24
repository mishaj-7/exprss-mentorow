const express = require('express');
const app = express();
const PORT = 5004;
const { people } = require('./data');
const morgan = require('morgan');

app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).json({ sucess: true, data:people})

})

app.post('/post/main', (req, res) => {
    //req.body = { name: "hai" }
    //console.log('heo');
    console.log(req.body);
    res.send('POST')
})


app.listen(PORT, () => {
    console.log('serv start on port ' + PORT);
});
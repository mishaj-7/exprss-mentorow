const express = require('express');
const app = express();
const PORT = 5001;
const { people } = require('./data');
const morgan = require('morgan');

app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).json({ sucess: true, data:people})

})

app.post('/post/main', (req, res) => {
    //req.body = { name: "hai" }
    //console.log('heo');
    const { password, Email, name } = req.body;
    if (!name) {
        return res
            .status(404)
            .json({ sucess: false, msg: 'you didnt give name' });
    } else {
        res.send(`sup  ${name}`)
    }
});

app.put('/put/main/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    //console.log(req.body);

    const person = people.find(prsn => prsn.id === Number(id));
    console.log(person);

    if (!person) {
        res
            .status(401)
            .json({sucess:false,msg:`no person with id no :${id}`})
    }

    const udpadatPeople = people.map((ppl) => {
         // console.log(N)

        if (ppl.id === Number(id)) {
            ppl.name = name;
        }
        
        return ppl;
         
    })

    console.log(udpadatPeople);
    
    res.status(200).json({ sucess: true, data:udpadatPeople })

});


app.listen(PORT, () => {
    console.log('serv start on port ' + PORT);
});
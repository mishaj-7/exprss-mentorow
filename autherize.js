const autherize = (req, res, next) => {
    const { password } = req.query;
     console.log(password);
    

    if (password === '9645' ) {
        req.user = { password: password, id: 1 }
        
        console.log(req.user);
        
    } else {
        res.status(401).send('invalid user');
    }
    next();
}

module.exports = autherize;
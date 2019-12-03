function cadastrar(req, res){
    res.send(`
    <ul>
        <li>${req.body.name}</li>
        <li>${req.body.phone}</li>
    </ul>`);
}

module.exports = cadastrar;
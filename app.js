const express = require('express');
const Datastore = require('nedb');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.listen(3000, () =>{
    console.log('listening at port 3000')
})

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (req, res) => {
    console.log("i got a req");
    console.log(req.body);
    database.insert(req.body)
    res.json({
        status: 'success',
        data: req.body
    })
})

app.post('/ape', (req, res) => {
    console.log('i got a post')
})
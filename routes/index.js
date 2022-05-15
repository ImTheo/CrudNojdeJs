const express = require('express');
const app = express.Router();

const model = require('../modelSchema/medicines')();

app.get('/', (req, res)=>{
    model.find({}, (err, medicines)=>{
        if(err){console.log(err);}

        res.render('vista', {
            titulo: 'Lista de medicinas',
            medicines: medicines
        });

    });
});

app.post('/add', (req, res)=>{
    let body = req.body;
    body.status = false;

    model.create(body, (err, medicines)=>{
        if(err){console.log(err);}
        res.redirect('/');
    });
});

app.get('/delete/:id', (req,res)=>{
    let id = req.params.id;
    model.remove({_id: id}, (err, medicines)=>{
        if(err){console.log(err);}
        res.redirect('/');
    });
});

module.exports = app;
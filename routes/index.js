const express = require('express');
const app = express.Router();

const model = require('../modelSchema/medicines')();

app.get('/', (req, res)=>{
    model.find({}, (err, medicines)=>{
        if(err){console.log(err);}

        res.render('index', {
            titulo: 'CRUD MongoDB',
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

app.get('/hecho/:id', (req,res)=>{
    let id = req.params.id;
    model.findById(id, (err, medicines)=>{
        if(err){console.log(err);}
        medicines.status=!medicines.status;

        medicines.save()
            .then(()=> res.redirect('/'))
    });
});

app.get('/eliminar/:id', (req,res)=>{
    let id = req.params.id;
    model.remove({_id: id}, (err, medicines)=>{
        if(err){console.log(err);}
        res.redirect('/');
    });
});

module.exports = app;
const express = require('express');
const app = express.Router();

const model = require('../modelSchema/tareas')();

app.get('/', (req, res)=>{
    model.find({}, (err, tareas)=>{
        if(err){console.log(err);}

        res.render('index', {
            titulo: 'CRUD MongoDB',
            tareas: tareas
        });

    });
});

app.post('/add', (req, res)=>{
    let body = req.body;
    body.status = false;

    model.create(body, (err, tareas)=>{
        if(err){console.log(err);}
        res.redirect('/');
    });
});

app.get('/hecho/:id', (req,res)=>{
    let id = req.params.id;
    model.findById(id, (err, tareas)=>{
        if(err){console.log(err);}
        tareas.status=!tareas.status;

        tareas.save()
            .then(()=> res.redirect('/'))
    });
});

app.get('/eliminar/:id', (req,res)=>{
    let id = req.params.id;
    model.remove({_id: id}, (err, tareas)=>{
        if(err){console.log(err);}
        res.redirect('/');
    });
});

module.exports = app;
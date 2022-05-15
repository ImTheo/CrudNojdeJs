module.exports = function(){
    var db = require('../connectionDb/db-connection')();
    var Schema = require('mongoose').Schema;

    var tareas = Schema({
        titulo: String,
        descripcion: String,
        status: Boolean
    });

    return db.model('tareas', tareas);

}

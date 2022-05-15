module.exports = function(){
    var db = require('../connectionDb/db-connection')();
    var Schema = require('mongoose').Schema;

    var medicines = Schema({
        indice: Number,
        nombreMedicina: String,
        precio: Number,
        farmaceutica: String,
        descripcionMedicina: String
        },{versionKey : false})

    return db.model('medicinas', medicines);

}

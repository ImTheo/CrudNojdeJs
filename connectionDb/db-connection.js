const mongoose = require('mongoose');

let db;

module.exports = function connection(){
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/MongoDbPharmacy', {
            useNewUrlParser: true
        });
    }

    return db;
}
var http = require('http')
const { create } = require('domain')
const { read } = require('fs')
const { default: mongoose, Schema, mongo } = require('mongoose')
const url = 'mongodb://localhost/DbMongod'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false,
    //useCreateIndex: true
})
.then(()=> console.log('Conected to mongo'))
.catch((e)=> console.log(e))

const medicineSchema = mongoose.Schema({
    //_id: String,
    indice: Number,
    nombreMedicina: String,
    precio: Number,
    farmaceutica: String
    },{versionKey : false})

const MedicineModel = mongoose.model('Medicinas',medicineSchema)

//create

const createTable = async ()=>{
    const medicine = new MedicineModel({
        indice:3,
        nombreMedicina: 'Mec3',
        precio: 13,
        farmaceutica: 'Naza'
    })
    const result = await medicine.save()
    console.log(result)
}

//Read
const readTable = async ()=>{
    const Medicines = await MedicineModel.find()
    console.log(Medicines)
    //return Medicines;
}
//update
const updateTable = async (id,newName)=>{
    const medicina = await MedicineModel.updateOne({_id:id},
    {
        $set:{
            nombreMedicina: newName
        }
    })
} 

//delete
const deleteTable = async(id)=>{
    const medicina = await MedicineModel.deleteOne({_id:id})
    console.log(medicina);
}

//createTable()
readTable()

//updateTable('62802eb23545a315b85bcb6e','UPDATED')
//deleteTable('628048ba93c0ae0cb4483eae')



  http.createServer(function (req, res) {
     res.writeHead(200, {'Content-Type': 'text/html'});
      res.writeHead('readTable()')
     res.end();
  }).listen(3000);

// var servidor = http.createServer(function (peticion, respuesta) {
//     respuesta.writeHead(200,{'Content-type':'text/html;UTF-8'})
//     respuesta.write('f', () => {
//         console.log('Write completed, do more writes now.');
//       });
//     console.log('peticion web')
//     respuesta.end();
// })

//servidor.listen(3000)
console.log('Ejecucion local de puerto 3000')


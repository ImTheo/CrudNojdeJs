const { Client } = require('pg')
const client = new Client()
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

var http = require('http')

var servidor = http.createServer(function(peticion, respuesta) {
    respuesta.writeHead(200,{'Content-type':'text/html;UTF-8'})
    respuesta.write('<h3>HOLA MUNDxdasdasdxO</h3>')
    console.log('peticion web')
    respuesta.end();
})

servidor.listen(3000)
console.log('Ejecucion local de puerto 3000')
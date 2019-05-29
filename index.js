/*Requiere instalar express
Se instala en el repositorio con:
	> npm i express
Abre el puerto 3000: localhost:3000
*/
const express = require('express')
const app = express()

//archivo de ejecución
const {inscribir, verInfoCurso, argv} = require('./datos.js');
let respuesta = "";

if(argv._[0]=='inscribir'){
	respuesta = inscribir(argv.id,argv.n,argv.c);
	console.log(respuesta);
}
else {
	verInfoCurso(1,0, function(mensaje){
		console.log(mensaje);
		respuesta = respuesta + mensaje;
	});
	verInfoCurso(2,0, function(mensaje){
		console.log(mensaje);
		respuesta = respuesta + '</br>' + mensaje;
	});
	verInfoCurso(3,0, function(mensaje){
		console.log(mensaje);
		respuesta = respuesta + '</br>' + mensaje;
	});
}

//Indica que se puede usar los archivos dentro de public
//app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.send(respuesta)
})
app.listen(3000)
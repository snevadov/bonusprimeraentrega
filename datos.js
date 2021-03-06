//Primera entrega.

// constante para manejo de archivos
const fs = require('fs');

//Defino los cursos
const cursos = [
	{
		id: 1,
		nombre: 'NodeJS',
		duracion: '36',
		valor: 0
	},
	{
		id: 2,
		nombre: 'Inglés',
		duracion: '48',
		valor: 150000
	},
	{
		id: 3,
		nombre: 'PHP',
		duracion: '60',
		valor: 250000
	}
];

// Defino las opciones para el curso
const opciones = {
	id:{
		demand : true,
	},
	nombre:{
		demand : true,
		alias: 'n'
	},
	cedula:{
		demand : true,
		alias: 'c'
	}
};

/*Defino la función para ver la información de un curso. Recibe id del curso y el retardo en segundos
 * @param id: indica el id del curso
 * @param time_out: cantidad de segundos que debe esperar antes de imprimirlo
 * @return void
*/
let verInfoCurso = (idCurso, time_out, callback) => {
	if(time_out > 0)
	{
		setTimeout(function(){
			let miCurso = buscarCurso(idCurso);
			let mensaje = 'El curso con ID ' + miCurso.id + ' de nombre ' + miCurso.nombre + ' tiene duración de ' + miCurso.duracion + ' horas y un valor de $' + miCurso.valor + '.';
			callback(mensaje);
		}, time_out*1000);
	}
	else
	{
		let miCurso = buscarCurso(idCurso);
		let mensaje = 'El curso con ID ' + miCurso.id + ' de nombre ' + miCurso.nombre + ' tiene duración de ' + miCurso.duracion + ' horas y un valor de $' + miCurso.valor + '.';
		return mensaje;
	}
};

/*Defino la función para buscar en el curso 
 * @param id: indica el id del curso
 * @return curso
*/
let buscarCurso = (idCurso) => {
	let miCurso = cursos.find(function(curso) {
			return curso.id == idCurso;
		});
	return miCurso;
};


/*Defino la función para inscribirse en el curso 
 * @param id: indica el id del curso
 * @param nombre: nombre de la persona a inscribir en el curso
 * @param cedula: cédula de la persona a inscribir en el curso
 * @return mensaje: string con el mensaje del resultado
*/
let inscribir = (idCurso, nombre, cedula) => {
	let miCurso = buscarCurso(idCurso);
	let mensaje = "";
	if (miCurso)
	{
		mensaje = 'La persona ' + nombre + ' con cédula ' + cedula + ' fue inscrita en el curso ' + miCurso.nombre + ' con ID ' + miCurso.id + ' con una duración de ' + miCurso.duracion + ' horas y un costo de $' + miCurso.valor;
	}
	else
	{
		mensaje = 'No se encuentra el curso con ID ' + idCurso + '</br>\n' + verInfoCurso(1, 0) + '</br>\n' + verInfoCurso(2, 0) + '</br>\n' + verInfoCurso(3, 0);
	}

	return mensaje;
};

// Manejo de yargs
const argv = require('yargs')
	.command('inscribir','Inscribirse en un curso', opciones)
	.argv;

// Permito exportación de las funciones y la constante
module.exports = {
	verInfoCurso,
	inscribir,
	argv
};
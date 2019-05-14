//archivo de ejecución
const {inscribir, verInfoCurso, argv} = require('./datos.js');

console.log(argv);
if(argv._[0]=='inscribir'){
	respuesta = inscribir(argv.id,argv.n,argv.c);
	console.log(respuesta);
}
else {
	verInfoCurso(1,2);
	verInfoCurso(2,4);
	verInfoCurso(3,6);
}
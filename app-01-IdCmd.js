// requerir el 'argv' de otro pck 'yargs-u'
// y con el valor recibido segun sea el comando
// elegir una opcion 

//const argv = require('yargs').argv;
const argv = require('./config/yargs-u').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear una tarea nueva');
        break;

    case 'listar':
        console.log('Listar las tarea por hacer');
        break;

    case 'actualizar':
        console.log('Actualizar una tarea existente');
        break;

    default:
        console.log('comando no es reconocido');

}
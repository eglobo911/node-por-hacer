// este pck recibe un comando y datos de la consola y se los 


// const argv = require('yargs').argv;
const argv = require('./config/yargs-u').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        //        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('--- Por Hacer ---'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('-----------------'.blue);
        }

        //console.log('Mostrar todas las tarea por hacer');
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        //console.log('Actualiza un elemento hecho');
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no es reconocido');

}
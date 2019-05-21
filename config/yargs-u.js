const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento nuevo', {
        descripcion
    })
    .command('actualizar', 'Actualizar un elemento existente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
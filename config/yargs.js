const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente la tarea'
    }

}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', opts)
    .command('actualizar', 'Actualiza la lista de tareas por hacer', opts)
    .command('borrar', 'Elimina una tarea de la base de datos', opts)
    .help()
    .argv;

module.exports = {
    argv
}
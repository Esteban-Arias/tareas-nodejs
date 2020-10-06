const fs = require('fs');


let listadoPorHacer = [];



const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];

    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return console.log('Tarea actualizada');
    } else {
        return console.log('Tarea no encontrada');
    }

}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === nuevoListado.length) {

        console.log('No se eliminó tarea, intente nuevamente');
        return false;

    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        console.log('Tarea eliminada');
        return true;
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo agregar', err)
    });
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
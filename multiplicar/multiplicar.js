const fs = require('fs');
var colors = require('colors');

const listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número.`.red);
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`La tabla de multiplicar del ${base} ha sido creada`.green);
            // console.log('The file has been saved!');
        });

    })
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}
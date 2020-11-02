const { argv } = require('./config/yargs');
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar'.yellow)
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log('Crear'.yellow);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//let base = '23';
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');



}
//console.log(argv);

//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*crearArchivo(base)
    .then(archivo => console.log(archivo))
    .catch(e => console.log(e));*/
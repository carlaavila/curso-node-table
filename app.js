const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));





const argv = require('yargs')
            .options('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicar'
            })
            .options('l',{
                alias:'listar',
                type: 'boolean',
                default: false,
                describe: 'Mostrar la tabla de multiplicar'
            })
            .options('h',{
                alias:'hasta',
                type: 'number',
                default: 10,
                describe: 'Este es el número hasta dónde quieres la tabla de multiplicar'
            })
            .check((argv, options) =>{
                if(isNaN(argv.base)){
                    throw new Error('El valor introducido no es un numero');
                }
                return true;
            })
            .argv;

module.exports = argv;
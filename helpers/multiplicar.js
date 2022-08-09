const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5 , listar = false, hasta = 10) => {

try {
    
    let salida = '';
    if(hasta){
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;    
           }
    }    

    if(listar){
        console.log("===========================".green);
        console.log(`       TABLA DEL ${base}`);
        console.log("===========================".green);
        
        console.log(salida);
    }    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return(`tabla-${base}.txt`);
} catch (error) {
    throw error;
}

   
}

module.exports = {
   crearArchivo
}


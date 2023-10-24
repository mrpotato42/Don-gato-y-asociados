const fs = require('fs');  // Módulo para trabajar con el sistema de archivos
const path = require('path');  // Módulo para trabajar con rutas de archivos
const { exec } = require('child_process');  // Módulo para ejecutar comandos en un shell

// Definimos la función que ejecutará los archivos .SIDE
function ejecutarArchivosSide(directorio) {
    // Leemos todos los archivos en el directorio especificado
    fs.readdirSync(directorio).forEach(archivo => {
        // Creamos la ruta completa al archivo
        let rutaCompleta = path.join(directorio, archivo);
        console.log(rutaCompleta);

        // Comprobamos si la ruta completa corresponde a un directorio
        if (fs.lstatSync(rutaCompleta).isDirectory()) {
            // Si es un directorio, llamamos a la función de manera recursiva
            ejecutarArchivosSide(rutaCompleta);
        } else if (rutaCompleta.endsWith('.side')) {
            // Si es un archivo .SIDE, lo ejecutamos con selenium-side-runner
            exec(`selenium-side-runner "${rutaCompleta}" `, (error, stdout, stderr) => {
                // Manejamos los posibles errores durante la ejecución
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                // Imprimimos la salida estándar del comando
                console.log(`stdout: ${stdout}`);
            });
        }
    });}

// Llamamos a la función con la ruta al directorio donde se encuentran los archivos .SIDE
ejecutarArchivosSide('./src/tests');

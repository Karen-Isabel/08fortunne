// var fs = require('fs'),
//     mime = require('mime'),
//     path = require('path'),
//     config = require('../config/config.js');
 

// exports.serve = function(url, res){
//     var urlPath = path.resolve(config.STATIC_PATH + url);
//     console.log(`Recurso solicitado: ${urlPath}`);
    
//     //Consultar si el archivo existe
//     fs.exists(urlPath, function(exists){
//         if(!exists){
//             //No existe
//             console.log(`El archivo ${urlPath} no existe`);
//             res.writeHead(404, {
//                 "Content-Type":"text/html"
//             });
//             res.end('<h1>Error 404: Not found...</h1>');
//         }else{
//             //Si existe
//             //Declarar mime en una variable
//             var mimeType = mime.lookup(urlPath);
//             console.log(`>Mime detectado ${mimeType}`);
//             fs.readFile(urlPath, function(err, content){
//                 if(err){
//                     console.log(`Error al leer archivo ${err}`);
//                     //decidiendo el content type de la extension del archivo solicitado
//                     res.writeHead(500,{
//                         "Content-Type":"text/plain"
//                     });
//                     res.end('Error 500: Internal Error...');
//                 }else{
//                     //Sirve el archivo
//                     res.writeHead(200,{
//                         "Content-Type": mimeType
//                     });
//                     console.log(`>Se sirve el archivo: ${urlPath}`);
//                     res.end(content);
//                 }
//             });
//         }
//     });
// };

var fs = require('fs'),
    mime = require('mime'),
    path = require('path'),
    config = require('../config/config.js');

exports.serve = function(url, res){
    var urlPath = path.resolve(config.STATIC_PATH + url);
    console.log(`Recurso solicitado: ${urlPath}`);
    
    //Consultar si el archivo existe
    fs.exists(urlPath, function(exists){
        if(!exists){
            //No existe
            console.log(`El archivo ${urlPath} no existe`);
            res.writeHead(404, {
                "Content-Type":"text/html"
            });
            res.end('<h1>Error 404: Not found...</h1>');
        }else{
            //Si existe
            //Declarar mime en una variable
            var mimeType = mime.lookup(urlPath);
            console.log(`>Mime detectado ${mimeType}`);
            fs.readFile(urlPath, function(err, content){
                if(err){
                    console.log(`Error al leer archivo ${err}`);
                    //decidiendo el content type de la extension del archivo solicitado
                    res.writeHead(500,{
                        "Content-Type":"text/plain"
                    });
                    res.end('Error 500: Internal Error...');
                }else{
                    //Sirve el archivo
                    res.writeHead(200,{
                        "Content-Type": mimeType
                    });
                    console.log(`>Se sirve el archivo: ${urlPath}`);
                    res.end(content);
                }
            });
        }
    });
};
//Cargando configuraciones
// var http = require('http');
// var config = require('./config/config.js');
// var PORT = config.PORT;
// var IP = config.IP;
// var fs = require('fs');
// var mime = require('mime');
// var path = require('path');
// var staticServer = require('./internals/static-server.js');
// var handlers = require('./internals/handlers.js');
// var fortune = require('./internals/fortune.js');





// //req       peticion
// //res       respuesta
// var server = http.createServer(function(req, res){
//      var url = req.url;
//     if(url == "/"){
//         url = '/index.html'
//     }

 


//     if(typeof(handlers[urlPath]) == 'function'){
//         handlers[urlPath](req, res);
//         console.log(`Handler detectado  ${handlers}`)
//     }else{
//         //Se llama al servidor static
//         staticServer.serve(urlPath, res);    
//     }
// });

// server.listen(PORT, IP, function(){
//     console.log(`> Server corriendo en http://${IP}:${PORT}...`);
// });


//Cargando configuraciones
var http = require('http');
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer = require('./internals/static-server.js');
var handlers = require('./internals/handlers.js');
var fortune = require('./internals/fortune.js');


//Para importar los colores
//Tema de colors....


//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var urlPath = req.url;
    if(urlPath == '/'){
        urlPath = ('/index.html');
    }
    if(typeof(handlers[urlPath]) === 'function'){
        handlers[urlPath](req, res);
        console.log(`Handler detectado  ${handlers}`)
    }else{
        //Se llama al servidor static
        staticServer.serve(urlPath, res);    
    }
});

server.listen(PORT, IP, function(){
    console.log(`>Server working @http://${IP}:${PORT}`);
});

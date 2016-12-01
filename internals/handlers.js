var mongo = require('mongodb');
var path = require('path'), 
    fs = require('fs'),
    fortune = require('./fortune.js');


//Creando manejadores
var _getAuthor = function(req, res){
    res.end(`Autor: Karen `);
};
// var _getFortune = function(req, res){

// //llamar a la base de datos
// mongo.connect('mongodb://localhost:27017/fortuna', function(err, db){

//   if (err) throw err
//   //llamar la coleccion
//   var frases = db.collection('frases');
//   //consultar todos las colecciones
//   var resultado = frases.find({});
  
//   resultado.toArray(function(err, frases){
//       //numero aleatorio
//       var seleccion =  Math.round(Math.random(0)* papers.length);
//        console.log("> se selecciono : " + seleccion);

//        //para convertir a string
//        var fortunepaper = JSON.stringify(papers[seleccion]);

//        db.close()
// //imprimir respuesta

// console.log("> La fortuna es: " + fortunepaper);
//                     // cb(fortunepaper);


//   });
// });
// }
var _getFortune = function(req, res){
     console.log(`Se solicita fortuna....`);
   // Forma no bloqueante
    fortune.getFortune(function(fortunePaperObj){
        //Configurar el encabezado
        res.writeHead(200, {
            "Content-Type":"application/json"
        });
        console.log(`Contestando:  ${fortunePaperObj}`);
        res.end(fortunePaperObj);
    });
}



//------>Objeto manejador
var handler = {};

//Registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
handler["/getacookie"] = _getFortune;

//Necesario exportar el objeto, para que el server lo lea
module.exports = handler;

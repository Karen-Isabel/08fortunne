
// var mongodb = require("mongodb");
// // 2. Cargo al cliente de driver
// var mongoClient = mongodb.MongoClient;

// module.exports = {
//     "getFortune" : function(cb){
//         // Conectando el cliente a la base de datos fortune
//         // var connectionString = 
//         mongoClient.connect("mongodb://127.0.0.1:27017/fortuna",
//         function(err, db){
//             if(err){
//                 console.log("> ERROR al conectarse a" +
//                 " la base de datos:"+
//                 " mongodb://127.0.0.1:27017/fortuna");
//                 var fortunePaper = {
//                     "mensaje":
//                     "en todo  tiempo ama el amigo"
//                 };
//                 // Convirtiendo el fortunePaper de objeto
//                 // a su version en string
//                 var respuesta = JSON.stringify(fortunePaper);
                
//                 // Ejecuto el callback (cb) pasandole
//                 // como parametro el fortunepaper string
//                 cb(respuesta);
//             }else{
//                 // Obtengo la coleccion con la que quiero trabajar
//                 var papersCollection = 
//                 db.collection("frases");
                
//                 // Consulto todos los documentos de mi coleccion
//                 var objetoRestultado = 
//                 papersCollection.find({});

//                 // Parseo el objeto resultado en un arreglo
//                 objetoRestultado.toArray(function(err, papers){
//                     // ARREGLO ALEATORIO
//                     var randomIndex = 
//                     Math.round(Math.random(0)* papers.length);
//                     console.log("> RandomIndex calculated: " + randomIndex);
//                     var fortunePaperResponse = 
//                     JSON.stringify(papers[randomIndex]);
//                     // Cerrar la conexion entre el cliente
//                     // y la base de datos
//                     db.close()
//                     // Invoco al cb pasandole como parametro
//                     // la respuesta
//                     console.log("> La fortuna es: " + fortunePaperResponse);
//                     cb(fortunePaperResponse);
//                 });
//             }
//         });
//     }
// };

// //Logica que obtiene un mensaje aleatorio
// // var fortunePapers = [
// //     "El que madruga dios le ayuda",
// //     "Dile a todos que si, mas no les digas cuando",
// //     "Si buscas resultados distintos no hagas siempre lo mismo",
// //     "Todo es posible si te lo propones",
// //     "Suerte es lo que sucede cuando la preparacion y la oportunidad se encuentran fucionadas"
// // ];
// // module.exports = {
// //     "getFortune": function (cb) {
// //         //Logica que obtiene un mensaje aleatorio

// //         var selector = Math.floor(Math.random() * (fortunePapers.length - 0)+0);
// //         var fortuneMessage = fortunePapers[selector];
// //         // Armando Objeto Respuesta
// //         // Convertir en cadena escrita el Objeto Json
// //         var fortunePaperObj = JSON.stringify({
// //             "mensaje": fortuneMessage
// //         });
// //         //Ejecutp el callback pasandole el parametro fortunePaper
// //         cb(fortunePaperObj);
// //     }

// // };


var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        //Logica que obtiene un mensaje aleatorio
        mongoClient.connect("mongodb://127.0.0.1:27017/fortuna",
        function(err, db){
            var frases = db.collection("frases");

            var consulta = frases.find({});

            consulta.toArray(function(err, data){

                var selector = Math.round(Math.random(0)* data.length);
                console.log("El numero de tu fortuna es: " + selector);
                // Armando Objeto Respuesta
                // Convertir en cadena escrita el Objeto Json
                var fortunePaperObj = JSON.stringify(data[selector]);
                // Cerrar mongo
                db.close();
                //Ejecutp el callback pasandole el parametro fortunePaper
                console.log("la fortuna es: " + fortunePaperObj);
                cb(fortunePaperObj);
            });
        });
    }
};
var fortuna =function saludar(){
    swal("Hola chaka...", "You clicked the button!", "success");
};

var funcionMensaje = function getFortuneFromServer(){
            //realizando una peticion de asincrona con ajax y asistida en jquery
            $.get("/getacookie","",function(data, status){
                //contenido del colback
                console.log('> status ' + status);
                //presentar el mensaje 
                swal(data.mensaje);
            },"json");
        }
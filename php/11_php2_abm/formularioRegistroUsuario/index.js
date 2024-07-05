
//-------------------------------------------------------------
//              MODAL  ON / OFF
//-------------------------------------------------------------

let modalOff = () =>{
    $("header").attr( "class", "On" );
    $("#secFromulario").attr( "class", "On" );
    $("footer").attr( "class", "On" );
    $("#contenedorModal").attr( "class", "modalOff");
}

let modalOn = (  )=> {
    $("#body").attr( "class", "Off" );
    $("header").attr( "class", "Off" );
    $("#secFromulario").attr( "class", "Off" );
    $("footer").attr( "class", "Off" );
    $("#contenedorModal").attr( "class", "modalOn");
}

$("#btnX").click( ()=>{
    modalOff();
})

//------------------------------------------------------
//   BOTONES FORMULARIO ALTA USUARIO
//------------------------------------------------------
$("#btnVolverInicio").click( () => {
    location.href="../index.php";
})

//------------------------------------------------------
//         FORMULARIO ALTA USUARIO
//------------------------------------------------------
$("#usuario").attr( "required",true);
$("#contrasenia").attr( "required",true);

$("#formRegistro").submit( ( e ) => {
    e.preventDefault();
    

    let formData = new FormData();
    formData.append("usuario", $("#usuario").val());
    formData.append("contrasenia", $("#contrasenia").val());

    modalOn()
    altaUsuario( formData );
});



//-------------------------------------------------------------
//           FUNCION ALTA USUARIO
//-------------------------------------------------------------
let altaUsuario = ( formData ) =>{

    $("#respuesta").html("PROCESANDO...");

    $.ajax({
        url: "altaUsuario.php",
        method: "post",
        data:  formData ,
        contentType: false,
        processData: false,

        success: (resultado, estado) => {
            $("#respuesta").empty();

            $("#respuesta").append($("<p></p>").append( estado )  );
            $("#respuesta").append($("<p></p>").append( resultado )  );
            console.log(resultado, estado);
            let resulOper = JSON.parse( resultado );

            if (resulOper['resultado'] == true) {

                $("#respuesta").append($("<p></p>").append( "Autenticación exitosa" )  );
                $("#respuesta").append( "<p></p>").append( resulOper['mensaje'] );

            } else {
                $("#respuesta").append($("<p></p>").append( "Autenticación fallida")  );
                $("#respuesta").append(  $("<p></p>").append( resulOper['mensaje'] )  );
            }
        },
    });


}



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

// let modalAltaUsuario = (  )=> {
//     modalOn();
//     let form = $("<form></form>").attr("method", "post");
//     form.attr("id", "formAltaUsuario");

//     //  div
//     let div = $("<div></div>").attr("class", "contenedores");
//     div.append( $("<label></label>").attr( "for", "usuario").text("Usuario") );
//     div.append( $("<input></input>").attr( "id", "usuario") );
//     form.append( div );

//     //  div2
//     let div2 =$("<div></div>").attr("class", "contenedores");
//     div2.append( $("<label></label>").attr( "for", "contrasenia").text("Contraseña") );
//     div2.append( $("<input></input>").attr( "id", "contrasenia") );
//     form.append( div2 );

//     //  input submit
//     let btnAltaUsuario = $("<input></input>");
//     btnAltaUsuario.attr("id", "btnAltaUsuario");
//     btnAltaUsuario.attr("type","submit" );
//     btnAltaUsuario.attr("value", "Enviar Usuario");
//     form.append( btnAltaUsuario );
    
//     // div3
//     let div3 = $("<div></div>").attr("class", "contenedorFormAltaUsuario" );
//     div3.append( form );

//     $("#respuesta").html( div3 );

// }


//-------------------------------------------------------------
//              BOTON FORMULARIO
//-------------------------------------------------------------


//-------------------------------------------------------------
//           SOLICITUD  AUTENTICACION
//-------------------------------------------------------------

let autenticarUsuario = ( formData ) =>{

    $("#respuesta").html("PROCESANDO...");

    $.ajax({
        url: "autenticacion.php",
        method: "post",
        data:  formData ,
        contentType: false,
        processData: false,

        success: (resultado, estado) => {
            $("#respuesta").empty();

            $("#respuesta").append($("<p></p>").append( estado )  );
            $("#respuesta").append($("<p></p>").append( resultado )  );
            console.log(resultado);
            let resulOper = JSON.parse( resultado );

            if (resulOper['resultado'] == true) {

                $("#respuesta").append($("<p></p>").append( "Autenticación exitosa" )  );
                $("#respuesta").append( "<p></p>").append( resulOper['mensaje'] );
                $("#respuesta").append( "<p></p>").append( "Sesion ID : " + resulOper['sesionId'] );
                $("#respuesta").append( "<p></p>").append( "Contador De Sesion : " + resulOper['contador'] );

                let btnIrSpa = $("<button>Ir a SPA</button>").click( ()=> {
                    location.href="./moduloSPA/index.php";
                });
                $("#btnRespuesta").append( btnIrSpa);

                let btnCerrarSesion = $("<button>Cerrar Sesion</button>").click( ()=> {
                    location.href="./cerrarSesion.php";
                });
                $("#btnRespuesta").append( btnCerrarSesion);


            } else {
                $("#respuesta").append($("<p></p>").append( "Autenticación fallida")  );
                $("#respuesta").append(  $("<p></p>").append( resulOper['mensaje'] )  );
                let btnCrearUsuario = $("<button>Registrarse</button>").click( ()=> {
                    location.href="./formularioRegistroUsuario/index.php";
                });
                btnCrearUsuario.attr("class", "btnRegistrarse");
                $("#respuesta").append( btnCrearUsuario);
            }
        },
        // ...
    });
};


//------------------------------------------------------
//              FORMULARIO SESION
//------------------------------------------------------
$("#usuario").attr( "required",true);
$("#contrasenia").attr( "required",true);

$("#formSesion").submit( ( e ) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("usuario", $("#usuario").val());
    formData.append("contrasenia", $("#contrasenia").val());

    modalOn()
    autenticarUsuario( formData );
});



//------------------------------------------------------
//   BOTONES FORMULARIO INICIO
//------------------------------------------------------
$("#btnNuevoUsuario").click( () => {
    location.href="./formularioRegistroUsuario/index.php";
})
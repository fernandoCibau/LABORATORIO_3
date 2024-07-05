
//-------------------------------------------------------------
//             VARIABLES
// //-------------------------------------------------------------
let listaTecnicos;

//-------------------------------------------------------------
//              FUNCIONES
//-------------------------------------------------------------


let cargaSelectEspecialidad = () =>{
    $("#idEspecialidad").append($("<option></option>").text( "ID ESPECIALIDAD" ) );
    $("#idEspecialidadAlta").append( $("<option></option>").text( "ID ESPECIALIDAD" ) );
    
    let APIURL = "especialidad.php";
    
    $.ajax({
        url: APIURL,
        method: 'GET',
        data: { especialidad: '' },

        success: ( resultado, estado )=>{

            alert(estado + resultado);
            let especialidad = JSON.parse( resultado );
            console.log( especialidad);

            especialidad.forEach( datos => {
                $("#idEspecialidad").append( $("<option></option>").text( datos["idEspecialidad"]) );
                $("#idEspecialidadAlta").append(  $("<option></option>").text( datos["idEspecialidad"]) );
            });

        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            $("tbody").html(`Estado : ${status}`);;
            $("tbody").html(`Error en la solicitud AJAX : ${error}`);
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
};

let cargarFormularioModal = ( tecnico ) =>{
    $("#nombreAlta").val( tecnico["nombre"] );
    $("#apellidoAlta").val( tecnico["apellido"] );
    $("#legajoAlta").val( tecnico["legajo"] );
    $("#fecNacAlta").val( tecnico["fechaIngreso"] );
    $("#especialidadAlta").val( tecnico["especialidad"] );
    $("#idEspecialidadAlta").val( tecnico["idEspecialidad"] );
    $("#descripcionAlta").val( tecnico["descripcion"] );
    // $("#archivoAlta").val( tecnico["binario"]  ); // NO FUNCIONA
}

let vaciarFormularioModal = ( tecnico ) =>{
    $("#nombreAlta").val( "" );
    $("#apellidoAlta").val( "" );
    $("#legajoAlta").val( "" );
    $("#fecNacAlta").val( "" );
    $("#especialidadAlta").val( "" );
    $("#idEspecialidadAlta").val( "" );
    $("#descripcionAlta").val( "" );
}

let cargarTodosLosTecnicos = ( metodo, orden, letra ) =>{

    $("tbody").html("PROCESANDO...");

    $.ajax({
        url:  "cargarTodos.php",
        method: metodo,
        data: {orden : orden , letra : letra },

        success: ( resultado, estado )=>{

            alert(estado + resultado);

            listaTecnicos = JSON.parse( resultado );

            if( Array.isArray(listaTecnicos) ){

                $("tbody").empty();

                // Recorrer los datos de los técnicos
                listaTecnicos.forEach(tecnico => {
                    const tr = $("<tr></tr>");
                
                    for (let dato in tecnico) {
                        if( dato != "binario" ){
                            tr.append($("<td class='td'></td>").text(tecnico[dato]));
                        }
                    }
                
                        let btnPdf = $("<button>FOTO</button>").click( ()=> {
                            console.log(tecnico["binario"]) ;
                            modalFoto();
                            $("#fotoPdf").empty();
                            $("#fotoPdf").append( " <img class='fotoPDF' src='data:img/jpeg;base64,"+ tecnico["binario"] + " ' ></img>" );
                        });
                        tr.append($("<td class='tdBtn'></td>").append( btnPdf ));
                        
                        let btnModificar = $("<button>MODI</button>").click(()=> {
                            // console.log( tecnico["nombre"]);
                            
                            $("#btnEnviarAlta").val("Modificar");
                            $("#formModal").attr( "name", "modificar" );
                            modalOn();
                            cargarFormularioModal( tecnico );

                            
                        });
                        tr.append($("<td class='tdBtn'></td>").append( btnModificar ));
                        
                        let btnEliminar = $("<button>ELIMINAR</button>").click( ()=>{
                            
                            modalOn();
                            cargarFormularioModal( tecnico );
                            
                            $("#btnEnviarAlta").val("Eliminar");

                        });
                        
                        tr.append($("<td class='tdBtn'></td>").append( btnEliminar ));
                    
                
                    $("tbody").append(tr);
                });

            }  
            else{
                $("tbody").html( listaTecnicos["mensaje"]);
            }

        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
}

let altaRegistro = ( tecnicoObjJson ) =>{
    // $("tbody").html("PROCESANDO...");

    $.ajax({
        url:  "altaRegistro.php",
        method: "post",
        // data: {alta : tecnicoObjJson  },
        data: tecnicoObjJson,
        contentType: false,
        processData: false,

        success: ( resultado, estado )=>{

            alert(estado + resultado);

        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
}

let modificarRegistro = ( tecnicoObjJson ) =>{
    // $("tbody").html("PROCESANDO...");

    $.ajax({
        url:  "modificar.php",
        method: "post",
        // data: {modificar : tecnicoObjJson  },
        data: tecnicoObjJson,
        contentType: false,
        processData: false,

        success: ( resultado, estado )=>{

            alert(estado + resultado);
        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
}

let eliminarRegistro = ( tecnicoObjJson ) =>{
    // $("tbody").html("PROCESANDO...");

    $.ajax({
        url:  "eliminar.php",
        method: "post",
        // data: {eliminar : tecnicoObjJson  },
        data: tecnicoObjJson,
        contentType: false,
        processData: false,

        success: ( resultado, estado )=>{

            alert(estado + resultado);
        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
}

let modalOff = () =>{
    // $("#contenedorBtnModal").attr( "class", "On" );
    $("header").attr( "class", "On" );
    $("#secArticulos").attr( "class", "On" );
    $("footer").attr( "class", "On" );
    $("#contenedorModal").attr( "class", "modalOff");
    

}

let modalOn = (  )=> {
    // $("#contenedorBtnModal").attr( "class", "Off" );
    $("header").attr( "class", "Off" );
    $("#secArticulos").attr( "class", "Off" );
    $("footer").attr( "class", "Off" );
    $("#contenedorModal").attr( "class", "modalOn");

    $("#formModal").attr( "class", "modalOn");
    $("#fotoPdf").attr( "class", "modalOff" );

    $("#nombreAlta").attr( "required",true);
    $("#fecNacAlta").attr( "required",true);
}

let modalFoto = (  )=> {
    // $("#contenedorBtnModal").attr( "class", "Off" );
    $("header").attr( "class", "Off" );
    $("#secArticulos").attr( "class", "Off" );
    $("footer").attr( "class", "Off" );
    $("#contenedorModal").attr( "class", "modalOn");

    $("#formModal").attr( "class", "modalOff")
    $("#fotoPdf").attr( "class", "modalOn contenedorImgModal")



    $("#nombreAlta").attr( "required",true);
    $("#fecNacAlta").attr( "required",true);
}

//-------------------------------------------------------------
//              CARGA INICIO 
// //-------------------------------------------------------------
$(document).ready( ()=>{
    cargaSelectEspecialidad();
});

//-------------------------------------------------------------
//              BOTONES HEADER
//-------------------------------------------------------------
$("#btnAlta").click( ()=>{
    $("#btnEnviarAlta").val( "Enviar Alta" );
    $("#formModal").attr( "name", "alta");
    vaciarFormularioModal();
    modalOn();
})

$("#vaciar").click( () => {
    $("tbody").empty();
})

$("#btnLimpiarF").click( ()=>{
    $("#codOrden").val("");
    $("#codOrden").attr("placeholder","Codigo Orden");
})

$("#btnCerrarSesion").click( () => {
    if( confirm("¿Estas Seguro De Continuar.?") ) location.href="../cerrarSesion.php";
})

//-------------------------------------------------------------
//              BOTONES TH
//-------------------------------------------------------------
$("#thLegajo").click( () => {
    $("#codOrden").val( $("#thLegajo").text() );
});

$("#thNombre").click( () => {
    $("#codOrden").val( $("#thNombre").text() );
});

$("#thApellido").click( () => {
    $("#codOrden").val( $("#thApellido").text() );
});

$("#thEspecialidad").click( () => {
    $("#codOrden").val( $("#thEspecialidad").text() );
});

$("#thFechaIngreso").click( () => {
    $("#codOrden").val( $("#thFechaIngreso").text() );
});

$("#thDescripcion").click( () => {
    $("#codOrden").val( $("#thDescripcion").text() );
});

$("#thIdEspecialidad").click( () => {
    $("#codOrden").val( $("#thIdEspecialidad").text() );
});


//-------------------------------------------------------------
//              MODAL  ON / OFF
//-------------------------------------------------------------

$("#btnModal").click( ()=>{
    modalOn();
})

$("#btnX").click( ()=>{
    modalOff();
})

//-------------------------------------------------------------
//              SELECT CODIGO ORDENAR
//-------------------------------------------------------------

$("#especialidad").click( ()=>{
    if( $("#especialidad").val() != "ID ESPECIALIDAD" ){
        $("#codOrden").val( $("#especialidad").val());
    }
})

//-------------------------------------------------------------
//            SWTCH  CARGA DE TECNICOS
//-------------------------------------------------------------

$("#btnCargarDatos").click( ()=>{

    let orden = $("#codOrden").val();

    switch ( orden ) {
        case "":
            cargarTodosLosTecnicos( "GET", "TODOS" );
            break
        case "legajo":
            cargarTodosLosTecnicos( "GET", orden );
            break;
        case "nombre":
            cargarTodosLosTecnicos( "GET", orden );
            break;
        case "apellido":
            cargarTodosLosTecnicos( "GET", orden );
            break;
        case "especialidad":
            cargarTodosLosTecnicos( "GET", "especialidad" );
            break;
        case "fecha Ingreso":
            cargarTodosLosTecnicos( "GET", "fechaIngreso" );
            break;
        case "descripcion":
            let letra = $("#descripcion").val();
            if ( letra != "descripcion" )
                cargarTodosLosTecnicos( "GET", "descripcion", letra );
            break;
        case "id Especialidad":
            let idEspecialidad  = $("#idEspecialidad").val();
            alert(idEspecialidad)

                cargarTodosLosTecnicos( "GET", "idEspecialidad", idEspecialidad );
            break;
        default:
            break;
    }
} )

//-------------------------------------------------------------
//              FORMULARIO MODAL
//-------------------------------------------------------------

$("#formModal").submit( e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("legajo", $("#legajoAlta").val());
    formData.append("nombre", $("#nombreAlta").val() );
    formData.append("apellido", $("#apellidoAlta").val() );
    formData.append("fechaIngreso", $("#fecNacAlta").val() );
    formData.append("especialidad", $("#especialidadAlta").val() );
    formData.append("idEspecialidad", $("#idEspecialidadAlta").val() );
    formData.append("descripcion", $("#descripcionAlta").val() );
    formData.append("imagen", $("#archivoAlta")[0].files[0] );

    // console.log( $("#archivoAlta")[0].files[0] )


    if( $("#btnEnviarAlta").val() == "Enviar Alta" ){
        altaRegistro( formData );
    }
    if( $("#btnEnviarAlta").val() == "Modificar"){
        modificarRegistro( formData );
    }
    if( $("#btnEnviarAlta").val() == "Eliminar"){
        eliminarRegistro( formData );
    }
});



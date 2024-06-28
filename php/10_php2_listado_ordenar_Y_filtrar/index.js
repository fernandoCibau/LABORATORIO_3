
//-------------------------------------------------------------
//              CARGA INICIO 
// //-------------------------------------------------------------
$(document).ready( ()=>{

    cargaSelectEspecialidad();
    cargaEspeciales();
});

//-------------------------------------------------------------
//              BOTONES TH
//-------------------------------------------------------------
$("#thLegajo").click( () => {
    $("#codOrden").val( $("#thLegajo").text() );
})

$("#thNombre").click( () => {
    $("#codOrden").val( $("#thNombre").text() );
})

$("#thApellido").click( () => {
    $("#codOrden").val( $("#thApellido").text() );
})

$("#thEspecialidad").click( () => {
    $("#codOrden").val( $("#thEspecialidad").text() );
})

$("#thFechaIngreso").click( () => {
    $("#codOrden").val( $("#thFechaIngreso").text() );
})

$("#thDescripcion").click( () => {
    $("#codOrden").val( $("#thDescripcion").text() );
})

$("#thIdEspecialidad").click( () => {
    $("#codOrden").val( $("#thEspecialidad").text() );
})


//-------------------------------------------------------------
//              SELECT CODIGO ORDER
//-------------------------------------------------------------

$("#especialidad").click( ()=>{
    if( $("#especialidad").val() != "ID ESPECIALIDAD" ){
        $("#codOrden").val( $("#especialidad").val());
    }
})


//-------------------------------------------------------------
//             INPUT TH  CODIGO ORDER
//-------------------------------------------------------------

$("#btnLimpiarF").click( ()=>{
    $("#codOrden").val("");
    $("#codOrden").attr("placeholder","Codigo Orden");
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
        case "CLIDOM":
            cargarTodosLosTecnicos( "GET", "CLIDOM" );
            break;
        case "ELEDOM":
            cargarTodosLosTecnicos( "GET", "ELEDOM" );
            break;
        case "legajo":
            cargarTodosLosTecnicos( "GET", "legajo" );
            break;
        case "nombre":
            cargarTodosLosTecnicos( "GET", "nombre" );
            break;
        case "apellido":
            cargarTodosLosTecnicos( "GET", "apellido" );
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

            alert(letra)
            break;
        case "id Especialidad":
            cargarTodosLosTecnicos( "GET", "idEspecialidad" );
            break;
        default:
            break;
    }
} )


//-------------------------------------------------------------
//              VACIAR TABLA
//-------------------------------------------------------------

$("#vaciar").click( () => {
    $("tbody").empty();
})

//-------------------------------------------------------------
//              FUNCIONES
//-------------------------------------------------------------

let cargaSelectEspecialidad = () =>{
    let opcion = $("<option></option>").text( "ID ESPECIALIDAD" );
    $("#especialidad").append(opcion);
    
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
                let opcion = $("<option></option>").text( datos["idEspecialidad"]);
                $("#especialidad").append(opcion);
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
}

let cargaEspeciales = () => {
    $("#descripcion").append(`<option value= descripcion id="descripcion" >  DESCRIPCION  </option>` );
    for (var i = 65; i <= 90; i++) {  // Códigos ASCII de A a Z
        let letra = String.fromCharCode(i);
        $("#descripcion").append(`<option value= ${letra} >  ${letra}  </option>` );
    }
}

(() =>{
    $("#fechaIngreso").append( `<option value="fechaIngreso" id="fechaIngreso" >FECHA INGRESO</option>`  );
})();

let cargarTodosLosTecnicos = ( metodo, orden, letra ) =>{
    $("tbody").html("PROCESANDO...");
    let APIURL = "cargarTodos.php";
    
    $.ajax({
        url: APIURL,
        method: metodo,
        data: {orden : orden , letra : letra },

        success: ( resultado, estado )=>{

            alert(estado + resultado);
            let tecnicos = JSON.parse( resultado );

            if( Array.isArray(tecnicos) ){
                $("tbody").empty();
                
                //CUERPO
                    tecnicos.forEach( tecnico => {
                        const tr = $( "<tr></tr>" );
                        for( dato in tecnico ){
                            const td = $("<td></td>");
                            // console.log(tecnico[dato])
                            td.text( tecnico[ dato ] );
                            tr.append( td );
                        }
                        $("tbody").append(tr);
                    });
            }  
            else{
                $("tbody").html( tecnicos["mensaje"]);
            }

        },
        error: function(xhr, status, error) {
            console.error('Error en la solicitud AJAX:', error);
            console.error('Estado :' , status );
            $("tbody").html(`Estado : ${status}`);;
            $("tbody").html(`Error en la solicitud AJAX : ${error}`);
            alert('Ocurrió un error al obtener los datos. Por favor, inténtalo nuevamente más tarde.');
        }
    })
}








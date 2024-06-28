
//-------------------------------------------------------------
//             VARIABLES
// //-------------------------------------------------------------
let listaTecnicos;

//-------------------------------------------------------------
//              FUNCIONES
//-------------------------------------------------------------
function crearBoton(texto, clase, id, nombre) {
    let boton = $("<button></button>");
    boton.text(texto);
    boton.addClass(clase);  
    boton.attr("name", nombre);
    if (id)   boton.attr('id', id);  
    if (name)   boton.attr('name', nombre); 
    return boton;
}

let cargaSelectEspecialidad = () =>{
    $("#especialidad").append($("<option></option>").text( "ID ESPECIALIDAD" ) );
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
                let opcion = $("<option></option>").text( datos["idEspecialidad"]);
                $("#especialidad").append( $("<option></option>").text( datos["idEspecialidad"]) );
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

                    // Recorrer cada propiedad (dato) del técnico                    
                    for (dato in tecnico) {
                        if( dato != "binario"){
                            tr.append(  $("<td></td>").text(tecnico[dato])  ); 
                        }
                        else{
                            tr.append( $("<td></td>").append( crearBoton("PDF", "btnPdf")    ))
                            tr.append( $("<td></td>").append( crearBoton("Modificar", "btnModi",  "btnModificar" ) ))
                            tr.append( $("<td></td>").append( crearBoton("Borrar", "btnBorrar", tecnico[dato], "btnBorrar" ) ))
                            
                        }
                    }

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

(() =>{
    $("#fechaIngreso").append( `<option value="fechaIngreso" id="fechaIngreso" >FECHA INGRESO</option>`  );
})();

let altaRegistro = ( tecnicoObjJson ) =>{
    // $("tbody").html("PROCESANDO...");

    $.ajax({
        url:  "altaRegistro.php",
        method: "post",
        data: {alta : tecnicoObjJson  },

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

// let cargaEspeciales = () => {
//     $("#descripcion").append(`<option value= descripcion id="descripcion" >  DESCRIPCION  </option>` );
//     for (var i = 65; i <= 90; i++) {  // Códigos ASCII de A a Z
//         let letra = String.fromCharCode(i);
//         $("#descripcion").append(`<option value= ${letra} >  ${letra}  </option>` );
//     }
// }


//-------------------------------------------------------------
//              CARGA INICIO 
// //-------------------------------------------------------------
$(document).ready( ()=>{

    cargaSelectEspecialidad();
    // cargaEspeciales();
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
//              BOTONES TD
//-------------------------------------------------------------
$(".btnPdf").click( ()=>{
    console.log("asdasd");
})

//-------------------------------------------------------------
//              MODAL  ON / OFF
//-------------------------------------------------------------

$("#btnModal").click( ()=>{
    $("#contenedorBtnModal").attr( "class", "Off" );
    $("header").attr( "class", "Off" );
    $("#secArticulos").attr( "class", "Off" );
    $("footer").attr( "class", "Off" );
    $("#contenedorModal").attr( "class", "modalOn");

    $("#nombre").attr( "required",true);
    $("#fecNac").attr( "required",true);
})

$("#btnX").click( ()=>{
    $("#contenedorBtnModal").attr( "class", "On" );
    $("header").attr( "class", "On" );
    $("#secArticulos").attr( "class", "On" );
    $("footer").attr( "class", "On" );
    $("#contenedorModal").attr( "class", "modalOff");
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
//             INPUT TH  CODIGO ORDEN
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
//              FORMULARIO MODAL
//-------------------------------------------------------------

$("#formAlta").submit( e => {
    e.preventDefault();

        
    let obj = {
        nombre: $("#nombreAlta").val(), 
        apellido: $("#apellidoAlta").val(),
        legajo: $("#legajoAlta").val(), 
        fecNac: $("#fecNacAlta").val(), 
        especialidad: $("#especialidadAlta").val(), 
        idEspecialidad: $("#idEspecialidadAlta").val(), 
        descripcion: $("#descripcionAlta").val(), 
        archivo: $("#archivoAlta").val()
    };
    let objJson = JSON.stringify(obj);
    alert(objJson)

    altaRegistro( objJson );
    


})




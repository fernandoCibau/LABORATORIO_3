

//-------------------------------------------------------------
//              MODAL
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
//              LISTA DE JUGADORES
//-------------------------------------------------------------

$("#cargar").click( ()=>{
    
    $.getJSON( "../listaDeJugadores.json", data =>{
        
        // console.log(data)

        let listaObj = data.jugadores;
        $("tbody").empty();
        listaObj.forEach( jugObj =>{
            const tr = $( "<tr/>" );
            let atributoJug = Object.values( jugObj );

            for (let i = 0;  i < atributoJug.length ; i++) {
                const td = $( "<td/>", {
                    text: Object.values( jugObj )[i]
                })
                tr.append(td);
            }
            $("tbody").append(tr);
        })
    })
})

$("#vaciar").click( () => {
    $("tbody").empty();
})


//-------------------------------------------------------------
//              FORMULARIO MODAL
//-------------------------------------------------------------

let json = `{
    "posiciones" : [
        { "arquero" : [  1 ,  12 ]  },
        { "defensor" : [  3 , 6, 2, 4 ]},
        { "medio" : [10, 5, 8 ] },
        { "delantero" : [7, 9, 11 ]}
    ]
}`

let nombre, fecNac, posicion, numCamiseta ;


let jsonObj =  JSON.parse(json);
let listaJugadores=[];
listaJugadores = JSON.stringify(listaJugadores);


//      POSICION DEL JUAGADOR
const opcion = $("<option/>", { text: "---", value: 0 } );
$("#selectPosicion").prepend(opcion);

for (let i = 0; i < jsonObj.posiciones.length; i++) {
    const opcion = $("<option/>", {
        text: `${Object.keys(jsonObj.posiciones[i])}`,
        value: `${Object.keys(jsonObj.posiciones[i])}`,
    })

    $("#selectPosicion").prepend(opcion);
}

// POSICION EN EL CAMPO
const posJugador = $("#selectPosicion");
posJugador.click(() => {
    // posicion = posJugador.val();
    $("#numCamiseta").empty();
    const opcion = $("<option/>", { text: "---", value: 0 } );
    $("#numCamiseta").prepend(opcion);
    
    switch( posJugador.val() ){

        case "arquero":
            jsonObj.posiciones.forEach( pos => { 
                if(Object.keys( pos ) == "arquero" ){ 
                    const objArquero = pos.arquero

                    objArquero.forEach( numCami =>{
                        const opcion = $("<option/>", {
                            text: `Camiseta : ${ numCami }`,
                            value: `${ numCami }`,
                        })
                            $("#numCamiseta").prepend(opcion);
                    } );
                }
            });
        break;
        
        case "defensor":
            jsonObj.posiciones.forEach( pos => { 
                if(Object.keys( pos ) == "defensor" ){ 
                    const objDefensor = pos.defensor
                    objDefensor.forEach( numCami =>{
                        const opcion = $("<option/>", {
                            text: `Camiseta : ${ numCami }`,
                            value: `${ numCami }`,
                        })
                            $("#numCamiseta").prepend(opcion);
                    } );
                }
            });
        break

        case "medio":
            jsonObj.posiciones.forEach( pos => { 
                if(Object.keys( pos ) == "medio" ){ 
                    const objMedio = pos.medio
                    objMedio.forEach( numCami =>{
                        const opcion = $("<option/>", {
                            text: `Camiseta : ${ numCami }`,
                            value: `${ numCami }`,
                        })
                            $("#numCamiseta").prepend(opcion);
                    } );
                }
            });
        break

        case "delantero":
            jsonObj.posiciones.forEach( pos => { 
                if(Object.keys( pos ) == "delantero" ){ 
                    const objDelantero = pos.delantero
                    objDelantero.forEach( numCami =>{
                        const opcion = $("<option/>", {
                            text: `Camiseta : ${ numCami }`,
                            value: numCami
                        })
                            $("#numCamiseta").prepend(opcion);
                    } );
                }
            });
        break
    }
});

//  VALIDACION FORM
$("#selectPosicion").click( ( () =>{
    posicion = $("#selectPosicion").val();
}))
$("#numCamiseta").click( ( () =>{
    numCamiseta = $("#numCamiseta").val();
}))

$("#formFichaje").submit( e => {
    e.preventDefault();
    
    nombre = $("#nombre").val();
    fecNac  = $("#fecNac").val();
    
    let nuevoJugador = {nombre: nombre, fecNac: fecNac, posicion: posicion, numCamiseta: numCamiseta}
    listaJugadores = JSON.parse(listaJugadores)
    listaJugadores.push(nuevoJugador);
    console.log(listaJugadores)
    listaJugadores =JSON.stringify(listaJugadores)
    console.log(listaJugadores)


    if(nombre != ""  && fecNac != ""){
        location.href = "../esp_01_formVariableArregloDeObjeto/validacion.html"
    }

})











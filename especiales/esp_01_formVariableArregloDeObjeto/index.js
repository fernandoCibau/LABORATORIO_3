
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
    
    // console.log(` ${nombre} - $${fecNac} - ${posicion} - ${numCamiseta}`)
    if( nombre == "" || fecNac == ""){   alert("LOS CAMPOS  NO PUEDEN QUEDAR VACIOS"); }
    
    let nuevoJugador = {nombre: nombre, fecNac: fecNac, posicion: posicion, numCamiseta: numCamiseta}
    listaJugadores = JSON.parse(listaJugadores)
    listaJugadores.push(nuevoJugador);
    console.log(listaJugadores)
    listaJugadores =JSON.stringify(listaJugadores)
    console.log(listaJugadores)


    if(nombre != ""  && fecNac != ""){
        location.href = "validacion.html"
    }

})








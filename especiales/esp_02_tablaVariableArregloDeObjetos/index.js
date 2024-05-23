



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


























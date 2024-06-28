

$("#Encriptar").click( e =>{
    let APIURL = "datos.php";
    let texto = $("#texto").val();
    
    let mensaje = ()=>{
        $("#resultado").html("PROCESANDO...");
    }

    mensaje();

        // setTimeout(  () =>{
            $.ajax({
                url: APIURL,
                type: "post",
                data: {"texto" : texto },
    
                success: ( resultado, resul )=>{
                    $("#resultado").html(resultado);
                    $("#estado").html( resul);
                }

            })
        // }
        // , 2000);

})



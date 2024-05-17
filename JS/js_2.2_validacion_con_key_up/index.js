


const dias = document.getElementById("dias");
const mes = document.getElementById("mes");
const borrar = document.getElementById("bBorrar");

dias.onkeyup = ()=>{
    if( dias.value <= 0 || dias.value > 31){
        dias.style.backgroundColor = "red";
        dias.value = "";
        return alert("LOS DIAS TIENEN QUE SER ENTRE 1 Y 31");
    } 
    if( dias.value > 0 || dias.value <= 31){
        dias.style.backgroundColor = "green";
    } 
}

mes.onkeyup = () =>{
    if( mes.value <= 0 || mes.value > 12){
        mes.style.backgroundColor = "red";
        mes.value = "";
        return alert("LOS MESES TIENEN QUE SER ENTRE 1 Y 12");
    }
    if( mes.value > 0 || mes.value <= 12){
        mes.style.backgroundColor = "green";
    } 
}

borrar.addEventListener("click", () =>{
    mes.value = "";
    dias.value = "";
    mes.style.backgroundColor = "white";
    dias.style.backgroundColor = "white";
})

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", e =>{
    e.preventDefault();
    if( dias.value == "" || mes.value == "")    return alert("LOS CAMPOS NO PUEDEN ENVIARSE  VACIOS");
    location.href = "./forValidado.html";
    });


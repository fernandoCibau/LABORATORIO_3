

const form = document.getElementById("form");
const ape    = document.getElementById("apellido");
const nom   = document.getElementById("nombre");
const saldo = document.getElementById("saldo");

const blanquear = document.getElementById("blanquear");
const alta = document.getElementById("alta");
const modi = document.getElementById("modificar");
const baja  = document.getElementById("baja");

blanquear.setAttribute("disabled", "true");
alta.setAttribute("disabled", "true");
modi.setAttribute("disabled", "true");
baja.setAttribute("disabled", "true");

ape.onkeyup = () =>{
    if( ape.value != "" ){
        blanquear.removeAttribute("disabled")
    }
}
saldo.onkeyup= ()=>{
    if( saldo.value < 100 && saldo.value > 0) {
        saldo.style.backgroundColor = "green";
        blanquear.setAttribute("disabled", false);
        return;
    }

    saldo.style.backgroundColor = "white";
}

form.onkeyup = ()=>{

    if (ape.value != "" && nom.value != ""  && saldo.value >0  ){
        blanquear.removeAttribute("disabled")
        alta.removeAttribute("disabled")
        modi.removeAttribute("disabled")
        baja.removeAttribute("disabled")
    }
}
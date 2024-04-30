

function juego(){

//MENSAJE BIENVENIDA
  let mensaje = prompt("Bienvenido al cuestionario sobre cosas randoms, escriba  random para empezar ").toLowerCase()
    if(mensaje=="random"){
        alert("perfecto.. Comenzemos..")
    }else(alert("ok vola de aca"))

//PREGUNTA UNO

  let preguntaUno
   do {
    preguntaUno = prompt("para empezar...¿Como se llama el manga, cual sus personajes.. pueden transformar en Super Sayayins").toLowerCase()
        if(preguntaUno === "dragon ball z"){
            alert("Correcto, Continuemos")
        }else{
            alert("incorrecto sigue intentando")
        }
    
   } while (preguntaUno !== "dragon ball z");

// PREGUNTA DOS
let preguntaDos
do {
    preguntaDos = prompt("¿que pais fue el ultimo  campeon del mundial de futboll masculino?").toLowerCase()
    if(preguntaDos === "argentina"){
        alert("Claro que sii che vamos la seleccion")
    }else{
        alert("no amigo, equivocadoo.. segui intentando")
    }

    
} while (preguntaDos !== "argentina");

let preguntaTres

do {
    preguntaTres = prompt("¿quien fue el ultimo presidente electo de argentina ?").toLowerCase()
    if (preguntaTres === "javier milei") {
        alert("Correcto!.. queda una ultima pregunta")
        
    } else {
        alert("incorrectooo, pista LE DICEN EL PELUCA, segui intentando")
        
    }
    
} while (preguntaTres !== "javier milei");

let preguntaCuatro

do {
    preguntaCuatro = prompt("¿Quien es el maximo ganador de balones de oro y mejor jugador de la historia ?").toLowerCase()
    if (preguntaCuatro === "lionel messi") {
        alert("felicitaciones has terminado este mini cuestionario ")
        
    } else {
        alert("noooo negrazo, le dicen la pulga.. is easyy.. vos podes, otra chance .")
        
    }
    
} while (preguntaCuatro !== "lionel messi");


    
    
}


juego()




// PREENTREGA UNO

// function juego(){

// //MENSAJE BIENVENIDA
//   let mensaje = prompt("Bienvenido al cuestionario sobre cosas randoms, escriba  random para empezar ").toLowerCase()
//     if(mensaje=="random"){
//         alert("perfecto.. Comenzemos..")
//     }else(alert("ok vola de aca"))

// //PREGUNTA UNO

//   let preguntaUno
//    do {
//     preguntaUno = prompt("para empezar...¿Como se llama el manga, cual sus personajes.. pueden transformar en Super Sayayins").toLowerCase()
//         if(preguntaUno === "dragon ball z"){
//             alert("Correcto, Continuemos")
//         }else{
//             alert("incorrecto sigue intentando")
//         }
    
//    } while (preguntaUno !== "dragon ball z");

// // PREGUNTA DOS
// let preguntaDos
// do {
//     preguntaDos = prompt("¿que pais fue el ultimo  campeon del mundial de futboll masculino?").toLowerCase()
//     if(preguntaDos === "argentina"){
//         alert("Claro que sii che vamos la seleccion")
//     }else{
//         alert("no amigo, equivocadoo.. segui intentando")
//     }

    
// } while (preguntaDos !== "argentina");

// let preguntaTres

// do {
//     preguntaTres = prompt("¿quien fue el ultimo presidente electo de argentina ?").toLowerCase()
//     if (preguntaTres === "javier milei") {
//         alert("Correcto!.. queda una ultima pregunta")
        
//     } else {
//         alert("incorrectooo, pista LE DICEN EL PELUCA, segui intentando")
        
//     }
    
// } while (preguntaTres !== "javier milei");

// let preguntaCuatro

// do {
//     preguntaCuatro = prompt("¿Quien es el maximo ganador de balones de oro y mejor jugador de la historia ?").toLowerCase()
//     if (preguntaCuatro === "lionel messi") {
//         alert("felicitaciones has terminado este mini cuestionario ")
        
//     } else {
//         alert("noooo negrazo, le dicen la pulga.. is easyy.. vos podes, otra chance .")
        
//     }
    
// } while (preguntaCuatro !== "lionel messi");

    
// }



// PREENTREGA DOS

class Videojuego {
    constructor(videojuego,precio,stock){
        this.videojuego = videojuego
        this.precio = precio
        this.stock = stock
    }
}

let videoJuego1 = new Videojuego ("fifa 24",30000,140)
let videoJuego2 = new Videojuego ("god of war ragnarok",39000,79)
let videoJuego3 = new Videojuego ("assasin creed v",19800,3)
let videoJuego4 = new Videojuego ("crash", 10000 , 1)

let listaVideoJuegos = [videoJuego1,videoJuego2,videoJuego3,videoJuego4]



function VideojuegoOferta (videojuego,precio,stock){
    this.videojuego = videojuego
    this.precio = precio
    this.stock = stock
}

let videoJuegoOferta1 = new VideojuegoOferta ("pes 2008", 4700,3)
let videoJuegoOferta2 = new VideojuegoOferta ("minecraft" ,1980 ,197)
let VideojuegoOferta3 = new VideojuegoOferta ("power rangers",7800,9)

let listaVideoJuegosOferta = [videoJuegoOferta1,videoJuegoOferta2,VideojuegoOferta3]


function filtrarVideoJuegos(){
    let juegoAFiltrar = prompt("ingresa el videojuego que deseas buscar").toLowerCase().trim()
    let juegoBuscado = listaVideoJuegos.filter((y)=>y.videojuego.toLowerCase().includes(juegoAFiltrar))
    if(juegoBuscado.length > 0){
        console.log(juegoBuscado)

}else{
    alert("no tenemos el juego que buscas , lo sentimos ")
}

}


filtrarVideoJuegos()


function filtrarVideoJuegosOferta(){
    let juegoAFiltrar = prompt("ingrese el juego en OFERTA que desee buscar").toLowerCase().trim()
    let juegoBuscado = listaVideoJuegosOferta.filter((y)=>y.videojuego.toLowerCase().includes(juegoAFiltrar))
    if (juegoBuscado.length > 0) {
        console.log(juegoBuscado)
        
    } else {
        alert("no hay coincidencia con tu busqueda, lo sentimos")
    }
}

filtrarVideoJuegosOferta()
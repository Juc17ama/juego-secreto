let numerosecreto = 0;
let intentos =0;
let numerosSortiados = [];
let numeroMaximo = 10;

console.log(numerosecreto);

function asignartextoselemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
     }

function verificarintento(){
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);
    
    console.log(numerosecreto); 

    if (numerodeusuario === numerosecreto){
        asignartextoselemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el numero de usuario no acerto
       if (numerodeusuario > numerosecreto) {
        asignartextoselemento('p','numerosecreto es menor');
       } else {
        asignartextoselemento('p','el numero secreto es mayor');
       }
       intentos++;
       limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#valorusuario').value = '';
    //valorcaja.value = '';
}

function generarnumerosecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(numerosSortiados);
    //si ya sortiamos todos los numeros
    if (numerosSortiados.length == numeroMaximo){
        asignartextoselemento('p','ya se sortiaron todos los numeros');
    } else {

    }
    
    //si el numero generado esta incluido en la lista 
    if (numerosSortiados.includes(numeroGenerado)){
        return generarnumerosecreto();
    } else {
        numerosSortiados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesiniciales() {
    asignartextoselemento('h1','Juego del numero');
    asignartextoselemento('p',`Juego del 1 al ${numeroMaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja 
    limpiarcaja();
    //indicar mensaje de numero
    condicionesiniciales();
    //generare le numero aleatorio
    //deshabilitar el boton de juego nuevo
    //inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesiniciales();
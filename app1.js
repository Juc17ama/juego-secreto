let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguagesDeProgramacion() {
    lenguagesDeProgramacion.forEach(lenguaje => console.log(lenguaje));
}

function mostrarLenguagesDeProgramacionInverso() {
    lenguagesDeProgramacion.slice().reverse().forEach(lenguaje => console.log(lenguaje));
}

function calcularPromedio(lista) {
    if (lista.length === 0) {
        return 0;
    }
    let suma = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / lista.length;
}

function mostrarmayorymenor(lista) {
    if (lista.length == 0) {
        console.log("La lista está vacía.");
    } else {
        let mayor = Math.max(...lista);
        let menor = Math.min(...lista);
        console.log(`Mayor: ${mayor}, Menor: ${menor}`);
    }
}

function sumarelementos(lista) {
    return lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function encontrarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño.");
    }
    return lista1.map((num, index) => num + lista2[index]);
}

function cuadradoDeElementos(lista) {
    return lista.map(num => num ** 2);
}

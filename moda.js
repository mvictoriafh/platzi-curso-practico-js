const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
)

//&&ME FALTACOPIAR LA PARTE DE Object.ENTRIES SOLUCION finallyY PROBARLO

const lista1Array = object.entries(lista1Count) .sort(
    function (ElementoA,ElementoB) {
        return elementoA[1] - elementoB[1] ;
    });

    const moda = lista1Array[lista1Array.length -1];
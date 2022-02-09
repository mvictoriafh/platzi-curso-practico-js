// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value = input.value;
const perCuadrado = perimetroCuadrado(value);
alert("El perímetro del cuadrado es: " + perCuadrado);
}


 function calcularAreaCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;
 const arCuadrado = areaCuadrado(value);
 alert("El área del cuadrado es: " + arCuadrado);
 }
console.groupEnd();



//codigo triangulo:
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Aqui nos conectamos con el HTML:

function calcularPerTriangulo() {
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");
    const h = parseInt(inputAltura.value);
    const bs = parseInt(inputBase.value);
    const a = parseInt(inputA.value);
    const b = parseInt(inputB.value);
    const perimetro = perimetroTriangulo(a, b, bs);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const inputA = document.getElementById("inputA");
    const a = parseInt(inputA.value);
    const inputB = document.getElementById("inputB");
    const b = parseInt(inputB.value);
    const inputBase = document.getElementById("inputBase");
    const bs = parseInt(inputBase.value);
    const inputAltura = document.getElementById("inputAltura");
    const h = parseInt(inputAltura.value);
       
    const area = areaTriangulo(bs, h);
    alert("El area del triangulo es: " + area);
}

// // Restablecer formulario
// function restablecer() {
//     const resArea = document.getElementById("aResult");
//     const resPerimetro = document.getElementById("pResult");
//     document.getElementById("form").reset();
//     resPerimetro.innerHTML = 0 + " cm";
//     resArea.innerHTML = 0 + " cm";
// }


//codigo circulo:
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2; 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}

//Codigo triangulo isosceles


function trianguloIso(){
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2; 
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;
         
        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}


// function alturaTrianguloIsosceles (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//     if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
//         console.error("Los lados A y B no son iguales");
//     }else{
//         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2 ;
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//         const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
//         const trianguloPequenoLadoA =Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
//         const trianguloGrandeAltura = trianguloPequenoLadoA;
//         return trianguloGrandeAltura;
//     }
// }
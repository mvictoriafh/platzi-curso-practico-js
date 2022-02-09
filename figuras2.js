//codigo triangulo:
function perimetroTriangulo (lado1,lado2,base){
    return (lado1 + lado2 + base);
}

function areaTriangulo (lado1,lado2,base){
    const sP = (lado1 + lado2 + base) / 2; 
    return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base));
} 
//Aqui nos conectamos con el HTML:


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1,value2,value3);
    alert("El area del triangulo es: " + area);
}


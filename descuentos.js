
function calcularPrecioConDescuento(precio,descuento,cupon){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    //agrego
    let descuentoCupon;
    let precioDescuentoCupon;

    if(cupon === "Benito"){
        descuentoCupon = (precioConDescuento * 10) / 100
        console.log(descuentoCupon)
        precioDescuentoCupon = precioConDescuento - descuentoCupon
        return precioDescuentoCupon
    } else if (cupon === "YHLQMDLG") {
        descuentoCupon = (precioConDescuento * 15) / 100
        precioDescuentoCupon = precioConDescuento - descuentoCupon
        return precioDescuentoCupon
    } else if (cupon === "UnVeranoSinTi") {
        descuentoCupon = (precioConDescuento * 30) / 100
        precioDescuentoCupon = precioConDescuento - descuentoCupon
        return precioDescuentoCupon
    } else {
        alert ("El descuento que se mostrara no incluye cupon, si tiene cupon favor ingreselo aquí:")
        return precioConDescuento;

    }

    //return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;


    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, cuponValue);

     const resultP = document.getElementById("resultP");
    resultP.innerText = alert ("El precio con descuento y cupón es: $" + precioConDescuento);

}

const cupones = [
    "Benito",
    "YHLQMDLG",
    "UnVeranoSinTi",
];
 
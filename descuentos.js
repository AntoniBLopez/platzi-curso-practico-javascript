// let precioOriginal = 100;
// let descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    let porcentajeDelDescuento = 100 - descuento;
    let precioConDescuento = precio * porcentajeDelDescuento / 100;

    return precioConDescuento;
};

function clickPriceDiscount() {
    let inputPrice = document.getElementById("InputPrice");
    let inputDiscount = document.getElementById("InputDiscount");

    let valorPrice = inputPrice.value;
    let valorDiscount = inputDiscount.value;

    let resultadoPrecio = calcularPrecioConDescuento(valorPrice, valorDiscount);

    let resultPrice = document.getElementById("ResultPrice");
    return resultPrice.innerText = `El precio con descuento del ${valorDiscount}% es de: ${resultadoPrecio}`
};

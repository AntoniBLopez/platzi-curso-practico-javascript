// Código de un Cuadrado con arrow functions

let perimetroC = (lado)=> lado * 4;

let areaC = (lado)=> lado * lado;


document.write(
    `<strong>El lado del Cuadrado mide:</strong>
    <br>${5}cm<p>
    <strong>El perímetro es de:</strong>
    <br>${perimetroC(5)}cm<p>
    <strong>El área és de:</strong>
    <br>${areaC(5)}cm²<p>`
);

// Código de un Triángulo con arrow functions


let perimetroT = (ladoT1, ladoT2, baseT)=> ladoT1 + ladoT2 + baseT;

let areaT = (baseT, alturaT)=> baseT * alturaT / 2;

document.write(
    `<strong>Los lados del Triángulo miden:</strong>
    <br>${6}cm<br>${6}cm<br>${4}cm<p>
    <strong>La altura es de:</strong>
    <br>${5.5}<p>
    <strong>El parámetro es de:</strong>
    <br>${perimetroT(6, 6, 4)}<p>
    <strong>La área es de:</strong>
    <br>${areaT(4, 5.5)}<p>`
);

// Código de un Círculo con arrow functions


// Necesito el rádio

// El rádio por defecto es de: let radioCirculo = 4;

// El diámetro
let diametroCirculo = (radioCirculo)=> radioCirculo * 2;

// El número π
let PI = Math.PI;

// La circunferencia
let perimetroCirculo = diametroCirculo(4) * PI;

// El área
let areaCirculo = (radioCirculo)=> radioCirculo * radioCirculo * PI;

document.write(
    `<strong>El Rádio del Círculo es de:</strong>
    <br>${4}<p>
    <strong>El diámetro es de:</strong>
    <br>${diametroCirculo(4)}<p>
    <strong>La Circunferencia es de:</strong>
    <br>${perimetroCirculo}<p>
    <strong>El área es de:</strong>
    <br>${areaCirculo(4)}`
);

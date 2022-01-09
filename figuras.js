// Código de un Cuadrado

let ladoC = 5;
let perimetroC = ladoC * 4;
let areaC = ladoC * ladoC;

document.write(
    `<strong>El lado del Cuadrado mide:</strong>
    <br>${ladoC}cm<p>
    <strong>El perímetro es de:</strong>
    <br>${perimetroC}cm<p>
    <strong>El área és de:</strong>
    <br>${areaC}cm²<p>`
);

// Código de un Triángulo

let ladoT1 = 6;
let ladoT2 = 6;
let baseT = 4;
let alturaT = 5.5;
let parametroT = ladoT1 + ladoT2 + baseT;
let areaT = baseT * alturaT / 2;

document.write(
    `<strong>Los lados del Triángulo miden:</strong>
    <br>${ladoT1}cm<br>${ladoT2}cm<br>${baseT}cm<p>
    <strong>La altura es de:</strong>
    <br>${alturaT}<p>
    <strong>El parámetro es de:</strong>
    <br>${parametroT}<p>
    <strong>La área es de:</strong>
    <br>${areaT}<p>`
);

// Código de un Círculo


// Necesito el rádio
let radioCirculo = 4;

// El diámetro
let diametroCirculo = radioCirculo * 2;

// El número π
let PI = Math.PI;

// La circunferencia
let perimetroCirculo = diametroCirculo * PI;

// El área
let areaCirculo = radioCirculo * radioCirculo * PI;

document.write(
    `<strong>El Rádio del Círculo es de:</strong>
    <br>${radioCirculo}<p>
    <strong>El diámetro es de:</strong>
    <br>${diametroCirculo}<p>
    <strong>La Circunferencia es de:</strong>
    <br>${perimetroCirculo}<p>
    <strong>El área es de:</strong>
    <br>${areaCirculo}`
);

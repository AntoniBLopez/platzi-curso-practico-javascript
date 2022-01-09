

// Código de un Cuadrado con arrow functions

let perimetroC = (lado)=> lado * 4;

let areaC = (lado)=> lado * lado;

// Aquí interactuamos con HTML

function calcularPerimetroCuadrado() {
    let input =  document.getElementById("InputCuadrado");
    let value = input.value;

    let per =  perimetroC(value);
    alert(`El Perímetro del cuadrado es de: ${per}`)
};

function calcularAreaCuadrado() {
    let input =  document.getElementById("InputCuadrado");
    let value = input.value;

    let area =  areaC(value);
    alert(`El Área del cuadrado es de: ${area}`)
};



// Código de un Triángulo con arrow functions

// let perimetroT = (ladoT1, ladoT2, baseT)=> ladoT1 + ladoT2 + baseT;

// let areaT = (baseT, alturaT)=> baseT * alturaT / 2;

// document.write(
//     `<strong>Los lados del Triángulo miden:</strong>
//     <br>${6}cm<br>${6}cm<br>${4}cm<p>
//     <strong>La altura es de:</strong>
//     <br>${5.5}<p>
//     <strong>El parámetro es de:</strong>
//     <br>${perimetroT(6, 6, 4)}<p>
//     <strong>La área es de:</strong>
//     <br>${areaT(4, 5.5)}<p>`
// );



// Código de un Triángulo Isósceles con arrow functions

function calcularAlturaTrianguloI(valueL11, valueL2, valueB) {

    let inputL1 =  document.getElementById("InputTrianguloIL1");
    let inputL2 =  document.getElementById("InputTrianguloIL2");
    let inputB =  document.getElementById("InputTrianguloIB");
    
    valueL11 = inputL1.value;
    valueL2 = inputL2.value;
    valueB = inputB.value;

    let altura = (a)=> Math.sqrt(valueL11**2 - (valueB**2 / 4));


    if (valueL11 === valueB || valueL11 === valueL2 || valueB === valueL2) {

        alert("Por sus medidas se confirma que es un Triángulo Isósceles")
        alert(`La altura del Triángulo Isósceles es de: ${altura()}`)
    }
    else {
        alert("Las medidas indicadas NO se trata de un Triángulo Isósceles. Recuerda que tiene que tener 2 lados iguales, gracias.")
    }

};




// Código de un Círculo con funciones


// El número π
let PI = Math.PI;


// Invocar el área del círculo según el resultado que ponga el cliente:
function calcularAreaCirculo() {

    // Necesito el rádio
    let radio = document.getElementById("InputRadio");
    // Valor del rádio
    let valorRadio = radio.value;

    // Necesito el área. Fórmula para conseguir el área del círculo:
    let areaCirculo = valorRadio**2 * PI;
    // La fórmula es radio al cuadrado por el número PI

    alert(`El área de tu Cículo es de: ${areaCirculo}`)
};



// Invocar la circunferencia del círculo según el resultado que ponga el cliente:
function calcularCircunferencia() {

     // Necesito el rádio
    let radio = document.getElementById("InputRadio");
    // Valor del rádio
    let valorRadio = radio.value;

    // Necesito el diámetro. Fórmula para conseguir el Diámetro:
    let diametroC = (rC)=> rC * 2;
    // La fórmula es rádio del círculo por 2

    // La circunferencia. Fórmula para conseguir la circunferencia:
    let Circunferencia = diametroC(valorRadio) * PI;
    // La fórmula es diámetro del circulo por el número PI

    alert(`La circunferencia de tu Cículo es de: ${Circunferencia}`)
};

function calcularDiametro() {

    // Necesito el rádio
   let radio = document.getElementById("InputRadio");
   // Valor del rádio
   let valorRadio = radio.value;

    // Fórmula para conseguir el Diámetro:
   let diametroC = (rC)=> rC * 2;
   // La fórmula es rádio del círculo por 2

   alert(`El Diámetro de tu Cículo es de: ${diametroC(valorRadio)}`)
};
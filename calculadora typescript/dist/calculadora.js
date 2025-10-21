"use strict";
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }
}
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const btnSomar = document.getElementById("btnSomar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const calc = new Calculadora();
function mostrarResultado(texto) {
    if (resultado) {
        resultado.textContent = texto;
        resultado.classList.add("mostrar-resultado");
    }
}
function limparResultado() {
    if (resultado) {
        resultado.textContent = "";
        resultado.classList.remove("mostrar-resultado");
    }
}
function pegarValores() {
    if (!num1 || !num2)
        return null;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    if (isNaN(a) || isNaN(b)) {
        mostrarResultado("Por favor, insira dois números válidos.");
        return null;
    }
    return [a, b];
}
if (btnSomar && btnSubtrair && btnMultiplicar && btnDividir) {
    btnSomar.addEventListener("click", () => {
        limparResultado();
        const valores = pegarValores();
        if (!valores)
            return;
        const [a, b] = valores;
        const res = calc.somar(a, b);
        mostrarResultado(`Resultado: ${res}`);
    });
    btnSubtrair.addEventListener("click", () => {
        limparResultado();
        const valores = pegarValores();
        if (!valores)
            return;
        const [a, b] = valores;
        const res = calc.subtrair(a, b);
        mostrarResultado(`Resultado: ${res}`);
    });
    btnMultiplicar.addEventListener("click", () => {
        limparResultado();
        const valores = pegarValores();
        if (!valores)
            return;
        const [a, b] = valores;
        const res = calc.multiplicar(a, b);
        mostrarResultado(`Resultado: ${res}`);
    });
    btnDividir.addEventListener("click", () => {
        limparResultado();
        const valores = pegarValores();
        if (!valores)
            return;
        const [a, b] = valores;
        try {
            const res = calc.dividir(a, b);
            mostrarResultado(`Resultado: ${res}`);
        }
        catch (e) {
            if (e instanceof Error)
                mostrarResultado(e.message);
        }
    });
}

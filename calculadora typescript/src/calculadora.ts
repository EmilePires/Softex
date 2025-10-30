class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
}

const num1 = document.getElementById("num1") as HTMLInputElement | null;
const num2 = document.getElementById("num2") as HTMLInputElement | null;
const resultado = document.getElementById("resultado") as HTMLParagraphElement | null;

const btnSomar = document.getElementById("btnSomar") as HTMLButtonElement | null;
const btnSubtrair = document.getElementById("btnSubtrair") as HTMLButtonElement | null;
const btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLButtonElement | null;
const btnDividir = document.getElementById("btnDividir") as HTMLButtonElement | null;

const calc = new Calculadora();

function mostrarResultado(texto: string) {
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

function pegarValores(): [number, number] | null {
  if (!num1 || !num2) return null;

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
    if (!valores) return;

    const [a, b] = valores;
    const res = calc.somar(a, b);
    mostrarResultado(`Resultado: ${res}`);
  });

  btnSubtrair.addEventListener("click", () => {
    limparResultado();
    const valores = pegarValores();
    if (!valores) return;

    const [a, b] = valores;
    const res = calc.subtrair(a, b);
    mostrarResultado(`Resultado: ${res}`);
  });

  btnMultiplicar.addEventListener("click", () => {
    limparResultado();
    const valores = pegarValores();
    if (!valores) return;

    const [a, b] = valores;
    const res = calc.multiplicar(a, b);
    mostrarResultado(`Resultado: ${res}`);
  });

  btnDividir.addEventListener("click", () => {
    limparResultado();
    const valores = pegarValores();
    if (!valores) return;

    const [a, b] = valores;
    try {
      const res = calc.dividir(a, b);
      mostrarResultado(`Resultado: ${res}`);
    } catch (e) {
      if (e instanceof Error) mostrarResultado(e.message);
    }
  });
}

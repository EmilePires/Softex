const somar = (a, b) = a + b;
 const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
function dividir(a, b) { return b ===0? 'Divisão por zero!': a / b; }

document.addEventListener('DOMContentLoaded', () => {
const A = document.getElementById('a');
const B = document.getElementById('b');
const btn = document.getElementById('btnCalc');

const outSoma = document.getElementById('soma');
const outSub = document.getElementById('sub');
const outMul = document.getElementById('mul');
const outDiv = document.getElementById('div');

btn.addEventListener('click', () => {
const a = Number(A.value);
const b = Number(B.value);

if (Number.isNaN(a) || Number.isNaN(b)) {
outSoma.textContent = outSub.textContent = outMul.textContent = '';
outDiv.textContent = 'Informe números válidos.';
outDiv.classList.add('error');

return;
}
outDiv.classList.remove('error');
outSoma.textContent = somar(a, b);
outSub.textContent = subtrair(a, b);
outMul.textContent = multiplicar(a, b);
outDiv.textContent = dividir(a, b);
});

});
function dobro(x) {
  return x * 2;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('numDobro');
  const btn = document.getElementById('btnDobro');
  const out = document.getElementById('outDobro');

  btn.addEventListener('click', () => {
    const valor = Number(input.value);
    if (Number.isNaN(valor)) {
      out.textContent = 'Digite um número válido!';
      out.classList.add('error');
    } else {
      out.classList.remove('error');
      out.textContent = dobro(valor);
    }
  });
});
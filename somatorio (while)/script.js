document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('numSoma');
  const btnAdd = document.getElementById('btnSomar');
  const btnFim = document.getElementById('btnFinalizar');
  const out = document.getElementById('outSoma');

  let soma = 0;

  btnAdd.addEventListener('click', () => {
    const num = Number(input.value);
    if (num === 0) {
      out.textContent = `Finalizado. Soma total = ${soma}`;
    } else if (!Number.isNaN(num)) {
      soma += num;
      out.textContent = `Soma parcial = ${soma}`;
    }
    input.value = '';
    input.focus();
  });

  btnFim.addEventListener('click', () => {
    out.textContent = `Soma final = ${soma}`;
    soma = 0; // reseta
  });
});
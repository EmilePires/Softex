document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('numTabuada');
  const btn = document.getElementById('btnTabuada');
  const out = document.getElementById('outTabuada');

  btn.addEventListener('click', () => {
    const num = Number(input.value);
    if (Number.isNaN(num)) {
      out.innerHTML = '<li class="error">Digite um número válido!</li>';
      return;
    }
    out.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = `${num} x ${i} = ${num * i}`;
      out.appendChild(li);
    }
  });
});
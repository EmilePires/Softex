function media(vetor) {
  const soma = vetor.reduce((acc, n) => acc + n, 0);
  return soma / vetor.length;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('notas');
  const btn = document.getElementById('btnMedia');
  const out = document.getElementById('outMedia');

  btn.addEventListener('click', () => {
    const valores = input.value.split(',').map(n => Number(n.trim()));
    if (valores.some(n => Number.isNaN(n))) {
      out.textContent = 'Digite apenas números separados por vírgula!';
      out.classList.add('error');
    } else {
      out.classList.remove('error');
      out.textContent = media(valores).toFixed(2);
    }
  });
});
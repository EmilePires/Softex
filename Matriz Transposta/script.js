function transposta(matriz) {
  let linhas = matriz.length;
  let colunas = matriz[0].length;
  let resultado = [];

  for (let j = 0; j < colunas; j++) {
    let novaLinha = [];
    for (let i = 0; i < linhas; i++) {
      novaLinha.push(matriz[i][j]);
    }
    resultado.push(novaLinha);
  }
  return resultado;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnTransposta');
  const out = document.getElementById('outTransposta');

  btn.addEventListener('click', () => {
    const m = [
      [Number(document.getElementById('m00').value), Number(document.getElementById('m01').value), Number(document.getElementById('m02').value)],
      [Number(document.getElementById('m10').value), Number(document.getElementById('m11').value), Number(document.getElementById('m12').value)]
    ];

    if (m.flat().some(v => Number.isNaN(v))) {
      out.innerHTML = '<p class="error">Preencha todos os campos com números válidos!</p>';
      return;
    }

    const t = transposta(m);

    let tabela = '<table>';
    for (let i = 0; i < t.length; i++) {
      tabela += '<tr>';
      for (let j = 0; j < t[i].length; j++) {
        tabela += `<td>${t[i][j]}</td>`;
      }
      tabela += '</tr>';
    }
    tabela += '</table>';

    out.innerHTML = tabela;
  });
});
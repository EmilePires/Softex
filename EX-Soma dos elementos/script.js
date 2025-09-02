let inputsDiv = document.getElementById("inputs");
for (let i = 1; i <= 5; i++) {
  let input = document.createElement("input");
  input.type = "number";
  input.id = "num" + i;
  input.placeholder = "Número " + i;
  inputsDiv.appendChild(input);
}

function somar() {
  let soma = 0;
  for (let i = 1; i <= 5; i++) {
    let valor = parseFloat(document.getElementById("num" + i).value) || 0;
    soma += valor;
  }
  document.getElementById("resultado").innerText = "Resultado: " + soma;
}
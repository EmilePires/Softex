function gerarMatriz() {
    let matriz = [];
    let diagonal = [];

    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            let valor = Math.floor(Math.random() * 99) + 1;
            matriz[i][j] = valor;
        }
    }

    let html = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === j) {
                html += `<div class="celula diagonal">${matriz[i][j]}</div>`;
                diagonal.push(matriz[i][j]);
            } else {
                html += `<div class="celula">${matriz[i][j]}</div>`;
            }
        }
    }

    document.getElementById("matriz").innerHTML = html;
    document.getElementById("resultado").innerHTML = 
        "Diagonal Principal: " + diagonal.join(" , ");
}
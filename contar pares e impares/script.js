function gerarNumeros() {
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        let n = Math.floor(Math.random() * 100) + 1;
        numeros.push(n);
    }

    let pares = [];
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

  document.getElementById("resultado").innerHTML =
        "<strong>Números gerados:</strong><br>" + numeros.join(", ") +
        "<br><br><strong>Pares:</strong><br>" + pares.join(", ") +
        "<br><br><strong>Ímpares:</strong><br>" + impares.join(", ");
}
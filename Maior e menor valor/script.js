function calcular() {
    let numeros = [
        Number(document.getElementById("num1").value),
        Number(document.getElementById("num2").value),
        Number(document.getElementById("num3").value),
        Number(document.getElementById("num4").value),
        Number(document.getElementById("num5").value)
    ];
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    document.getElementById("resultado").innerHTML =
        "Maior número: " + maior + "<br>Menor número: " + menor;
}
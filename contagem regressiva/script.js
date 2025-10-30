let count = 10; // Começa em 10
const countdownElement = document.getElementById('countdown');

const interval = setInterval(() => {
    countdownElement.textContent = count; // Atualiza na tela
    console.log(count); // Mostra no console
    count--; // Decrementa

    if (count < 1) {
        clearInterval(interval); // Para o intervalo quando chega a 0
        countdownElement.textContent = "FIM!";
        console.log("FIM!");
    }
}, 1000); // Executa a cada 1 segundo
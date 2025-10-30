document.addEventListener("DOMContentLoaded", () =>{
    const btn = document.getElementById("btnVerificar");
    const resultado = document.getElementById("resultado");

    btn.addEventListener("click", () => {
        let idade = Number(document.getElementById("idade").value);
        let temCNH = document.getElementById("cnh").checked;

    if (idade >= 18 && temCNH){
        resultado.textContent = "autorizado a dirigir"
        resultado.className = "verde";
    } else{
        resultado.textContent = "negado a dirigir"
        resultado.className = "vermelho";
    }
});
});

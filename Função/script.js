function saudacao(nome){
    return `Olá, ${nome}! Bem vindo(a).`;
}

document.addEventListener("DOMContentLoaded", () =>{ 
    const btn = document.getElementById('btnSaudar');
    const out = document.getElementById ('out');
    const input = document.getElementById ('nome');

    btn.addEventListener('click', () => {
    const nome = input.value.trim();
    const alvo = nome || 'visitante';
    out.textContent = saudacao(alvo);
    });
        
    });
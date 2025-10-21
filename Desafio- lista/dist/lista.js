"use strict";
function adicionarTarefa() {
    const inputTarefa = document.getElementById('nome');
    const tarefa = inputTarefa.value.trim();
    if (tarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    const tbody = document.querySelector('#tabelaNotas tbody');
    const novaLinha = document.createElement('tr');
    const novaCelula = document.createElement('td');
    novaCelula.textContent = tarefa;
    novaLinha.appendChild(novaCelula);
    tbody.appendChild(novaLinha);
    inputTarefa.value = '';
}
const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarTarefa);

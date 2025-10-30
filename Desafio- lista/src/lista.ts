
function adicionarTarefa(): void {
    const inputTarefa = document.getElementById('nome') as HTMLInputElement;
    const tarefa = inputTarefa.value.trim();

    if (tarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const tbody = document.querySelector('#tabelaNotas tbody') as HTMLTableSectionElement;

    const novaLinha = document.createElement('tr');
    const novaCelula = document.createElement('td');
    novaCelula.textContent = tarefa;

    novaLinha.appendChild(novaCelula);
    tbody.appendChild(novaLinha);

    inputTarefa.value = '';
}


const btnAdicionar = document.getElementById('btnAdicionar') as HTMLButtonElement;

btnAdicionar.addEventListener('click', adicionarTarefa);

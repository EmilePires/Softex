document.addEventListener("DOMContentLoaded", () =>{ 
    let notasAlunos = [
        [7, 8, 5], //Aluno 1
        [6, 6, 9], //Aluno 2
        [8, 7, 8], //Aluno 3
        [5, 9, 5] //Aluno 4
    ];

    const tabela = document.querySelector("#tabelaNotas tbody");


    for (let i = 0; i < notasAlunos.length; i++){
    let linha = document.createElement("tr");

    let celAluno = document.createElement("td");
    celAluno.textContent = `Aluno ${i+1}`;
    linha.appendChild(celAluno);

    let soma = 0;
    for(let j = 0; j < notasAlunos[i].length; j++){
        let celNotas= document.createElement("td");
        celNotas.textContent = notasAlunos [i] [j];
        linha.appendChild(celNotas);
        soma += notasAlunos[i][j];
    }

    let media = soma / notasAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);

    let celSituação = document.createElement("td")
    if (media >= 7) {
        celSituação.textContent = "aprovado";
        celSituação.className = "aprovado";
    }else{
        celSituação.textContent = "reprovado";
        celSituação.className = "reprovado";
    }


    linha.appendChild(celSituação);
     tabela.appendChild(linha);

    }
});
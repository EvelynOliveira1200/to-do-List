function criarTarefa() {
    let inserir = document.getElementById("inserir").value;
    let dateInicio = document.getElementById("dateInicio").value;
    let diaSemana = document.getElementById("diaSemana").value;
    let dateFim = document.getElementById("dateFim").value;
    let prioridade = document.getElementById("prioridade").value;

    let mensagem = "Tarefa: " + inserir + "|" + "Data de Início: " + dateInicio + "|" + "Dia da Semana: " + diaSemana + "|" + "Data de Fim: " + dateFim + "|" + "Prioridade: " + prioridade;

    let novaTarefa = document.createElement("div");
    novaTarefa.className = "novaTarefa";
    novaTarefa.innerText = mensagem;

    document.getElementById("tarefas").appendChild(novaTarefa);

    let remover = document.createElement("button");
    remover.className = "remover";
    remover.innerText = "Remover";
    remover.onclick = function () {
        removerTarefa(novaTarefa);
    };

    novaTarefa.appendChild(remover);
}

function removerTarefa(tarefa) {
    tarefa.remove();
}

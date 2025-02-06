function criarTarefa() {
    let inserir = document.getElementById("inserir").value;
    let dateInicio = document.getElementById("dateInicio").value;
    let diaSemana = document.getElementById("diaSemana").value;
    let dateFim = document.getElementById("dateFim").value;
    let horario = document.getElementById("horario").value;
    let prioridade = document.getElementById("prioridade").value;

    let mensagem = "Tarefa: " + inserir + "\n" + "Data de Início: " + dateInicio + "\n" + "Dia da Semana: " + diaSemana + "\n" + "Data de Fim: " + dateFim + "\n" + "Horário: " + horario + "\n" + "Prioridade: " + prioridade;

    if (inserir == "" || dateInicio == "" || diaSemana == "" || dateFim == "" || horario == "" || prioridade == "") {
        mensagem = "Preencha todos os campos!";
    }

    document.getElementById("mensagem").innerText = mensagem;
}
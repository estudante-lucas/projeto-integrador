function setMinDataFinal() {
    const dataInicial = document.getElementById("dataInicial")
    const dataFinal = document.getElementById("dataFinal")
    dataFinal.value = dataInicial.value
    dataFinal.min = dataInicial.value
}

function showData(candidato) {
    const dataInicial = document.getElementById("dataInicial")
    const dataFinal = document.getElementById("dataFinal")

    if (dataInicial.value && dataFinal.value) {
        const img = document.getElementById("grafico")
        img.src = `../../img/${candidato}-grafico.png`
    } else {
        alert("Informe a data inicial e final!")
    }

}
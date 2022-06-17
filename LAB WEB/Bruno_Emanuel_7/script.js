function inserir(){

var chamar = prompt("nome")
var chamar2 = prompt("profissao")

var tb = document.getElementById("tabela")
var linhas= tb.rows.lenght
var inserir= tb.insertRow(linhas)

var celula = inserir.insertCell(0)
var celula1 = inserir.insertCell(1)



celula.innerHTML = chamar
celula1.innerHTML = chamar2

}
function insert() {
    let inputname = document.getElementById("nome");

    tabela.innerHTML += (

        "<tr class = 'add'><td>" + inputname.value + "</td>"+
        "<td>" + inputname.value.split("").sort().join("").toUpperCase()+"</td></tr>");

        inputname.value = "";

    }

function dell() {
    let remover = document.getElementsByTagName("tbody")
    remover[0].remove();

}




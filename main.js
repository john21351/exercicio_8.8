function adicionarPessoas() {
    var nome = document.getElementById('Nome').value;
    var numero = document.getElementById('Numero').value;

    if (nome !== "" && numero !== "") {
        var listaPessoas = document.getElementById('listaPessoas');
        var listaItem = document.createElement('li');
        listaItem.textContent = nome + " - " + numero;
        listaPessoas.appendChild(listaItem);

        document.getElementById('Nome').value = "";
        document.getElementById('Numero').value = "";
    }
}
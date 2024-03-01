// Função para adicionar um pedido
function addPedido() {
    // Obtém os valores dos campos do formulário
    var cliente = document.getElementById('cliente').value;
    var sabor = document.getElementById('sabor').value;
    var quantidade = document.getElementById('quantidade').value;
    var dataEntrega = document.getElementById('dataEntrega').value;
    var status = document.getElementById('status').value;

    // Cria um novo item de pedido
    var pedido = {
        cliente: cliente,
        sabor: sabor,
        quantidade: quantidade,
        dataEntrega: dataEntrega,
        status: status
    };

    // Adiciona o novo item de pedido à lista
    adicionarItemPedido(pedido);

    // Limpa os campos do formulário após adicionar o pedido
    limparCamposFormulario();
}

// Função para adicionar um item de pedido à lista
function adicionarItemPedido(pedido) {
    var pedidoList = document.getElementById('pedidoList');
    var listItem = document.createElement('li');

    // Formata o item de pedido como uma string
    listItem.textContent = `${pedido.cliente} - ${pedido.sabor} - ${pedido.quantidade} - ${pedido.dataEntrega} - ${pedido.status}`;

    // Adiciona o item de pedido à lista
    pedidoList.appendChild(listItem);
}

// Função para limpar os campos do formulário após adicionar um pedido
function limparCamposFormulario() {
    document.getElementById('cliente').value = '';
    document.getElementById('sabor').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('dataEntrega').value = '';
    document.getElementById('status').value = 'Produção';
}

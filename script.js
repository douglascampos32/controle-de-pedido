var pedidos = [];

function addPedido() {
    var cliente = document.getElementById('cliente').value;
    var sabores = document.getElementById('sabores').value.split('\n');
    var quantidades = document.getElementById('quantidades').value.split('\n');
    var dataEntrega = document.getElementById('dataEntrega').value;
    var status = document.getElementById('status').value;

    var pedido = {
        cliente: cliente,
        sabores: sabores,
        quantidades: quantidades,
        dataEntrega: dataEntrega,
        status: status
    };

    pedidos.push(pedido);
    renderPedidos();
}

function renderPedidos() {
    var pedidoList = document.getElementById('pedidoList');
    pedidoList.innerHTML = '';

    pedidos.forEach(function(pedido) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Cliente:</strong> ${pedido.cliente}<br>
            <strong>Sabores:</strong> ${pedido.sabores.join(', ')}<br>
            <strong>Quantidades:</strong> ${pedido.quantidades.join(', ')}<br>
            <strong>Data de Entrega:</strong> ${pedido.dataEntrega}<br>
            <strong>Status:</strong> ${pedido.status}<br>
            <button onclick="editarPedido(${pedidos.indexOf(pedido)})">Editar</button>
            <button onclick="excluirPedido(${pedidos.indexOf(pedido)})">Excluir</button>
        `;
        pedidoList.appendChild(listItem);
    });
}

function editarPedido(index) {
    var pedido = pedidos[index];
    var cliente = prompt('Novo cliente:', pedido.cliente);
    var sabores = prompt('Novos sabores:', pedido.sabores.join('\n'));
    var quantidades = prompt('Novas quantidades:', pedido.quantidades.join('\n'));
    var dataEntrega = prompt('Nova data de entrega:', pedido.dataEntrega);
    var status = prompt('Novo status:', pedido.status);

    pedidos[index] = {
        cliente: cliente,
        sabores: sabores.split('\n'),
        quantidades: quantidades.split('\n'),
        dataEntrega: dataEntrega,
        status: status
    };

    renderPedidos();
}

function excluirPedido(index) {
    if (confirm('Tem certeza que deseja excluir este pedido?')) {
        pedidos.splice(index, 1);
        renderPedidos();
    
    }
    window.onload = function() {
            renderizarTabela();
        };


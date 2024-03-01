function addPedido() {
    var cliente = document.getElementById('cliente').value;
    var sabor = document.getElementById('sabor').value;
    var quantidade = document.getElementById('quantidade').value;
    var dataEntrega = document.getElementById('dataEntrega').value;
    var status = document.getElementById('status').value;

    var url = `https://script.google.com/macros/s/AKfycbxd4oF-2eBOTBEg562-Wb49HKEkhcwBWiLrp2V3CrShDsxyNGhaumRWR6UN7vk6nPMz/exec`;
    var params = "cliente=" + cliente + "&sabor=" + sabor + "&quantidade=" + quantidade + "&dataEntrega=" + dataEntrega + "&status=" + status;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Atualizar lista de pedidos após adicionar um novo pedido
            getPedidos();
        }
    }

    xhr.send(params);
}

function getPedidos() {
    var url = `https://script.google.com/macros/s/AKfycbxd4oF-2eBOTBEg562-Wb49HKEkhcwBWiLrp2V3CrShDsxyNGhaumRWR6UN7vk6nPMz/exec`;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            renderPedidos(response);
        }
    }

    xhr.send();
}

function renderPedidos(pedidos) {
    var pedidoList = document.getElementById('pedidoList');
    pedidoList.innerHTML = '';

    pedidos.forEach(function(pedido) {
        var listItem = document.createElement('li');
        listItem.textContent = pedido.join(' - ');
        pedidoList.appendChild(listItem);
    });
}

// Carregar lista de pedidos quando a página é carregada
window.onload = getPedidos;

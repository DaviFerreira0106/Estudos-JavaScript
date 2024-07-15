var button = window.document.getElementById('button');

button.addEventListener('click', gerar);

function gerar(){
    var txtnumero = window.document.getElementById('itxtnumero');
    var tab = window.document.getElementById('itab');

    var numero = Number(txtnumero.value);
    tab.innerHTML = '';
    if(numero == null) {
        window.alert('[ERRO] Digite um número para ser calculado!');
    }else {
        for(var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            tab.innerHTML = tab.innerHTML + `<option> ${numero} x ${i} = ${resultado} </option>`;
        }
    }
}
var buttonA = window.document.getElementById('buttonA');
var buttonF = window.document.getElementById('buttonF');
var arrayNum = [];

buttonA.addEventListener('click', adicionar);
buttonF.addEventListener('click', finalizar);

function adicionar(){
    var txtNumero = window.document.getElementById('itxtn');
    var select = window.document.getElementById('select');

    var num = Number(txtNumero.value);

    if(num == null || num < 1 || num > 100) {
        window.alert('Digite um número valído!');
    }else {
        if(arrayNum.indexOf(num) != -1) {
            window.alert('Número já consta na lista!');
        }else {
            arrayNum.push(num);
            select.innerHTML = select.innerHTML + `<option>Valor ${num} foi adicionado!</option>`;
        }
        
    }
}

function finalizar() {
    if(arrayNum.length == 0) {
        window.alert('Digite valores para adicionar na lista!');
    }else {
        var p1 = window.document.getElementById('p1');
        var p2 = window.document.getElementById('p2');
        var p3 = window.document.getElementById('p3');
        var p4 = window.document.getElementById('p4');
        var p5 = window.document.getElementById('p5');

        arrayNum.sort();
        let ultimaPosicao = arrayNum.length;

        var soma = 0;
        for(let pos = 0; pos < arrayNum.length; pos++){
            var n = arrayNum[pos];
            soma = soma + n;
        }

        var media = soma / 2;

        p1.innerHTML = `<p>Ao todo, temos ${arrayNum.length} números cadastrados.</p>`;
        p2.innerHTML = `<p>O maior valor informado foi ${arrayNum[ultimaPosicao - 1]}</p>`;
        p3.innerHTML = `<p>O maior valor informado foi ${arrayNum[0]}</p>`;
        p4.innerHTML = `<p>Somando todos os valores temos ${soma}</p>`;
        p5.innerHTML = `<p>A média dos valores digitados é ${media}</p>`;
    }
}


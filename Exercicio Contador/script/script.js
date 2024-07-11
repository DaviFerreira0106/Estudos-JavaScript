var button = window.document.getElementById('button');

button.addEventListener('click', contar);

function contar() {
    var txtinicio = window.document.getElementById('itxtinicio');
    var txtfim = window.document.getElementById('itxtfim');
    var txtpasso = window.document.getElementById('itxtpasso');
    var res = window.document.getElementById('res');
    var text = window.document.getElementById('text');

    var inicio = txtinicio.value;
    var fim = txtfim.value;
    var passo = txtpasso.value;

    var numInicio = Number(inicio);
    var numFim = Number(fim);
    var numPasso = Number(passo);

    if (inicio == null) {
        text.innerText = 'Impossível contar!';
    } else if (passo == 0 || passo == null) {
        window.alert('Passo não especificado, realizando contagem considerando Passo 1');
        text.innerHTML = '<p>Contando: </p>';
        for (numInicio; numInicio <= numFim; numInicio = numInicio + 1) {
            res.innerHTML = res.innerHTML + `${numInicio} &#x1F449;`;
        }
        res.innerHTML = res.innerHTML + ` &#x1F3C1; `;
    } else {
        text.innerHTML = '<p>Contando: </p>';
        for (numInicio; numInicio <= numFim; numInicio = numInicio + numPasso) {
            res.innerHTML = res.innerHTML + `${numInicio} &#x1F449; `;
        }
        res.innerHTML = res.innerHTML + ` &#x1F3C1; `;
    }
} 
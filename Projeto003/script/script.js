
function contar(){
    
    let valorInicio = document.querySelector('input#itxtini');
    let valorFim = document.querySelector('input#itxtfim');
    let valorPasso = document.querySelector('input#itxtpasso');
    var divResposta = document.getElementById('resposta');

    let inicio = Number(valorInicio.value);
    let fim = Number(valorFim.value);
    let passo = Number(valorPasso.value);
    
    if(inicio.values.lenght == 0 || fim.values.lenght == 0 || passo.values.lenght == 0) {
        window.alert('[ERRO] Verifique os dados!');
    } else {
        window.alert('Tudo OK!');
    }
    
}
var buttonVerificar = window.document.querySelector('input[type=button]');

buttonVerificar.addEventListener('click', verificar);

function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var txtIdade = window.document.getElementById('iformidade');
    var sexo = window.document.getElementsByName('radsex');
    var res = window.document.getElementById('res');
    var idade = ano - Number(txtIdade.value);
    var img = window.document.createElement('img');

    if(txtIdade.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else {
        // Campo masculino
        if(sexo[0].checked){
            if(idade >= 0 && idade < 12) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos um menino de ${idade} anos.</p>`;
                img.setAttribute('src', './images/menino-crianca.png');
            }else if(idade < 21) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos um jovem de ${idade} anos.</p>`;
                img.setAttribute('src', './images/menino-jovem.png');
            }else if(idade < 60) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos um homem adulto de ${idade} anos.</p>`;
                img.setAttribute('src', './images/homem-adulto.png');
            }else{
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos um homem idoso de ${idade} anos.</p>`;
                img.setAttribute('src', './images/homem-idoso.png');
            }
        }else if(sexo[1].checked){ // Campo feminino
            if(idade >= 0 && idade < 12) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos uma menina de  ${idade} anos.</p>`;
                img.setAttribute('src', './images/menina-crianca.png');
            }else if(idade < 21) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos uma jovem de ${idade} anos.</p>`;
                img.setAttribute('src', './images/menina-jovem.png');
            }else if(idade < 60) {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos uma mulher adulta de ${idade} anos.</p>`;
                img.setAttribute('src', './images/mulher-adulta.png');
            }else {
                res.style.textAlign = 'center';
                res.innerHTML = `<p>Detectamos uma mulher idosa de ${idade} anos.</p>`;
                img.setAttribute('src', './images/mulher-idosa.png');
            }
        }
        res.appendChild(img);
    }
}
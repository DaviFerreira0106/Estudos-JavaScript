function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anovalue = window.document.getElementById('itxtano');
    var anoNasc = anovalue.value;
    var divRes = window.document.getElementById('resultado');

    if(anoNasc.lenght == 0 || anoNasc > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var idade = ano - anoNasc;
        var sexo = window.document.getElementsByName('sexo');
        var genero = '';
        var img = window.document.createElement('img'); // Criação de Tag atraves do JavaScript
        img.setAttribute('id','foto'); // Dando nome para o id da tag img atraves do javascript

        // Tratamento de dados masculino
        if(sexo[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 13) {
                // Criança
                img.setAttribute('src','criancamenino.png');
            } else if(idade <= 21) {
                // Jovem
                img.setAttribute('src','jovemhomem.png');
            } else if(idade <= 60) {
                // Adulto
                img.setAttribute('src','homemadulto.png');
            } else {
                // Idoso
                img.setAttribute('src','homemidoso.png');
            }
        }
        // Tratamento de dados feminino
         else if(sexo[1].checked){
            genero = 'Mulher';
            if(idade >=0 && idade <= 13) {
                // Criança
                img.setAttribute('src','criancamenina.png');
            } else if(idade <= 21) {
                // Jovem
                img.setAttribute('src','jovemmulher.png');
            } else if(idade <= 60) {
                // Adulto
                img.setAttribute('src','mulheradulta.png');
            } else {
                // Idoso
                img.setAttribute('src','mulheridosa.png');
            }
        }

        // Saída dos dados
        divRes.innerHTML = `Detectamos ${genero} de ${idade} anos,`;
        divRes.appendChild(img);
    }
}
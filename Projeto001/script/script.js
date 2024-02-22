function carregar() {
    // Selecionando elementos
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var body = window.document.body;

    // Pegando horario
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} Horas`;

    // Estrutura Condicional para Exibir Imagem e alterar cor de fundo
    if(hora >= 6 && hora <12 ) {
        img.src = 'images/fotomanhamedia.png';
        body.style.background = '#d6d484';
    } else if(hora >= 12 && hora <= 18) {
        img.src = 'images/fototardemedia.png';
        body.style.background = '#ea954c';
    } else {
        img.src = 'images/fotonoitemedia.png';
        body.style.background = '#171a21';
    }
}
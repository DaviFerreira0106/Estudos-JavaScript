function carregar(){
    var agora = new Date();
    var hora = agora.getHours();
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');

    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 6 && hora < 12){
        img.src = './images/fotomanha.png';
        window.document.body.style.backgroundColor = '#edd3a9';
    }else if(hora >= 12 && hora < 18){
        img.src = './images/fototarde.png';
        window.document.body.style.backgroundColor = '#f09e4f';
    }else {
        img.src = './images/fotonoite.png';
        window.document.body.style.backgroundColor = '#383c46';
    }
}
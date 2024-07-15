let valores = [2, 5, 3, 89, 6, 9];

let pos = valores.indexOf(5);

if(pos == -1) {
    console.log('Valor não encontrado!');
}else {
    console.log(`O valor 5 está na posição ${pos}`);
}

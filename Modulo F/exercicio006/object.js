let amigo = {
    nome: 'Davi',
    sexo: 'M',
    peso: 65.5,
    engordar(p = 0) { 
        console.log('Engordou!');
        this.peso = this.peso + p;
    },
}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`);

amigo.engordar(2);
console.log(`Agora ${amigo.nome} pesa ${amigo.peso}Kg`);
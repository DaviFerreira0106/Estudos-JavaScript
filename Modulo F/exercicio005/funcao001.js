function parimp(n) {
    if(n%2 == 0){
        return 'Par!';
    }else {
        return 'Ímpar!';
    }
}

let res = parimp(2);

console.log(res);
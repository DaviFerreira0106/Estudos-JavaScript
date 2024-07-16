function fat(n){
    let fat = 1
    for(n ;n > 1 ;n-- ){
        fat = fat * n;
    }
    return fat;
}

console.log(fat(5));
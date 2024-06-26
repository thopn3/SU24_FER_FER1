function sumNumbers(n){
    let sum = 0;
    for(let i = 0; i<=n ; i++){
        sum += i;
    }
    console.log(`Sum = ${sum}`);
}

function areaCircle(r){
    const PI = 3.14;
    console.log(PI*r*r);
}

sumNumbers(10);
areaCircle(5);
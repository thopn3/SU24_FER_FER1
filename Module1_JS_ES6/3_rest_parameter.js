function sumNumbers(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1, 3, 2];
console.log(`Sum = ${sumNumbers(numbers)}`);

// Su dung tham so rest
function totalNumber(...numbers){
    let total = 0;
    for (let item of numbers) {
        total += item;
    }
    return total;
}

console.log(`Total = ${totalNumber(1, 3, 2)}`);
console.log(`Total = ${totalNumber(1, 3, 2, 4, 5)}`);
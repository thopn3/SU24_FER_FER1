// Toan tu spread (toan tu rải)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, 7, 7, ...arr2, 10];
console.log(arr3);

function totalNumber(...numbers){
    let total = 0;
    for (let item of numbers) {
        total += item;
    }
    return total;
}

let numbers = [1, 3, 2];
console.log(`Total = ${totalNumber(1, 3, 2)}`);

console.log(`Total = ${totalNumber(...arr3)}`);


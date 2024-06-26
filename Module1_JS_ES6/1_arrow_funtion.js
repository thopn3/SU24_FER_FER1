// Phuong phap truyen thong dinh nghia ham
function Add(a, b){
    return a + b;
}

// Su dung arrow function dinh nghia cac ham tuong ung
let Add1 = (a, b) => a + b;

let Add2 = (a, b) => {
    if(a<=0 || b<=0)
        console.log("a, b must be greater than zero");
    else
        return a + b;
};

let showName = () => {
    let name = "Nguyen Tien Nam";
    console.log("Name is: " + name);
}

let getAge = age => console.log("Age is: " + age);

// Arrow function within Object literal
let person = {
    fName: "Tho",
    lName: "Pham Ngoc",
    fullname: () => console.log(`Fullname is:${person.fName} ${person.lName}`)
};

console.log("Add = " + Add(10,20));
console.log("Add1 = " + Add1(10,20));
console.log("Add2 = " + Add2(10, 20));

showName();
getAge(25);
person.fullname();
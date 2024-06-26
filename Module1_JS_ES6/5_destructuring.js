// Khai bao 1 doi tuong - Object Literal
const student = {
    fName: "Dung",
    lName: "Nguyen Thi",
    age: 20
};

// Khai bao 1 mang
const courses = ["FER202", "SDN301", "WDP301", "MMA302"];

// Phan ra doi tuong va mang
const {fName, lName, age} = student;
console.log(`Info: ${fName} ${lName} - ${age}`);

const [c1, c2, c3] = courses
console.log(`List of courses: ${c1}, ${c2}, ${c3}`);
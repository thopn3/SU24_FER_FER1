class Student{
    // Constructor
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }
    // Method
    showInfo(){
        console.log(`Fullname is: ${this.fName} ${this.lName}`);
    }
}

// Initialization: new Object
const stu = new Student("Duc", "Pham Tien");
stu.showInfo();
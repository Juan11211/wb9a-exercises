class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
        }

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    // The getIntro() method returns a string
    getIntro() {
        let intro =
        "Hi! I'm " + this.getFullName() + " and I am a " +
        this.jobTitle;
        return intro;
        }
}

//let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);


// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
//     console.log(`Employee ${employee1.firstName} created`); 

// console.log(`Employee ${employee1.getFullName} created`);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);

// let employee2 = new Employee(2, "Alice", "Smith", "Software Developer", 60.00);

// console.log(`Employee ${employee2.fullName} created`);
// console.log(`Job title is ${employee2.jobTitle}`);
// console.log(`Pay rate is $${employee2.payRate}`);

// employee2.promote("Senior Software Developer", 75.00);

// console.log(`Employee ${employee2.fullName} has been promoted`);
// console.log(`New job title is ${employee2.jobTitle}`);
// console.log(`New pay rate is $${employee2.payRate}`);

// let intro = employee1.getIntro();
// console.log(intro);

let employee2 = new Employee(
    1, "Juan", "Aviles", "SWE", 42.50);
    console.log(`Employee ${employee2.fullName} created`);
    console.log(`Job title is ${employee2.jobTitle}`);
    console.log(`Pay rate is $${employee2.payRate}`);

    
let intro = employee2.getIntro();
console.log(intro);
"use strict"

class Employee {

    constructor(id, firstName, lastName, jobTitle, payRate){
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
}
    let e1 = new Employee(1, "Juan", "Aviles", "Software engineer", 100)
    let e2 = new Employee(2, "Elijah", "Aviles", "Artist", 1000)


console.log(e1.employeeId)

let employees = [e1, e2]

// for(let emp of employees){
//     console.log(`${emp.firstName} ${emp.lastName}`)
// }



// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, gender, age, email, role, officeNumber) {
       super(name, id, gender, age, email, role)
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        this.officeNumber = `${this.officeNumber}`
    }
}

module.exports = Manager;


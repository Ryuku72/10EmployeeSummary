// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school, role, gender, age) {
        super(name, id, email, role, gender, age)
        this.school = school
    }
    getSchool () {
        return this.school;
    }


}

module.exports = Intern;

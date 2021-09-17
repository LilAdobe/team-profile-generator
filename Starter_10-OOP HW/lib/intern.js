const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, email, name, school) {
        this.school = school;

        super(id, email, name)

    }
    getRole() {
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;
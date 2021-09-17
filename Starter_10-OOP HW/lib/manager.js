const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        this.officeNumber = officeNumber;

        super(id, email, name)

    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;
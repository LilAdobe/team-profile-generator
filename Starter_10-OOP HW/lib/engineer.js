const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, email, name, github) {
        this.github = github;

        super(id, email, name)

    }
    getRole() {
        return 'Manager'
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;
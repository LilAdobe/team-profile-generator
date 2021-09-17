

class Employee {
  constructor(id, email, name, role) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.role = role;

  }
  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return 'employee'
  }
}

module.exports =Employee;
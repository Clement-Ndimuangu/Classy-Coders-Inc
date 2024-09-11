const { Employees } = require("./Employees")

class Manager extends Employees{
    constructor(name, title, salary, deparment){
        super(name, title, salary)
        this.deparment = deparment
    }
    static #employeesManaged = []

    getEmployeesManaged(){
        return Manager.#employeesManaged
    }
    setEmployeesManaged(employee){
        Manager.#employeesManaged.push(employee)
    }

    
}

module.exports = {
    Manager,
}
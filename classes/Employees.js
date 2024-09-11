class Employees {
    #salary
    #isHired
    static #allEmployees =[];

    constructor(name, title, salary){
        this.name = name;
        this.title = title;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployees.push(this);        
    }    

    getSalary(){
        return this.#salary;
    }

    setSalary(amount){
        this.#salary = amount;
    }

    getStatus(){
        return this.#isHired;
    }

    setStatus(command){
        if(command === "hire"){
            this.#isHired = true
        } else {
            this.#isHired = false
        }
    }   

    static getEmployees(){
        return Employees.#allEmployees;
    }

    static getTotalPayroll(){
        let salarySum = 0;

        for(let i = 0; i < Employees.#allEmployees.length; i++){
            salarySum += Employees.#allEmployees[i].#salary
        }
        return salarySum
    }

}

module.exports = {
    Employees,
}
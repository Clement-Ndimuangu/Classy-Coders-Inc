class Employees {
    #salary
    #isHired
    constructor(name, title, salary){
        this.name = name;
        this.title = title;
        this.#salary = salary;
        this.#isHired = true;
        
    }
    static #allEmployees =[];

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
}

module.exports = {
    Employees,
}
const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
const preston = new Employees("Preston", "Engineer", 100000);
preston.getSalary(); // 100000
preston.setSalary(105000);
preston.getSalary(); // 105000
preston.getStatus(); // true;
preston.setStatus("fire");
preston.getStatus(); // false;

console.log(preston.getStatus());






module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
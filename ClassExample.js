
class EmployeePayrollData{
    id;
    name;
    salary;
   
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    set setId(salary){
        this.salary = salary;
    }
    get getId(){
        return this.id;
    }
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }
    set setSalary(salary){
        this.salary = salary;
    }
    get getSalary(){
        return this.salary;
    }

}

let emp1 = new EmployeePayrollData(10,"Mehul",10000);
let emp2 = new EmployeePayrollData(20,"abc",20000);
let emp3 = new EmployeePayrollData(30, "xyz", 30000);


console.log("Before the value is set, newly createad object")
console.log(emp1);
console.log(emp2);
console.log(emp3);

console.log("Setting the value of name of object 2")
emp2.setName="pqr";
// Console logging fouth time
console.log(emp2);

// Again printing data
console.log("Priting the data after setting")
console.log(emp1);
console.log(emp2);
console.log(emp3);
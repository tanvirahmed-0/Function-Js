let baseSalary = 300;
let overtime = 10;
let rate = 5;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 300,
    overtime: 10,
    rate: 5,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage();
console.log(employee);
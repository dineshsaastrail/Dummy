1
function highestemployees(departments){
    let max = departments[0];
    for(let i =0;i< departments.length;i++){
        if( departments[i].employees > max.employees){
            max = departments[i];
            console.log(departments[i].name);
        }
    }
return max
}
const departments = [
 {name:"IT", employees:25},
 {name:"HR", employees:10},
 {name:"Sales", employees:30},
 {name:"Support", employees:20}
];
highestemployees(departments);


2
function totalorders(orders){
    let total = 0;
    for(let i=0;i < orders.length;i++){
        total += orders[i].amount;
    }
    return total
}
const orders = [
 {id:1, amount:1500},
 {id:2, amount:2500},
 {id:3, amount:1000},
 {id:4, amount:3000}
];
console.log(totalorders(orders));


3
function maxpurchase(customers){
    let max = customers[0];
    for (let i=1;i <customers.length;i++){
        if(customers[i].purchase > max.purchase){
            max = customers[i];
            console.log(customers[i].name)
        }
    }
    return max
}
const customers = [
 {name:"Dinesh", purchase:5000},
 {name:"Ajay", purchase:12000},
 {name:"Ravi", purchase:8000}
];
maxpurchase(customers);


4
function allorders (orders){
    let Small = [];
    let Large = [];
    for(let i=0; i<orders.length; i++){
        if(orders[i] < 500){
            Small.push(orders[i])
            
        }else{
            Large.push(orders[i])
        }
    }
    console.log("Small orders " + Small)
    console.log("Large orders " + Large)
    
}
const orders = [100, 600, 300, 1200, 450];
allorders(orders);


5
function OutOfStock(products){
    let count = 0;
    for(let i =1; i<products.length; i++){
        if(products[i].stock ===0){
            count ++
        }
    }return count
    
}
const products = [
 {name:"Laptop", stock:10},
 {name:"Phone", stock:0},
 {name:"Tablet", stock:5},
 {name:"Monitor", stock:0},
 {name:"Monitor", stock:0}
];
console.log(OutOfStock(products));


6
function mergeteam(teams){
    let result = [];
    for(let i=0; i<teams.length;i++){
        for(let j=0; j<teams[i].length; j++){
            result.push(teams[i][j])
        }

    }return result
}
const teams = [
 ["Dinesh","Ajay"],
 ["Ravi","Karthi"],
 ["Harish","Sanjai"]
];
console.log(mergeteam(teams));


7
function Secondhighest(salaries){
 let first = -Infinity;
 let second = -Infinity;
 for(let num of salaries){
    if(num > first){
        second = first
        first = num
    }else if(num > second && num !== first){ 
            second = num;
    }
 }
 return second
}
const salaries = [
 25000,
 45000,
 30000,
 60000,
 55000
];
console.log(Secondhighest(salaries))


8
function performance(employees){
    let count =0;
    for(let i=0;i<employees.length; i++){
        if(employees[i].rating >= 4){
            count ++
        }
    }return count
}
const employees = [
 {name:"A", rating:4},
 {name:"B", rating:5},
 {name:"C", rating:3},
 {name:"D", rating:5}
];
console.log(performance(employees))

9
function performance(marks){
    let Pass = [];
    let Fail = [];
    for(let i=0;i<marks.length; i++){
        if(marks[i] >= 35){
            Pass.push(marks[i])

        }else{
            Fail.push(marks[i])
        }
    }console.log("Pass " + Pass)
    console.log("Fail " + Fail)
}
const marks = [35,80,25,90,45,20,75];
performance(marks)

important
function totalsalary(employees){
    let IT =0;
    let HR =0;
    for(let i=0;i<employees.length;i++){
        if (employees[i].department === "IT"){
            IT += employees[i].salary;
        }else if(employees[i].department === "HR"){
            HR += employees[i].salary;
        }
    }console.log("IT " + IT)
    console.log("HR " + HR)
}

const employees = [
 {name:"Dinesh", department:"IT", salary:30000},
 {name:"Ajay", department:"IT", salary:40000},
 {name:"Ravi", department:"HR", salary:25000},
 {name:"Karthi", department:"HR", salary:35000}
];
totalsalary(employees);
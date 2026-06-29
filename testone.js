1 qus
function bestemployee(employees){
    let result = employees[0];
for(let i=0;i<employees.length;i++)  {
    if(employees[i].salary>result.salary){
        result= employees[i]
    }
}  
return result
}
const employees= [
 {name:"Dinesh", salary:30000},
 {name:"Ajay", salary:50000},
 {name:"Ravi", salary:45000}
];
console.log(bestemployee(employees));


2 qus
function Totalsales(sales, district){
    let total = 0;
    for(let i=0;i<sales.length;i++){
        if(sales[i].district===district){
            total +=sales[i].amount;
        }
    }
    return total;
}
const sales = [
 {district:"Madurai", amount:1000},
 {district:"Madurai", amount:2000},
 {district:"Chennai", amount:5000}
];
console.log("Madurai total ="+ Totalsales(sales, "Madurai"));
console.log("Chennai total ="+ Totalsales(sales, "Chennai"));



3 qus
function lowproduct(product){
let lowproduct =product[0];
for(let i=1;i<product.length;i++){
    if(product[i].stock < lowproduct.stock){
        lowproduct = product[i];
    }
}
return lowproduct.name;
}
let product=[
 {name:"Laptop", stock:20},
 {name:"Phone", stock:5},
 {name:"Tablet", stock:10}
]
console.log(lowproduct(product));


4 Qus
function removeDuplicate(customer){
  let original =[];
  for(let i=0;i<customer.length;i++){
    if(!original.includes(customer[i])){
        original.push(customer[i]);
    }
  }
  return original;
}

let customer = [101,102,103,101,104,102];
console.log(removeDuplicate(customer));


5 Qus
function Empolyeesalary(salary){
  let total =0;
  for(let i=0;i<salary.length;i++){
    total += salary[i];
  }
   let average = total / salary.length;

  console.log("Total Salary = " + total);
  console.log("Average Salary = " + average);
}
let salary = [20000,30000,40000];
Empolyeesalary(salary);



6 Qus
function Thirdlargestsales(sales){
  let First = -Infinity;
  let Second = -Infinity;
  let Third = -Infinity;
  for (let i=0;i<sales.length;i++){
    let num = sales[i];
    if(num === First || num === Second || num === Third){            //same num repeat ana
        continue;
    }if (num > First){
        Third = Second;
        Second = First;
        First = num;
    }else if(num > Second){
        Third = Second;
        Second = num;
    }else if(num > Third){
        Third = num;
    }
  }
  return Third;
}
 
let sales =[1000,5000,8000,7000,8000];
console.log("Third largest sales = " + Thirdlargestsales(sales));

7 Qus
function Countproduct(product, target){
    let count =0;
    for(let i=0; i<product.length;i++){
        if(product[i].sales > target){
        count ++}
    }return count
}
let product=[
 {name:"A", sales:100},
 {name:"B", sales:300},
 {name:"C", sales:500}
]
console.log(Countproduct(product, 200))


8 Qus

function Categorize(order){
  let smallorder = [];
  let largeorder = [];
  for(let i=0;i<order.length;i++){
    if(order[i]%2 ===0){
      smallorder.push(order[i])
    }else{
      largeorder.push(order[i])
    }
  }
  console.log("Small Orders " + smallorder);
console.log("LargeOrders " + largeorder);

}
let order =[100,200,301,450,600];
Categorize(order);

9
function Maximumpurchase(customer){
  let max = customer[0];
  for (let i=1;i<customer.length;i++){
    if(customer[i].purchase > max.purchase){
      max = customer[i]
    }
  return max

}
}
let customer =[
 {name:"A", purchase:1000},
 {name:"B", purchase:5000},
 {name:"C", purchase:3000}
]
console.log(Maximumpurchase(customer))



10
function totalemployees(Employees){
  let total = [];
  for(let i=0; i<Employees.length;i++){
    for(let j=0; j<Employees.length;j++){
      total.push(Employees[i][j])
    }
    
  }
  return total
}
 let Employees = [
 ["Dinesh","Ajay"],
 ["Ravi","Karthi"]
]
console.log(totalemployees(Employees))






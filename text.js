1
function calculateInvoice(arr){
    let total =0;
    for( let i=0; i<arr.length; i++){
        total+= arr[i];  
}return total;
}
let arr = [100, 200, 300, 400, 500];
console.log(calculateInvoice(arr));


2
function findBestSellingProduct(product){
let bestproduct = product[0];
for(let i=1; i<product.length;i++){
    if (product[i].sales > bestproduct.sales){
        bestproduct = product[i];
    }
}
return bestproduct.name;
}
let product = [
  { name: "Laptop", sales: 50 },
  { name: "Phone", sales: 80 },
  { name: "Tablet", sales: 40 }
];

console.log(findBestSellingProduct(product));


3
function printStarPattern(n){
    for (let i =1; i<=n; i++){
        let row="";
     for (let j=1;j<=i;j++) {
        row += " * ";
     }  
     console.log(row);
    }
    return n; 
}
printStarPattern(5);

4
function star(n){
    for (let i=1;i<=n;i++){
        let row ="";
        for (let j=1;j<=n-i;j++){
            row+=" ";}
            for(let k=1;k<=(2*i-1);k++){
            row +="*"
            }
        console.log(row);
    
  }
  return n;
}
star(10);


5
function calculator(num1,num2,operator){
    switch(operator){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
        default:
            return "invalid"
    }
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2



6
function countVowels(str){
    let count = 0;
    for(let ch of str.toLowerCase()){
        if (
            ch==="a"||
            ch==="e"||
            ch==="i"||
            ch==="o"||
            ch==="u"
            ){ 
                count++
            }
    }
    return count;
}

let str ="javascriptprogramminglanguage";
console.log(countVowels(str));


7
function flattenArray(arr){
    let result= [];
    for(let item of arr){
        if(Array.isArray(item)){
            for(let value of item){
                result.push(value);
            }

        }else{
            result.push(item);
        }
    }
    return result;
}
let arr = [1, [2, 3], [4,5]];
console.log(flattenArray(arr));


8
function findThirdLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i=0;i<arr.length;i++){
        let num = arr[i];
        if (num === first || num ===second || num ===third){
            continue;
        }
        if(num > first){
            third =second;
            second =first;
            first = num;
        }else if(num >second){
            third = second;
            second = num;
        }else if(num > third){
            third =num;
        }
    }
    if(third === -Infinity){
        return "third largest num does not exist";
    }
      return third;  
}
let arr =[
  145, 78, 230, 456, 12, 890, 345, 678, 999, 432,
  567, 234, 876, 321, 765, 543, 987, 654, 111, 222,
  333, 444, 555, 666, 777, 888, 1000, 1200, 1500, 1350
]
console.log(findThirdLargest(arr));



9
function even(arr){
    let count = 0;
    for (let i=0; i<arr.length;i++){
        if (arr[i]% 2===0){
            count++;
        }
    }
    return count;
}
let arr =[
  11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
  111, 122, 133, 144, 155, 166, 177, 188, 199, 200
];
console.log(even(arr));


10
function separateEvenOdd(arr){
    let even = [];
    let add = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 ===0){
            even.push(arr[i]);
        } else {
            add.push(arr[i]);
        }
    } return {even,add};
}
let arr =  [
    11, 22, 33, 44, 55, 66, 77, 88, 99, 100,
    111, 122, 133, 144, 155, 166, 177, 188, 199, 200
];
console.log(separateEvenOdd(arr));

11
function secondLargest(arr){
    let first = -Infinity;
    let second = -Infinity; 
    for (let i =0; i<arr.length;i++){
        let num = arr[i];
         if (num === first || num ===second ){
             continue;
        }
        if(num>first){
            second =first;
            first =num;
        }
        else if(num>second && num!==first){
            second=num
            
        }
        
    }
    return second;
}
let arr =[1,4,66,2,5,77]
console.log(secondLargest(arr))

12
function secondHighest(arr){ 
    let first = -Infinity;
     let second = -Infinity;
      for(let num of arr){ 
        if(num > first){ 
            second = first;
             first = num; 

        } else if(num > second && num !== first){ 
            second = num;

         } 
        } return second === -Infinity ? "No second highest" : second; } 
 console.log(secondHighest([1000,5000,3000,7000]));



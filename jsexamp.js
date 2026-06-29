// remove duplicates from array
let arr =[2,3,4,4,2,6];
let unique = arr.filter((item,index)=> arr.indexOf(item)===index);
console.log(unique);

let arr = [1,2,4,2,3,1];
let duplicate = [...new Set(arr)]
console.log(duplicate);

let arr = [1,2,4,2,3,1,5,5];
let unique = [];
for (let i=0;i<arr.length;i++){
  if(!unique.includes(arr[i])){
    unique.push(arr[i])}
}
console.log(unique);


//find the largest number in an array
let arr = [10, 5, 40, 20]; 
let max = arr[0]; 
for (let i = 1; i < arr.length; i++) { 
if (arr[i] > max) max = arr[i]; 
} 
console.log(max);


// reverse a string 1
let str = "my name is dinesh";
let reverse = str.split(" ").reverse().join(" ");
console.log(reverse);

//reverse a string 2
let str = "my name is dinesh";
let word =str.split(" ");
let rev =" ";
for (let i= word.length-1; i>=0; i--){
    rev  +=word[i]+" ";
}
console.log(word);
console.log(rev);


console.log([] == ![])//true
console.log({} == {})//false
console.log({} === {})//false


//sum of array
let Number=[1,2,3,4,5]
let total =0;
for (let i=0; i<Number.length;i++){
  total+=Number[i]
}
console.log(total)


let arr = [1,2,3,4,5];
let total = arr.reduce((sum,num) => num + sum);
console.log(total);


//count the number of vowels in a string
let str = 'dinesh'; 
let count =0;
  for (let ch of str){
    if ("aeiou".includes(ch)) count++;
  }
console.log(count)


//factorial of a number
let n=5;
let fact =1;
for (i=1;i<n;i++){
  fact*=n
}
console.log(fact)

//fibonacci series
let a=0,b=1;
for(let i=0; i<5; i++){
  console.log(a);
  [a, b] = [b, a+b];
}


//prime number 
let n=11;
let prime=n>1;
for(let i=2; i<n; i++){
  if(n%2===0){
  prime  =false
    break
  } 
}
console.log(prime)


//second largest number in an array
let arr =[1,5,2,7,3,9];
let sec=arr.sort((a,b)=>b-a)
console.log(sec[1]);


let arr=[1,4,5,3,9];
for (let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length-1;j++){
    if(arr[j]>arr[j+1]){
      let temp=arr[j]
      arr[j]=arr[j+1];
      arr[j+1]=temp;  
    }
  }
}
console.log(arr)


//count the number of words in a string
let str="name is dinesh";
let count=0
for(i=0;i<str.length;i++){
  if(str[i] === " " && str[i+1] !== " "){
    count++;
  }
}
console.log(count+1);


//count the number of characters in a string
let str = "name is dinesh";
let count = 0;
for(let i = 0; i < str.length; i++){
  if(str[i] !== " "){
    count++;
  }
}
console.log(count);


// pyramid pattern
let n = 3;

for(let i = 1; i <= n; i++){
  let row = "";

  // spaces
  for(let j = 1; j <= n - i; j++){
    row += " ";
  }

  // stars
  for(let k = 1; k <= (2*i - 1); k++){
    row += "*";
  }

  console.log(row);
}


// diamond pattern
let n=3;

for(let i=1; i<=n; i++){
  let row="";
  
  for(let j=1; j<=n-i; j++){
   row +=" ";
}
for(let k=1; k<=(2*i-1); k++){
   row +="*";
}
console.log(row)
}

for(let i=n-1; i>=1; i--){
  let row="";
  
  for(let j=1; j<=n-i; j++){
   row +=" ";
}
for(let k=1; k<=(2*i-1); k++){
   row +="*";
}
console.log(row)
}


// Print M pattern
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < n; j++) {

    if (
      j === 0 ||               // left line
      j === n - 1 ||           // right line
      (i === j && i <= 2) ||   // left diagonal (top half)
      (i + j === n - 1 && i <= 2) // right diagonal (top half)
    ) {
      row += "*";
    } else {
      row += " ";
    }

  }

  console.log(row);
}




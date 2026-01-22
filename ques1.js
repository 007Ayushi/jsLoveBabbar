console.log("Ayushi "+"vlogging");

console.log(45*2-10);



//use console.log() to display the current year.

const  currentYear=new Date();
console.log(currentYear.getFullYear());


//create two variable first and last name then concatenate and log them.
var firstName="Ayushi";
var lastName="Gupta"
//console.log(firstName+" "+lastName);
console.log(`${firstName} ${lastName}`);//using backticks

//track the value of a variable by logging it before and after updating.
var a=12;
console.log(a);
a=90;
console.log(a);



//use console.error() to simulate an error message
console.error("hey!! no error will come in ayushi's code")

//log the square of the number 12 to the console.
console.log(12*12);

//print the type of a variable holding the value true.
let num=true;
console.log(typeof(num));

//create a variable holding your age and log whether it's greater than 18.

let age=22;
if(age>18){
   console.log("Age is greater than 18");
}
else{
   console.log("no age is not greater");
}

//log the result of 100/0 and observe the output.
console.log(100/0);//Infinity


//type 2 Questions - Variables and Data Types

//Declare a variable using let and log its value.
let num1="aditi bhutni"
console.log(num1);

//create a constant to store the value of PI and log it
const PI=3.14;
console.log(PI);

//Reassign a value to a variable declared with let and log the result.
let res=10;
res=20;
console.log(res);


//check the type of null and log it.
let check=null;
console.log(typeof check);//object

///Nan === Nan -> false
//null === null-> true

//create a variable with a number as a string and log its type.
var vars="12";
console.log(typeof vars);

//use typeof to check the type of a boolean varaible.
let au=false;
console.log(typeof au);


//create three variables of types string,number, and boolean , and log their values.
let name1="ayushi Gupta",num2=7,flag=true;
console.log("name "+name1+" num2 "+num2+" "+" flag "+flag);

//Declaring a variable without assigning a value and log its type.
var fruits;
console.log(typeof fruits);//undefined

//create a variable with undefined and log its type.
var undo=undefined;
console.log(typeof undo);//undefined


//Nan- Type of Nan is number and Type of null is object


//use const to create an array.Try reassigning the array and observe the error.
const arr=[1,2,,3,4];
//arr=[10,20,30]
//console.log(arr);// Assignment to constant variable is not possible in const.
//only updation is possible in const array.


//Type 3 - Loops
//21. Write a for loop to print  numbers from 1 to 50.
// for(let i=1;i<=50;i++){
//    console.log(i);
// }


//22.use a while loop to sum the numbers from 1 to 10.
let sum=0;
let i=1;
while(i<=10){
   sum+=i;
   i++;
}
console.log(sum);

//23.Create a for...of loop to log each character of the string "javascript".
let fig="javascript"
for( let c of fig){
   console.log(c); 
}


//24.Write a for loop that skips even number between 1 and 20.
// for(let i=1;i<=20;i++){
//    if(i%2===0){
//       continue;
//    }
//    console.log(i);
// }

//25.use a do...while loop for log a number from 5 to 1.
let j=5;
do{
   console.log(j);
   j--;
}
while(j>0)


//26.Create a for loop that calculates the factorial of 5.
let fact=1;
for(let i=5;i>=1;i--){
   fact*=i;
}
console.log(fact);


//27.write a nested loop to print a 3*3 grid of numbers.
let hold=1;
for(let i=1;i<4;i++){
   let str="";
   for(let j=1;j<4;j++){
      str+=`${hold} `;
      hold++;
   }
   console.log(str);
   
}

//28.use a for loop to reverse an array [1,2,3,4].
let arr1=[1,2,3,4]
for(let i=0;i<Math.floor(arr1.length/2);i++){
   let temp=arr1[i];
   arr1[i]=arr1[arr1.length-i-1];
   arr1[arr1.length-i-1]=temp;
}
console.log(arr1);


//29.write a while loop that logs numbers from 1 to 100 divisible by 5.
 let l=1;
 while(l<=10){
   if(l%5===0){
      console.log(l);
      l++;
   }
   else{
      l++;
   }
 }

 //30.use a for...in loop to iterate over an object and log its value
 let obj={
   name:"ayushi",
   age:22,
   profession:"software engineer",
   city:"bangalore"
 }

 for(let key in obj){
   console.log(key,obj[key]);
   
 }

//4.Arrays(10 Questions)

//31.Create an array of your top 5 favorite movies and log it.
const array=["india","shershaah","dangal","3 idiots","pk"];
array.forEach(function(value){
   console.log(value); 
})

//32.Find and log the second element of an array.
console.log(array[1]);

//33.Add two new elements to the start of an array using .unshift().
// let f=array.shift(array[0]);//it removes the element from start.
// console.log(f);
array.unshift(10);
array.unshift(20);
console.log(array);

//34.Remove the last elemnet of an array and log the updated array.
array.pop();
console.log(array);//remove pk

//35.use .slice() to extract the first three elements of an array.
let slicedarray=array.slice(0,3);
console.log(slicedarray);

//36.find the index of a specified element in an array using .indexOf().
console.log(array.indexOf('dangal'))

//37.check if a value exists in an array using .includes().
console.log(array.includes('dangal'));//true
console.log(array.includes('ayushi'));//false

//38.Combine two arrays [1,2] and [3,4] using .concat().
 let ar1=[1,2];
 let ar2=[3,4];
 console.log(ar1.concat(ar2));

//39.sort an array of numbers [5,2,9,1] in ascending order.
console.log(array.sort());

//40.Write a program that creates a copy of an array without mutating the orginal.
let copy_array=[...array];
console.log("copied array is ",copy_array);


let arr3=[]
//second way of mutation the array
array.forEach(function(value){
   arr3.push(value);
});
arr3.pop();//not mutating the original array
console.log(array,arr3);

//5.Functions(10 Questions)
//41.write a function to check if a number is even or odd.

let a_check=2;
function checkoddeven(a_check){
 if(a_check%2==0){
   console.log("even");
 }
 else{
   console.log("odd");
   
 }
}
checkoddeven(a_check);


//42.create a function to calculate the area of aa circle with a given radius.
function area_circle(r){
   return Math.PI*r*r;
}
let area=Math.round(area_circle(10));
console.log(area);


//43.Write a function that accepts an array and returns 
//the sum of its elements
let sumans=0;
function sum_arr(arr4){
   arr4.forEach((value)=>{
         sumans+=value;
   })
   return sumans
}
let arr4=[10,20,30]
console.log(sum_arr(arr4));

//44.Create a function that checks if a string starts with a specific character.
function check_specific_character(str,char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(check_specific_character("Ayushi",'a'));//true


//45.write a function to find the maximum of two numbers.
function max_two(a,b){
   if(a>b)return "maximum is a-100"
   else return "maximum is b-200"
}
console.log(max_two(100,200));


//46.Create a function that takes a number and returns its factorial.
function fact_num(fact){
   let result=1;
   for(let z=fact;z>=1;z--){
      result*=z;
   }
   return result;
}
console.log(fact_num(5));

//47.write a function that accepts a string and return its reverse
function returnReverse(str1){
   //   let ans="";
   //    for(let i=str1.length;i>=0;i--){
   //          ans+=str1.charAt(i);
   //    }
   //    return ans;
   return str1.split('').reverse().join('');
}
console.log(returnReverse("ayuhsi"));

//48.Create a function to find the largest number in an array.
let arr6=[10,20,30,100]

function findMax(arr6){
   let ans=-1;
   for(let i=0;i<arr6.length;i++){
         if(arr6[i]>ans){
            ans=arr6[i];
         }
   }
   return ans;
}
console.log(findMax(arr6));

//49.Write a function that converts a string into kebab-case like hello-world
function kebab(str){
   //return str.replaceAll(" ","-")
   return str.split(' ').join('-')
}
console.log(kebab("hey everyone all"));







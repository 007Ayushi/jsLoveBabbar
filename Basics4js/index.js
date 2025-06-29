//functions:
//A block of code that fulfills a specific task

//syntax
function printCounting(){
   console.log('counting');
}

printCounting()

//why we need function 1.Reusability 2.To improve Readility 3.decrease bulkyness
//1.function declaration
//function run(){console.log("running")}

//function call or invoke


run();

//function declaration
function run(){
   console.log("running");
}

//function call or invoke
run();


//Named function Assignment
let stand=function walk(){
   console.log('walking'); 
}
stand();//walking


let jump=stand;
jump();


//Anonymous function Assignment
let stand2=function (){
   console.log("walking"); 
}

stand2();

function sum(a,b){
   console.log(arguments);
   
   return a+b;
}
//console.log(sum(1,2));
//console.log(sum(1));//Nan
//console.log(sum(1,2,3,4,5));//3 only 1 and 2 are used.

let ans=sum(1,2,3,4,5,6)//0:1 , 1:2 , 2:3 all are key-value pairs


function summation(a,b){
   let total=0;
   for(let value of arguments)
      total+=value;
   return total;
}
let ans1=summation(1,2,3,4)
console.log(ans1);

//Rest Operator
function sum(...args){
   console.log(args);
}
sum(1,2,3,4,5,6);//[1,2,3,4,5,6]

function sum1(val,num,...args){
   console.log(args);//[ 3, 4, 5, 6 ]
   console.log("val "+val+" num "+num);//1 is assigned to val and 2 is assigned to num.
}
sum1(1,2,3,4,5,6);

//default parameters
function interest(p,r=100,y=2){
   return p*r*y
}
console.log(interest(5,2,3));//90
console.log(interest(2));//400
//If i have declared r as default parameter and then
//further all the variables will be made default paramters

//console.log(interest(10,undefined,5));//10,100,5=>5000
//in place of undefined , 100 is used

//GETTER AND SETTER
//getter->access properties
//setter-> change or mutate Properties (update)

//use case: 

let person={
   fname:"ayushi",
   lname:"gupta"
};

function fullName(){
   return `${person.fname}   |    ${person.lname}`
}
console.log(fullName());
//issue->read only h

//getter and setter method
let student={
   fname:"ayushi",
   lname:"gupta",

   get Details(){
      return `${student.fname} |  ${student.lname}`;
   },
   set Details(value){
      if(typeof value !== String ){
         throw new Error("You have not sent a String");
      }
      let parts=value.split(' ')
      this.fname=parts[0];
      this.lname=parts[1]
   }
};

student.fname='kalyani sharma'
console.log(student.fname);





//spread operator as a concat use
//  let a=[1,2,3]
// let b=[4,5,6]
// let c=[...a,...b]
// console.log(c);//[ 1, 2, 3, 4, 5, 6 ]


//Error Handling

try{
   student.fname=true;
}
catch(e){
   alert(e);//e is the error
}

console.log(student.fname);

//scopes
{
   let a=10
   console.log(a);
}

{
   var o=17
}
console.log(o);

function walk(){
   var p=90;
}
//console.log(p);//not Defined


for(let i=0;i<10;i++){
   
   
}
//console.log(i);Not accessible

for(var j=0;j<3;j++){

}
//console.log(j);//3 accessible

function a(){
   const ab=5;

}

function b(){
   const ab=10;
}
//No errors


const con=10
function xyz(){
   const con=5;
   console.log(con +" : 5");//5
}
xyz()
console.log(con +": 10")//10


// if(true){
//    let o=0;
// }
// console.log(o);

if(true){
   var t=10
}
console.log(t);


//Reducing an array
let arr1=[1,-2,-3,4,5]
let res=0;

for(let value of arr1){
   res+=value;
}
console.log(res);//5

//Reduce method
let totalSum=arr1.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log("Printing total sum");
console.log(totalSum);//15




//sort 
let nums=[100,2,8,10];
nums.sort((a,b)=>a-b)//[ 2, 8, 10, 100 ]
console.log(nums);//ascending order

let nums1=[90,3,7,1,39];
nums1.sort((a,b)=>b-a);//descending order
console.log(nums1);//[ 90, 39, 7, 3, 1 ]



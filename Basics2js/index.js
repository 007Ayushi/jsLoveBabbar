console.log("Basics class 2 of js");


//object create
// let rectangle={
//    length:1,
//    breadth:2,
//    //FUNCTION DECLARED INSIDE OBJECT IS METHOD
//    draw:function(){
//       console.log('drawing rectangle');    
//    }
// };


function createRectangle(){
let rectangle={
   length:1,
   breadth:2,
   //FUNCTION DECLARED INSIDE OBJECT IS METHOD
   draw:function(){
      console.log('drawing rectangle');    
   }
};
return rectangle
}
//factory function
function createRectangle(){
return  rectangle={
   length:1,
   breadth:2,
   //FUNCTION DECLARED INSIDE OBJECT IS METHOD
   draw:function(){
      console.log('drawing rectangle');    
   }
};
}

let rectangleObj1=createRectangle();
// rectangle.length
// rectangle.breadth
// rectangle.draw()


//Factory Function
function createRectangle2(length,breadth){
   return rectangle={
      length:length,
      breadth:breadth,

      draw(){
         console.log('drawing rectangle');    
      }
   };
}
let rectangle2=createRectangle2(10,20);
let rectangle3=createRectangle2(1,2);
rectangle2.color='yellow'
console.log(rectangle2);

//This adding color and deleting is dynamic nature of objects

delete rectangle2.color;
console.log(rectangle2);






//Camelcase -> numberOfStudents
//constructor function ->Pascal Notation -> first letter of every word is Capital -> NumberOfStudent
//constructor function -> prop/methods -> initialise/Define
function Square(side){
   this.side=side;

   this.draw=function(){
      console.log('drawing');
   }
}

Square.side
//This keyword refers current object
//object creation using constructor function
//New Keyword in js used to create empty object
//let squareObject=new Square(10); //Square is constructor function here
//squareObject.draw()

//constructor property
//Objectname.constructor

// squareObject.color='yellow'
// console.log(squareObject);

//This adding color and deleting is dynamic nature of objects

// delete squareObject.color;
// console.log(squareObject);

let Square1=new Function(
   'side',
   `this.side=side
   this.draw=function(){
   console.log('drawing')}`
);
let s=new Square1(100);
console.log(s);

//pass by value -> primitive types
let a =10;
let b=a;

a++;
console.log(a);//11
console.log(10);//10
//copy of original will be passed.

//Pass by Reference-> Object
let x={value:10};
let y=x;

x.value++;

console.log(x.value);
console.log(y.value);
//changes will be done on original copy.


//Primitives are copied by their value.
//refernces are copied by their address/references.

let xy=2;
function inc(xy){
   xy++;
}
inc(xy);
console.log(xy);


let num1=10;
inc(num1);
console.log(num1);//10

function inc(num1){
   num1++;
   console.log(num1);//post inc. 11
}


//pass by Reference
let num2={value:10};
increment(num2)
console.log(num2);

function increment(num2){
   num2.value++;
}


//Iterating through Objects
let rectangle9={
   length:2,
   breadth:4
}

////For in loop
for(let key in rectangle9){
   //keys are reflected through key variable
   //values are reflected through rectangle[key]
   console.log(key,rectangle9[key]);
}

//for of -> iterables(maps and arrays)

for(let key of Object.entries(rectangle9)){
   console.log(key); 
}

for(let key of Object.keys(rectangle9)){
   console.log(key); 
}

if('color' in rectangle9){
   console.log('present');
}
else{
   console.log('absent');  
}

//Object Cloning : Important for Interviews

//This is not cloning as m and n are pointing to same value 10,
//they don't get their separate value
// let m={value:10};
// let n=m;


//method 1 : Iteration
let stud1={
   name:"ayushi",
   enroll:7
}
let stud={};
for(let key in stud1){
   stud[key]=stud1[key];
}


//printing
for(let key in stud){
   console.log(key,stud[key]);  
}

stud1.enroll++;
console.log(stud);//7
console.log(stud1);//8



//Second Method of cloning : Assign
let copy1={value:100}

console.log("assign method");
let copy=Object.assign({},stud1,copy1);

console.log(copy1);


//printing
for(let k in copy){
   console.log(k,copy[k]); 
}

//Spread
console.log("Spread method");
let dest={...stud1};
for(let key in dest){
   console.log(key,dest[key]);
}

//Garbage Collection
//Garbage Collector automatically deallocates the memory usuage of useless var/const.
//we have no control over g.c when to start/stop,runs in background





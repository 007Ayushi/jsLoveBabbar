console.log("Ayushi Gupta");
console.log("B.Tech CSE 2022-2026");

let a = true;
console.log(a);

const num=12;

//DYNAMIC TYPING
let lastName=3;

console.log(lastName);

lastName="Gupta";
console.log(lastName);

//Comparsion operators

console.log(5!==3);

console.log(2>3)

//Equality Operators

let nu=1;
let str='1'

console.log(nu==str)//true loose equality

console.log(nu===str)//false strict equality

//Ternary Operator

let age=18;
let status=(age>=18)?'I can vote':'cannot vote';
console.log(status);

//CONTROL STATEMENT
//if else if
let marks=90;
if(marks>=90){
   console.log('A');
}
else if(marks>=80){
   console.log('B');
}

else if(marks>=70){
   console.log('C');
}

else if(marks>=60){
   console.log('D');
}
else{
   console.log('E');
}


//switch case

let number=2;
switch(number){
   case 1:console.log('A');
   break;
   case 2:console.log('B');
   break;
   case 3:console.log('C');
   break;
   default:console.log('D');
}//break is use to stop the execution

for(let k = 0;k<10;  k++){
   console.log("js using for loop"+k)
}

let x=1;

while(x<10){
   console.log('js using while loop'+x);
   x++;
}

//it executes atleast one time
let i=0;
do{
   console.log('js using do while loop'+i);
   i++;
}while(i<10);


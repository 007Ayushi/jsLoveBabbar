console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(1.8));

console.log(Math.round(1.2));


console.log(Math.max(11,4,10,45));

console.log(Math.abs(-9));

//Strings : Primitive
let lastName="gupta"
console.log(lastName+" "+typeof(lastName));
//we can convert primitive string into object string 
//when we apply dot notation like -> lastName.

console.log("primitive to  reference type on string");

console.log(lastName.includes('g'));
console.log(lastName.indexOf('a'));
console.log(lastName.startsWith('ta'));
console.log(lastName.toUpperCase());
let str = lastName.replace('gupta','  javascript  ');
console.log(str.toLowerCase());
console.log(str.trimStart());

console.log(str.trim());



let msg='This is my first message';

let words=msg.split(' ');
console.log(words);


//Reference type String
let firstName=new String('Ayushi')
//new String('Ayushi') :-string constructor function  
console.log(firstName+" "+typeof(firstName));





//String Literal
let message='This is \n  \' my "first" \n message'
console.log(message);


//Topic 2 : Template Literal
let message1= `
 Hello ${firstName}
 This is 
 my first 
 template 
 literal

 Thanks for the Opportunity.....

 Regards
 Ayushi !! 
 `;

 console.log(message1);
 

 //Date and Time
let date=new Date()
console.log(date);
 
let date2=new Date('june 26 2025 1:09');
console.log(date2);

let date3=new Date(1998,6,20,5);
console.log(date3);

date3.setFullYear(2040);
console.log(date3);

//Creation OF Arrays

let numbers=[1,2,3,4,5,6]
console.log(numbers
   +"\n accesing an array"+ numbers[0]+
   "inserting into 0th index \n"+
   numbers.unshift(0)+
   "inserting in middle \n"+
   numbers.splice(2,3,10)+
   "inserting at end \n"+
   numbers.push(8)
);
console.log(numbers);


//end-> push 
//beginnig -> unshift
//middle -> splice

//searching
console.log(numbers.indexOf(10));

//we want to check if a number exist in an array
if(numbers.indexOf(10)!=-1){
   console.log("present");
}

console.log(numbers.includes(10));

console.log(numbers.indexOf(10,4));


let courses=[
   {no:1,name:'love'},
   {no:2,name:'ayushi'}
];

console.log(courses);
console.log(courses.indexOf({no:1,name:'love'}));//-1 both elements(objects) has different refernces

//Arrays is reference type contains the collection of elements.


//Callback function : A callback function is a function
//passed into another function as an argument , which is then invoked inside the outer function
//to complete some kind of routine or action.

//Suppose we have two functions funct1 and funct2 
//funct2 is placed inside funct1 and funct2 is assigned
//to carry out some action . so. the funct1 is dependent on funct2 
//funct2 is called callback function or predicate function



//course shows a single object here 
let course=courses.find(function(course){
   return course.name === 'love';
})
console.log(course);


//second way to write callback function

let course1=courses.find(course=>course.name=='Love');
console.log(course1);

//Removing Element

//end->pop()
//beginnning->shift()
///middle->splice() splice(3,1):-3 shows index and 1 shows no. of element u want to dlt

let number=[1,2,3,4,5,6,7];
number.pop()
console.log(number);
number.shift();
console.log(number);

number.splice(2,3);
console.log(number);


//Emptying an Array

let number1=[1,2,3,4,5]
let numbers2=number1 
// they are pointing to same array when 
//number1 is assigned to empty array only number1 will
//point to empty array while numbers2 will point to previous 
//number1 array

number1=[];

console.log(number1);
console.log(numbers2);


//best way to empty the array
//Method 1 : using length
number1.length=0;
numbers2.length=0;
console.log(number1);
console.log(numbers2);

//Method 2 : Using splice
number1=[10,20,30]
console.log(number1);

number1.splice(0,number1.length)
console.log(number1);

//Method3:pop()
number1=[10,20,30]
console.log(number1);
while(number1.length>0){
   number1.pop()
}
console.log(number1);

//Combining and Slicing Arrays

let first=[1,2,3]
let second=[4,5,6]
let third=first.concat(second)
console.log(third);

let part=third.slice(2,5);//start->2 and end->3 , 3 is excluded
console.log(part);//[ 3, 4, 5 ]


let slice=third.slice(2);
console.log(slice);//[ 3, 4, 5, 6 ]

slice1=third.slice()//full slicing -> copy bnti hai
console.log(slice1);



//Spread Operator
let one=[11,22,33];
let sec=[44,55,66];
let com=['one',...one,'sec',...sec]
console.log(com);//[ 11, 22, 33, 44, 55, 66 ]


//copy of combined array has created
let another=[...com]

//Iterating an Array
let arr=[19,23,94,56];
// for(let val of arr){
//    console.log(val);
// }

//forEach loop
// arr.forEach(function(num){
// console.log(num)
// }
// )


arr.forEach(num=>console.log(num))

//Joining Arrays
let arr1=[10,100,1000,10000]
const joined=arr1.join(',');
console.log(joined);

let str1='You can do it, work Hard!!';
let parts=str1.split(' ')
console.log(parts);

let combined1=parts.join('_');
console.log(combined1);


//Sorting Arrays
let arr3=[99,2,8,-1,6,-10];
console.log(arr3.sort());

console.log(arr3.reverse());

//Filtering Arrays
let filt=arr3.filter(function(val){
   return val >= 0
});

console.log(filt);

let fil=arr3.filter(val=>val>=0);
console.log(fil);

//Mapping Arrays: used to map each element of array to something else.
let maparray=arr3.map(val=>'student_no'+val);
console.log(maparray);

//Mapping with Objects
let numb=[1,-9,3,8,-10,34];

let filtered=numb.filter(value=>value>=0);
console.log(filtered);

// let items=filtered.map(function(num){
//    return {value:num};
// })

let items=filtered.map(num=>({value:num}));// Use parentheses () to wrap the object

console.log(items);


//chaining

let koko=[1,-2,9,-3,87,2];

let item=koko
         .filter(value=>value<0)
         .map(num=>({value:num}));

console.log(item);
         
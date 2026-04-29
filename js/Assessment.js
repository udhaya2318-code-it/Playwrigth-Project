//1 javascriot is the high level programming language, js develeped by Brendan Eichin the year 1995

//2 Javascript is a light weight programming language compare to other programming and it can runs in multiple os and it it execute the code line by line 



//3 Difference between VAR, LET, CONST?  
   // VAR is the one of the variable Keyword in js it used to hold data that we can reuse and update later in the program and i allows to re declaration and rer assignment 
   // LET is the another type of variable keyword in js it also used to hold data but in this we cant re-declar but we can re-assign the data
   //CONST ina the another type of variable keyword in js in thes we cant re-declar or re-assign the data  

//4 Where is JavaScript used?

//5 What are data types in JavaScript?
  //we have 2 types of data types they are primitive and non primitive 
  //in primitive Number, String, Boolean, undefined, Null, Nan(not a number)
  //non primitive Array, Object and Functions 

//6 What is undefined vs null?
   //null denotes if there is no value is consider as null
   let y=null 
 console.log(y)
   // undefined if the variable is declered but there is no execution value is given means it will writen as unverified
   let x
   console.log(x)

//7  What is a function in JavaScript?
   //function is the reuseble code to perform specific task and it will take input perform and return output 

function greet(){
    console.log("hello world")
}
greet()

console.log(typeof greet)

//8 What is an array in JavaScript?
 //array is use to store multiple variable in orsder each item as an index starts from 0

 var arr =[10,20,30,"udhaya", true]

 //9 How to find array length?
   // using length keyword

 console.log(arr.length)

 //10 How to access array elements? 
  // we can access array elements using index with Square brackets

  console.log(arr[3])

  //11 Difference between array and object?
     // array is used to store multiple values in order uses index number starting with 0 
      var arr1 =[10,20,30,"udhaya", true]
      console.log(arr1[2])

     //objectis use key name insted of index 

      var room = {
        student1 :"udhay",
        student2 :"bala"

      }
      console.log(room.student1)

//12 Difference between pop() and shift()?
//pop removes last character of array

arr.pop()
console.log(arr)

// shift remove first character of the array
arr.shift()
console.log(arr)

//13 Difference between push() and unshift()?
   //push is used to add more value in string 

   arr.push(100,200,300)
   console.log(arr)

   // its used to add more value but is used to shift the order 
   arr.unshift(101,"javascript", false)
   console.log(arr)

// 14 What is slice()? Difference between slice and splice?

// Slice is used to have the particular value using starting and ending index of the string 

console.log(arr.slice(0,8))

   // Splice is used to delete the other values except we selected

console.log(arr.splice(1,2))   

//15 How to sum array values using reduce()?
 let num = [10,20,30,40]
 let add = num.reduce(function(a,b){
    return a+b
 })
 console.log(add)

 //16 How to remove duplicate values from an array?


let arr5=[10,20,20,30,40]
let nodup = [...new Set(arr5)]
console.log(nodup)



 //17 How to sort an array in ascending and descending order?

 var arr3 = [10,50,30,40,90,20]

 var asc = arr3.sort(function(a,b){
    return a-b
 })
 console.log(asc)

 //18 Difference between for of loop and forEach()? 

 let arr4 = [10, 20, 30];

for (let value of arr4) {
  console.log(value);
}



//for each 

arr4.forEach(function(v,i,a){
    console.log(v.i,a)
})
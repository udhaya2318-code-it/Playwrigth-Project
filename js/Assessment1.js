//1 What are the features of JavaScript ?  
  // javascript is a light weight programming language compare to other programming language and it can runs in multiple os and also exicute the code line bye line 

//2 What is the difference between var, let, and const in JavaScript?
  //// VAR is the one of the variable Keyword in js it used to hold data that we can reuse and update later in the program and i allows to re declaration and rer assignment 
   // LET is the another type of variable keyword in js it also used to hold data but in this we cant re-declar but we can re-assign the data
   //CONST ina the another type of variable keyword in js in thes we cant re-declar or re-assign the data  

 //3   What is hoisting in JavaScript variables? 



 //4 Is it possible to declar the same variable name twice with var? What about let?
  //yes we can in var we can re assign and re declar but in let we can re - declar but we cant re-assign

//5 What will be the output? 

 console.log(a);
    var a = 10;

    //out put is unverifed because executions runs befor the declaration 
    
//6 List all the primitive and non-primitive data types in JavaScript?

 //inrimitive Number, String, Boolean, undefined, Null, Nan(not a number)
  //non primitive Array, Object and Functions 

//7 What is NaN in JavaScript? Give an example where it appears?
  // Nan stands for not a number if we are doing any numerical equation to string it will give as Nan 

  //eg  
   let b ="hii" -1
   console.log(b)

//8  What is difference between Undefined and Null ? 
   
//null denotes if there is no value is consider as null
   let y=null 
 console.log(y)
 
 // undefined if the variable is declered but there is no execution value is given means it will writen as unverified
   let x
   console.log(x) 


//9 Difference between push() and unshift()?
   //push is used to add more value in string 
 var arr =[10,20,30,"udhaya", true]
   arr.push(100,200,300)
   console.log(arr)

   // its used to add more value but is used to shift the order 
   arr.unshift(101,"javascript", false)
   console.log(arr)
  

//10  What is the difference between slice() and splice()?


// 11 
let arr1 = [1, 2, 3, 4];
arr.pop()
  
    console.log(arr1);
	//What will be the output? [1,2,3,4] without assigning any variable name to save ther is no change in output

// 12 How do you convert [1, 2, 3] into "1-2-3" using an array method?



//13 Use reduce() to calculate the sum of [10, 20, 30, 40].

let num = [10,20,30,40]
let add = num.reduce(function(a,b){
  return(a+b)
})
console.log(add)


// 14 







//15 How do you remove duplicates from [1, 2, 2, 3, 4, 4]


let arr3 =[1, 2, 2, 3, 4, 4]
let nodup = [...new Set(arr3)]
console.log(nodup)

   

//17 Remove 30, 40 elements from an array [10, 20, 30, 40, 50, 60]

 var arr4 = [10, 20, 30, 40, 50, 60]
 arr4.splice(2,2)
 console.log(arr4)

 //18 Add the new values 4,5,6 to the array in an index 3 [1, 2, 3, 7, 8, 9] 

 var arr5 = [1, 2, 3, 7, 8, 9]
 arr5(3,0) + (4,5,6)
 console.log(arr5)

  

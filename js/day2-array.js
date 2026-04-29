//ARRAY 
//Index starts from 0,1,2,3,..
//LEngth strts from 1,2,3,4...

var arr = [10,20, "Javastript", true ]

console.log(arr)
console.log(arr.length-1)  //property 

console.log(arr[2])
console.log(arr[0])
console.log(arr[100])  // Unknown index 


// PUSH 

var arr = [10,20,30,40]
arr.push(100,200,300)
console.log(arr)  //Srpead


var str ="javastript"
console.log(...str)


//pop 
console.log("...pop...")
 arr.pop()
 console.log(arr)


 //Shift 
 var arr =[100, 200, 300, 400]
 arr.shift()
 console.log(arr)



 //Unshift 
 arr.unshift(101,"javascript", 101,102,true)
 console.log(arr)

 //To string 
 var arr =["javascript", 101.102,true ]

var str = arr.toString()
console.log(str)


//reverse 
console.log(arr.reverse())


//Join 
var arr =[10,20,30,40]
var str =arr.join(", ")
console.log(str)

// concat

var arr1 =[1,2,3]
let arr2 =[3,4,5]
console.log(arr1.concat(arr2))
console.log(arr1,arr2)
console.log(arr1 + arr2)
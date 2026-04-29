//OPERATORS 

// 1 Arithmetic 
 var a = 10
 var b= 20 
 
 var c= a+b
 console.log(c)

 var c = a- b
 console.log(c)
  
 
  var c= a*b          
  console.log(c)
  
  var c = a/b          //Quotient
  console.log(c)

  var c =a%b           //Remainder
  console.log(c)

  var c =a**b          //Power root
  console.log(c)


  //2 Assignment = 

  var a= 10
  var b= 20

  a = a+b     //a = a+b = 30
  console.log(a) 

  a =a-b      // a = 30 - 10 = 20 
  console.log(a)

  a = a* b   // a = 20*10 =200
  console.log(a)


  a/=b
  console.log(a) // a=200 /10 =20 

  a%=b 
  console.log(a)  // a=20%10 = 0

  a **=b 
  console.log(a)  // 0 * 0* 10 times 


  //3 Comparision

  var a = 100
  var b = "100" 

  console.log(a==b)    // it will check looselY content value 
  console.log(a===b)   // it will check strightly typeof value 


  console.log(a<b)
  console.log(a<=b)

  console.log(a>b)
  console.log(a>=b)

  console.log(a!=b)
  console.log(a!==b)


  //4 Logical 
  // && AND, || OR, ! NOT


//AND

   input =36
  if(input>=18 && input<=57){
    console.log("Eligible")
  }
  else{
    console.log("Not eligible")
  }


  //OR

   input =18
if(input ==18 || input ==="18"){
    console.log("True")
}


// NOT

let age= true 

if (!age){
    console.log("value")
}
else {
    console.log("Not a value")

}


//5 Unary 
//pre - INcrement / decrement 

var a= 100 
console.log(++a)
console.log(++a)
console.log(--a)


// post - INcrement / decrement 
var b =2000

console.log(b++)
console.log(b)
console.log(b--)
console.log(b)

//6 Ternary ?
let abc =23

let x = (abc ==18 ) ? true : (abc == "23") ? "Yes" : "No"
console.log(x) 
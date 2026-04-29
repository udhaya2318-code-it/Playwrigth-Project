// Basic functions // Declaration functions 

//without param

function greeet(){
    console.log("Hii udhay")

}greeet()


//with param 

function isEven(num){
    return num ==20
}

console.log(isEven(10))
console.log(isEven(20))

//Multi Param 

function isPositive(a,b,c){
    return a+b+c

}
console.log(isPositive(2,3,4))

//Default 

function deflt(name= "ai"){
    console.log("hi",name)

}
deflt()
deflt("ram")


//2 Expression Function

//Without parm 
let a1 =function(){
    console.log("this is expression Function")

}
a1()

//With param

let a2 = function(num){
    console.log(num*5)

}
a2(3)


//Multi Param 
let a3 = function(l,b,h){
    return l*b*h
}
console.log(a3(100,200,300)) 

//default 
let a4 = function(name = "Gest User"){
    console.log("hi", name)

}
a4()
a4("bala")

// Arrow Function 

//without 

let b1 =() =>{


    console.log("hii ther")
} 
b1()

//with param

 let b2 =(a)=> console.log(a*20)

//multi param

let b3 =(l,h,b) => {
    return l + h - b

}
console.log(b3(100,120,50))



//ex : without return keyword
//b3 =(i,h,b) => i+b+h
//multi param 

let b6= (name="arrow")=> console.log("hi",name)


b6()
b6("arun") 

//Annonymous Function 

console.log("Start")

setTimeout( ()=>{
    console.log("Midle")
}, 2000 )

console.log("End")

// 5 Call Back 

function redmi(){
    console.log("Indias best Mobile" )

}

function vivo (call){
    console.log("Indias 200mp camera")  



}

vivo(redmi())



// another way 


function  jack(val, name){
    console.log("hi", val)
    name()
}

function john(){
    console.log("this is call back")
}
jack ('Rose', john)

//IIFE - Immidiate invoked Function Expression  (its run only if ther is no code before or after)

//(Fuction(){
//let secretkey == "test123"
//console.log("Sectetkey is hidden")
//})()

//Recursion 

//5! => 5*4*3*2*1!

function fact(num){

    if(num ==1 ){
        return 1 

    }

     return num*fact(num-1)
}

console.log(fact(5))

//num 5* (5-1)4 =20
//num 20* (4-1)3 = 60
//num 60* (3-1)2 = 120
//num 120* (2-1)1 =120










































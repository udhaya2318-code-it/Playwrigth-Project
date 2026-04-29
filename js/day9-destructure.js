// 1  BASIC 
var arr =[10,20,30,40]
var [a,b,c,d] = arr 

console.log(a)
console.log(b)



//2 Skip 

var arr= [100,200,300,400,500]

var [a, ,c, , e] =arr 

console.log(a)
console.log(b)
console.log([a, ,c, , e])



//3 REST...


var arr = [101,102,103,104,105,106,107]

var [a,b,c,d, ...e] = arr 

console.log(a)
console.log(b)
console.log(e) 


//4 Speard ...
console.log(...e)



////5  Swap 

let abc =111
let xyz = 222;

[abc,xyz] =[ xyz, abc]

console.log(abc)  


//error  

try{
    let min = 18

    if (min <=17 && min >=1){
        throw " Invalin Input"
    }else if(min === ""){
        throw " Kindly enter required field"

    }else if (isNaN(min)){
        throw "MissMatch Values"
    }else{
        console.log("Thank You!")
    }
}catch (err){
    console.log(err)
}

//ReferenceError
//TypeError
//SyntaxError
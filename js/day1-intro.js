


//Single Comment line 
/**
 * multi 
 * line
 * 
 */

// Fixed values
console.log(1234) // number 
console.log("Javascript") //String
console.log(true) // boolean 
console.log([10,20, "Playwright", false ])  //Array
console.log({name: " udhay", day :1 , cource: true}) //object

//Variable values 
//var function scope 
 var a = 10;   // re declaration is allowed 

 var a = 20;   // re assignement ia allowed 

 a=30;
 console.log(a)


 // LET - block Scope 

 let b = 100 

 //LET b= 200       // RE- declaration is not allowed 

 b=300
 console.log(b)    // re- Assignement is allowed


  // CONST - Block & Imutable 

  const c = 1000    // RE- declaration is not allowed 

  // c= 3000          re- Assignement is not  allowed



  // DATA TYPE 
  // PRIMITIVE - IMUTABLE (Canot be change) - STACK MEMORY 


  // number 
  var num = 101
  console.log(num)

  // String 
  var str ="UDHAY"
  console.log( typeof str)  // typeof shows its type 

  //  Boolean
   var boo = true
   console.log( typeof boo)

   // null
    var n = null 
    console.log(typeof n )

// undefind 
     var u 
     console.log (typeof u)


  //SPECIAL TYPE

   // NAN - Not a Number
    var na = "HIIII" -3
    console.log(typeof na)

    //Infinity 
    var inf =1000**1000
    console.log(inf)


    // NON - PRIMITIVE Mutable (can be change ) HEAP MEMORY
 
    // array 
    var arr =[10,20, "UDHAYA", true]
    console.log(typeof arr)


    // object
    var ogj ={

        company: "techM" ,
        emp : 123 ,
        Status : true ,
    }
    console.log(typeof obj)
 


    // function 

    function greet(){
        console.log("HEllo world")
    }
    greet(
        console.log(typeof greet)
    )

    // Slice - based on string index between ending index +1 

    var arr =[ 100, 200, 300, 400, 500, 600,700]

    var str =arr.slice(2,5)
    console.log(str)

    //Map - Transformatter 
    var arr = [4,9,16,25,36,49.789, "javascript", true]
    var str = arr.map(Math.sqrt)
    console.log(str)
    
    var str = arr.map(function(v,i,a){
        return v + 5 

    })

    console.log(str)

    //Filter 

    var arr =[1,2,3,4,5,6,7,8,9]

    var str = arr.filter(function(v){
        return v% 2==0
    })
    console.assertlog(str)


    // Reduce 
    var arr = [10,20,30,40]

    var str =arr.reduce(function(num1 , num2 ){
        return num1 + num2
    }, 10 )
    console.log(str)

    //num1 0 + num2 10 =10 
    //num1 10 + num2 20 =30 
    //num1 30 + num2 30 =60 
    //num1 60 + num2 40 =100 



    // Values
    
var arr =[10,20,30,40]
var str = arr.values()

for (const element of str) {
    console.log(ele + 5)
    
}

// for (count ele of str){
//     console.log(ele + 5)

//}

// for each 
arr.forEach(function(v,i){
    console.log(i)
})


//sort 
 var arr = [11,2,9,21,87.-46,54,32,23]

 var asc = arr.sort(function(a,b){
    return a-b
 })
 console.log(asc)


 //a 11 - b 2 =9 (swap)
 //a 11 - b  9 =2 (swap)
 //a 11 - b 21 = -10 (no swap)


 var dec = arr.sort(function(a,b){
    return b-a
 })
 console.log(dec)

 // Splite - based on string index , delete count , ...values 
 var arr =[10,20,30,40,50,60,70]

 //remove 
 arr.splice(2,3)
 console.log(arr)

 // update 

 arr.splice(2,1,100,200,300)
 console.log(arr)

 // add
  arr.splice(3,0,"javascript", "Playeright")
  console.log(arr)
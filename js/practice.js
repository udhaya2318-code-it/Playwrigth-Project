console.log("Udhay")
console.log(10)
console.log(true)

var a =10
var b =20
var c= a+b
console.log(c)


var arr = [10,20, "Javastript", true ]

arr.pop()
console.log(arr)


var arr =[100, 200, 300, 400]
arr.shift
console.log(arr)




let prom2 = new Promise((resolve,reject)=>{
    let paymentStatus = true 

    if(paymentStatus){
        resolve("think you promise")
    
    }else{
        reject("Rejected")
    }
})

prom2.then((res)=>console.log(res))

.catch((rej)=> console.log(rej)) 

Promise.all([
    Promise.resolve("Start"),
    Promise.reject("Middle"),
    Promise.resolve("End")
]).then((res)=> console.log(res)).catch((er)=> console.log(er))



//Promise in object

//Promises will handle Asynchronous opperations like API calls, file loading, time delay easier.
//Think of promises ia a placeholder that value ill be available in the future 
//it will run 3 status: RESOLVE , REJECT ,PENDING

 let promt1 = new Promise((resolve, reject)=>{
    let paymentStatus = false 

    if(paymentStatus){
        resolve()
    }else{

        reject()
    }
    })

    //Console.log(prom1)

    //Hoisting 
    // promt1.then(success).catch(fainode led).finally(()=>console.log("This is Final"))

    function success(){
        console.log("i got a payment!")

function failed(){
    console.log("i did not received")
}    }


//Approach -2 
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

//PROMISE ALL 
Promise.all([
    Promise.resolve("Start"),
    Promise.reject("Middle"),
    Promise.resolve("End")
]).then((res)=> console.log(res)).catch((er)=> console.log(er))


//PROMISE ALL SETTLED
Promise.allSettled([
    Promise.resolve("Morning"),
    Promise.reject("Evening")
]).then((res)=> console.log(res)).catch((er)=>console.log(er))


//PROMISE RACE
Promise.race([
    new Promise((res)=> setTimeout(res, 1500, "Race1" ) ),
    new Promise((res,rej)=> setTimeout(rej,3000," Race 2")), 
    new Promise((res)=> setTimeout(res,2000,"Race3"))
]).then((res)=> console.log(res)).catch((er)=>console.log(er)) 





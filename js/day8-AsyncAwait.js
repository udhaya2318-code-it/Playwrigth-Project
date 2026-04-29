//async is a keyword. It will make a function and return a promises.
//Await is a keyword. It will pause the ecxecution of Promises untill resolve or reject 


async function fetchData(){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            //Resolve ("this is Async!")'
            reject(new Error("Network Issue"))
        },3000)

    })
}

//Console.log(fetchData())

async function display(){
    console.log("hii")

    try{

        const dt = await fetchData()
        comsole.log(dt)

    }catch(err){
        console.log(err)
    }
    console.log("bye!")
}
display()
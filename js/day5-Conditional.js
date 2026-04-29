//CONDITIONAL STATEMENT

//IF, ELSE IF, ELSE, Switch, Break, Return 

let mark =35;

if(mark <=100 && mark >=80){
    console.log("GRADE A")
}

else if(mark<= 79 && mark >=60){
    console.log("GRADE B")
}

else if(mark<= 59 && mark>=35){
    console.log("GRADE C")
}

else{
    console.log("FAILED")
}

// SWITCH

switch (day =3){
    case 1:
    console.log("Monday")

    case 2:
    console.log("Tuesday")

    case 3:
    console.log("wednesday")
    break

    case 4:
    console.log("Thursday")

    default:
    console.log("Weekend")

}


// Loop - FOR, WHILE, DO WHILE

// FOR - Initialization ; Condition ; Incre/ Decre 
console.log(" ....FOR....")

for(let i=1 ; i<=10; ++i){
    console.log(i)

}

console.log("....WHILE...")
let j=1 

while(j<=10){
    console.log(j)
    j++
}

console.log("...DO WHILE...")
// Initialization ;
// Incre/ decrese
// Condition;


let K =1 

do{
    console.log(k)
    k++
}
while(k <=10)




// For Methords 


console.log("...FOR OF...")

//FOR OF

let arr =[100,200,"Javascript", true]

for(const val of arr){
    console.log(val)
}

//For EACH
console.log("...FOR EACH...")

arr.forEach(function(v, i, a){
    console.log(v, i, a)
})



//FOR IN 
console.log("...FOR EACH...")

var obj = {Company : "MTech", emp : "123", job : QA}

for(const Key in obj){
    // console.log(key)
    //console.log(obj[key])
    console.log(key  , "=", obj[key])
}


console.log("...Continue...")

//Continue 

for(let a=1; a<=10; a++){
    if (a==6){
        continue
    }
    console.log(a)
}


console.log("...Nested Loop...")

//Nested Loop

for(let i=1; i<=5 ; i++){

    for(let j=1; j<=5; j++){
        console.log(i,"==", j)
    }
}



//Star 

for(let i=1 ; i<=5; i++){

    let row =" "
    for(let j= 1; j<=5; j++){
        row=" * " + row
        console.log(row)
    }
}
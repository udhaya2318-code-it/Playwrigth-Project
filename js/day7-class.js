// OBJECT 

// approach - 1

let obj1 ={
    name : "ravi",
    age :23 ,
    course : true,

    abc :function(){
        console.log("hello world!")
    },

    object :{company :"Mtech", empId: 123 , job :true }
}
console.log(obj1)

//Dot Notation

console.log(obj1.name) 

//Brace Notation

console.log(['age'])

//Chaining 
console.log(obj1.object.empId)

//Add 
obj1.xyz =[10,20,30]
console.log(obj1)

//Update
obj1.name ="tej"
console.log(obj1)

//Remove 
delete obj1.course
console.log(obj1)


// Appraoch -2

let obj2 =new object()

obj2.name = "Eswaar"
obj2.age = 18
obj2.course = true 
obj2.abc = function(){
    console.log("thos is object")

}
obj2.arr =[102,102,103]
obj2.object={company :"Apple", empId :123 , job : true}

console.log(obj2)
console.log(obj2.name)  

// Class - Base , Parent , super 
// class is a template / blueprint of properties and methods.
//constructor - is a special method . use to store objects 
//THIS - is a keyword. use to access current class properties and methods actions 

class user1{

    constructor(user){
        this.user = user 
        this.amount = 10000
    }
    logIn(name){    //camelcase
       console.log("hi", name, "Welcome")// localvariable
    }  

    logOut(){
        console.log("Thanks for thr visit ", this.user)  //globalVariable
    }

    payment(){
        console.log("we Received", this.amount, "From you")  // fixedVariable
    }
      
}


const p1 = new user1("Ravi")
p1.logIn("vikram")
p1.logIn("Sarath")
p1.payment
p1.logOut


//Class - DERIVED, CHILD, SUB
//STATIC -is a keyword. use to access unique / same value instance.
//Static - variable , methord. use to access parent class properties and methods


class User2 extends User1{

    constructor(){
        super()
        this.count = 0
        User2.userCount++
    }

    FectchData(){
        console.log(`Your Web App UserID's Count:${++this.count} `)
    }
    static display(){
        console.log("Your Tor=tal count :", User2.usersCount)
    }
} 

const p2 = new User2()

p2.FectchData()
p2.FectchData()
p2.FectchData()

User2.display()
User2.display()

const p3 =new User2()
User2.display()

const p4 = new User2()
User2.display()
User2.display()

p4.login("Bala").payment()



 /**
  * IN JS ,OOP has 4 Piillers:
  * 
  * 1. Encapsulaton
  *      - Wrapping data + methods together inside a class.
  * 
  * 2.Abstraction
  *      - Hide internal implementation. 
  * 
  * 3. Inheritance 
  *      - One class inherits properties & methords from another. 
  * 
  * 4. Polymorphism 
  *      - Same methord name, different behavior, 
  * 1. Method OverLoading - not Possible 
  * 2.Methord OverRiding
  * 
  * 1 Constructor 
  * -   A constructor is a Special function used to create an initialize objects.
  * 
  * 
  */

 
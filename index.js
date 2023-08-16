// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2*PI*radius;

// console.log("The circumference is : ",circumference);


//calculate square root
// let a;
// let b;
// let c;
// document.getElementById("btnsubmit").onclick = function()
// {

//     a=document.getElementById("txta").value;
//     a=Number(a);

//     b=document.getElementById("txtb").value;
//     b=Number(b);

//     c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

//     document.getElementById("lblc").innerHTML= "Side C: " + c;


// }

//slice()
// let fullName ="Chamika Dulaj";
// let firstName;
// let lastName;

// firstName=fullName.slice(0,fullName.indexOf(" "));
// lastName=fullName.slice(fullName.indexOf(" ")+1);

// console.log(firstName);
// console.log(lastName);


// const greeting = (username,age) => console.log(`Hello ${username} ${age}`);

// greeting("bro",12);

// let grades =[100,50,90,60,80,7,0];

// grades.sort((x,y) => y-x);
// grades.forEach((element) => console.log(element));

// ======> MAP

// const store = new Map([
//     ["tshirt",20],
//     ["jeans",40],
//     ["socks",10],
//     ["shoes",100]

// ]);

// let shoppingCart = 0;
// shoppingCart += store.get("tshirt");
// shoppingCart += store.get("jeans");

// console.log(`your cost ${shoppingCart}`);

// //set method
// //store.set("hat",40);

// store.forEach((value, key) => console.log(`${key} $${value}`))


// ================> object

// const car = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     break : function(){
//         console.log("You step on the breaks");
//     }
// }
// console.log(car.model);
//car.break();

//  const car = {
//     model:"Mustang",
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log(`You drive the ${this.model}`);
//     },
//     break : function(){
//         console.log("You step on the breaks");
//     }
// }
// car.drive();

class car {
    constructor(model,year,color)
    {
        this.model=model;
        this.year=year;
        this.color=color;
 
    }
}
 const car1 = new car("Mustang",2023,"red");
 const car2 = new car("BMW",2023,"yellow");
 const car3 = new car("Lambo",2023,"blue");

 changeColor(car2,"black");
 displayInfo(car2);
 changeColor(car2,"pink");
 displayInfo(car2);

 function displayInfo(car) 
 {
    console.log(car.model);
    console.log(car.year);c
    console.log(car.color);

 }

 function changeColor(car,color)
 {
    car.color=color;
 }
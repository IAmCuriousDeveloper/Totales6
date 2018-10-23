// A R R O W    F U N C T I O N ===========================================
//also known as fat arrow function

foo = () => 2;

function foo() {
    return 2;
}

//Those two above function are same 1st one is arrow function

//variation of arrow function

() => 3; //anonymous function return 3
x => 3; //anonymous function takes x as a parameter and return 3.
(x, y) => 3 //when we have 2 or more parameter we need bracket

x => {
    var x = 2
    return 3
};
//if we have a multiple line statement then we have to write return keyword,coz there is no implicit return inside curly braces.

x => ({
    y: x
}); // if we want to return the object we need braces;

//by default arrow function are anonymous function.
//but we can assign them in some variable and name them

var foo = x => 3;

foo.name = "foo";

//ARROW FUNCTION ON P R O M I S E S =======================================

p.then(function extractid(v) {
    return v.id
});

p.then(v => v.id) //what if v is null or undefined ? it returns an error with anonymous function which in turn is hard to debugg.@production code

var obj = {
    id: 7,
    foo: function foo() {
        setTimeout(() => {
            console.log(this.id);
        }, 2000);
    }
}

obj.foo(); //7

//this is the place where arrow function use .coz arrow function does not have this keyword binding so it uses lexical scope and use the id variable inside obj.

var obj = {
    id: 7,
    foo: function foo() {
        setTimeout(function () {
            console.log(this.id);
        }, 2000);
    }
}

obj.foo(); //undefined

//that doesnot work , to work the above code we can use bind operation or explicitly save the "this" keyword to another variable and use that variable to reference the id property.


//examples

//i have a array with some names on it and i have to add the surname/lastname to it 

const names = ['Prashant','Priyanka','Pratik'];

const fullnames = names.map(function(name){
    return `${name}  Rawal`
});

console.log(fullnames) // ARRAY WITH FULLNAMES

//ABOVE IN ARROW FUNCTION
const names = ['Prashant','Priyanka','Pratik'];

const fullnames = names.map((name) =>{
    return `${name}  Rawal`
});

console.log(fullnames) // ARRAY WITH FULLNAMES

//MORE SHORT FORM 

const names = ['Prashant','Priyanka','Pratik'];

const fullnames = names.map(name =>`${name}  Rawal`);

//IF WE ARE USING SINGLE PARAMETER IN THE FUNCTION THEN WE DON'T NEED PARENTHESIS AND LOOK WE ARE NOT USING CURLY BRACES WITH THE FUNCTION ALSO THIS CAUSE IMPLICIT RETURN WITHOUT THE RETURN KEYWORD.
console.log(fullnames) // ARRAY WITH FULLNAMES



//2 IMPLICIT RETURN OBJECT 

const exam = 'Gate';

const students = ['Prashant' ,'Shravan', 'Arvind'];

const clearexam = students.map((student,place) => ({name: student, exam, place:place+1}));

//to implicit return object wrap the object into another wrapper (i.e) another bracket;
//another thing is i have used the concise es6 property on object in exam ,because exam property has the same name and value;

console.table(clearexam);
//0: {name: "Prashant", exam: "Gate", place: 1}
// 1: {name: "Shravan", exam: "Gate", place: 2}
// 2: {name: "Arvind", exam: "Gate", place: 3}
// length: 3
// __proto__: Array(0)


//3  default function argument

//lets calculate the bill

function calculatebill(total,tax,tip){
    return total + (total * tax) + (total * tip);
}

const totalbill = calculatebill(100,.25,.10);

console.log(totalbill);// 135

//suppose we want to fix the taxes then


function calculatebill(total,tax = .25,tip){
    return total + (total * tax) + (total * tip);
}

const totalbill = calculatebill(100,undefined ,.10);

console.log(totalbill);// 135
//see if we dont provide the valid argument at time of calling the calculatebill function it automatically takes the parameter we define at time of declaring the function.
//one more thing order matters here



//now lets see when not to use arrow function

//suppose you had some button on your web page and on clicking that button it turn into another color then you perhaps need the below code
 // When you really need `this`
 const button = document.querySelector('#pushy');
 button.addEventListener('click', function() {
   console.log(this); //if we use arrow function this refers to the window property coz of lexical scope behaviour so i used regular function declaration
   this.classList.toggle('on');
 });

 // When you need a method to bind to an object
 const person = {
   points: 23,
   score() {
     console.log(this);
     this.points++;
   }
 }

 // When you need to add a prototype method
 class Car {
   constructor(make, colour) {
     this.make = make;
     this.colour = colour;
   }
 }

 const beemer = new Car('bmw', 'blue');
 const subie = new Car('Subaru', 'white');

 Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;
 };
 //here arrow function will not work coz this will not bound to that object 
 
 

 // When you need arguments object
 const orderChildren = function() {
   const children = Array.from(arguments);
   return children.map((child, i) => {
     return `${child} was child #${i + 1}`;
   })
   console.log(arguments);
 }
//we dont have access to argument object when we use arrow function

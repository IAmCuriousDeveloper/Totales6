//   L E T      VS      V A R  =============================================

function swap(x, y) {
    var temp = x;
    x = y;
    y = temp;
}

for (var index = 0; index < array.length; index++) {
    const element = array[index];
}

//one basic difference between the var and let is : "let" should be used within the block scope (i.e) it shouldn't be accessible outside the scope.
//var is function scoped (i.e) if we use var inside the function that var cannot be accessed outside that scoped. but other than that if var is used inside any other block ex. if while etc it can be used outside.

function swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
}
console.log(temp); //undefined


for (let index = 0; index < arry.length; index++) {
    const element = array[index];
}
console.log(temp); //undefined


//tips
//dont use try catch with let always use var.
//we cannot redeclared "let".
//use let in loops 




//        C O N S T

// CONST IS THE VARIABLE WHICH CANNOT BE REASSIGN.

const x = [1, 2, 3];
x[0] = 55; // ok

x = [3, 5, 7] //not ok

//Previous version of javascript already had the object.freeze property to immute the value we can use that too;

const y = Object.freeze([1, 2, 3]);

y[0] = 45; //cannot be done ;

//when to use const ?
//1.where you sure that the value not gonna change or re assign
//2. const pi = 3.14;






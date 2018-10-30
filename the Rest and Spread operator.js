//WHAT IS SPREAD OPERATOR ?
//spread operator are those three dots we often see infront of the variable or arrays .spread operator takes every single item from an iterable and apply to the containing element

//lets see some examples 
//suppose i have two arrays and i want to add an item between those two arrays and make a new array how would i do that ?

const action = ['mib','avengers','spiderman'];

const horror = ['mama','nun','halloween'];

var friends = 'friends';

//i want to add friends in between action and horror array and make a new array ?

//old way 
var newarr = action.concat(friends);

var newarr = newarr.concat(horror);

console.log(newarr);//["mib", "avengers", "spiderman", "friends", "mama", "nun", "halloween"]

//new way via spread

var newarr = [...action,friends,...horror];//in one line 
console.log(newarr);//["mib", "avengers", "spiderman", "friends", "mama", "nun", "halloween"]

//ex2 
//now suppose i want to delete that mean comment on the array" you are so dumb" how can i do that 
const comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute! 🐐' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
  ];
  //finding the comment with id
  const id = 632429;
  const commentIndex = comments.findIndex(comment => comment.id === id);

  //..making the new array with slice operator
  const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];
  console.log(newComments);


//lets see some more examples

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6 this spread operator is more readable.

console.log(sum.apply(null, numbers));
// expected output: 6



//spread operator to array
var str = "hello";
var chars = [...str];
console.log(chars);
// ['h', 'e',' l',' l', 'o'] 


//with new keyword

var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);


//copy an array
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected (NOTE : not applicable for multi-Dimensional array)

var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]




//unshifting in array via spread operator


//without spread
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2]


//with spread
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]


// REST(...) operator
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

//when used in the parameter it acts as a rest


//NOTE : WE CAN ONLY USE SPREAD OPERATOR ON ITERATOR(ITERABLE);

//what is maps?
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//maps are similar to maps both uses key value pair however there are some difference between them.
//1.The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
//The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
//You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
//A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
//An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
//A Map may perform better in scenarios involving frequent addition and removal of key pairs.

//lets see an example
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}

//you can read more about the methods we can use in this link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Methods

//using maps with for of 
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one

//using foreach
myMap.forEach(function(value, key) {
    console.log(key + ' = ' + value);
  });
  // Will show 2 logs; first with "0 = zero" and second with "1 = one"


  //we can also clone the maps
  var original = new Map([
    [1, 'one']
  ]);
  
  var clone = new Map(original);
  
  console.log(clone.get(1)); // one
  console.log(original === clone); // false. Useful for shallow comparison



  //maps maintain a key uniquiness
  var first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  var second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread operator essentially converts a Map to an Array
  var merged = new Map([...first, ...second]);
  
  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three


//use maps.html for this exercise and play with it we add the metadata for the button 

  const clickCounts = new Map();
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    clickCounts.set(button, 0);
    button.addEventListener('click', function() {
      const val = clickCounts.get(this);
      clickCounts.set(this, val + 1);
      console.log(clickCounts);
    });
  });

  //like a weakset there are weak map too.
  //weakmap cannot be iterable and it has a automatic garbage collector .to see what is garbage collector open the console and see that the refernce of weakmap (i.e dog2 is gone while dog1 is still there in strong map);


  let dog1 = { name: 'Snickers' };
  let dog2 = { name: 'Sunny' };

  const strong = new Map();
  const weak = new WeakMap();

  strong.set(dog1, 'Snickers is the best!');
  weak.set(dog2, 'Sunny is the 2nd best!');

  dog1 = null;
  dog2 = null;


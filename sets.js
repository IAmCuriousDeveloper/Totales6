//what is set?
//set contains a unique sets of element . and its not a index based like array 
//how to define a set ?
const singers = new Set();

//we can add elements to the set like this.
singers.add('justin bieber');
singers.add('enrique iglesias');
singers.add('maroon 5');

//we cam delete elements like this

singers.delete('justin bieber');

//we can clear the set like this

singers.clear();

//To know all the elements or values we simply do like this

singers.values(); //we can also use keys like singers.keys() coz in sets values and keys are the same things

//one important thing is if we do singers.value() we get the set iterator (i.e) we can iterate over them or loop over them.also we can use generator function like .next etc over them 

for (const singer of singers) {
    console.log(singer);
}

const it = singers.values();
it.next();

//if you want to create a set at the time of initialization we pass an array direcrly on set 

const developers = new Set(['dan abramov','kent c dodds','Prashant rawal']);

//if you want to see that somethings is in the set or not we use .has property

developers.has('Prashant rawal'); //true
developers.has('Prashanttt rawal'); //false coz spell wrong

//example 2 
//let we organise a javascript conference and the developers are coming to give a talk . we organise a talk in such a way that one person give talk one at a time.

const jsEvent = new Set();

//developers are coming
jsEvent.add('Dan abramov');
jsEvent.add('kent c dodds');
jsEvent.add('Prashant Rawal');

//lets make a row so that 1st come 1st serve is accomplished

const row = jsEvent.values();
console.log(row.next().value); //Dan abramov
console.log(row.next().value); //kent c dodds

//now some more people are coming

jsEvent.add('brian holt');
jsEvent.add('getify');
jsEvent.add('bianca gandalpho');

//continue the talk
console.log(row.next().value); //Prashant rawal
console.log(row.next().value); //brian holt
console.log(row.next().value); //getify
console.log(row.next().value); //bianca gandalpho

//lets see one more thing called weak set 
//weakset has some advantage as well as some disadvantage over sets 
//disadvantage
//1.it only accept object as the value (no string ,number or array) 
//2 it cannot be enumerated (i.e) cannot be loop over .....very disappointed hahh.
//3.we cannot clear them by .clear() property

//advantage
//1.automatic garbage collection when element get removed or deleted
//2.performance is good

const student1 = {name:'prashant',lastname:'rawal'};
const student2 = {name:'pratik',lastname:'rawal'};

const students = new WeakSet();

students.add(student1);
students.add(student2);

//suppose after some time we set the student1 = null then it automatically got garbage collected and removed from the weakSet

//thats all ..happy coding







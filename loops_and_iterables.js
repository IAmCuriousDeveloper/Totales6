//lets see the new for of loop

//suppose i have 4 dogs and i have to loop over them with he index how can i do that without using dogs.indexof 

const dogs = ['sanu','monty','ricky','carl'];

for (const [i,name] of dogs.entries()) {

    console.log(`${name} is my ${i+1} number dog`);

}

// sanu  is  my 1 number  dog
// monty is my 2  number  dog
// ricky is my 3  number  dog
// carl  is  my 4 number  dog


//Array.entries() makes array an iterator (i.e) we can have next() function on it which inturn return two things an array of values and done property 
//values has the two property 1st :index 2nd : value
//done will be boolean true or false according to the element it has left or not

//the for of loop can handle pretty much any types of data(array,sets,nodelist,dom-collection,elements etc etc as long as they are iterable) except object;

//adding the provided number;

function addnum (...num){
    var total = 0;
    for (const number of num) {
        total += number;
    }
    return total;
}
 var total = addnum(1,2,3,4,5,6,7);

 console.log(total);//28


//NOTE : THERE IS AN ONGOING PROPOSAL FOR THE USE OF OBJECTS IN FOR OF LOOPS BUT IT IS STILL ON HOLD SO TILL THEN STICK WITH FOR IN LOOP WHICH GIVES THE KEYS OF THE OBJECTS AND THROUGH THEM WE CAN EXTRACT OUT THE VALUES.

const colors = {
    col1 : 'Red',
    col2 : 'blue',
    col3 : 'green'
}

for ( const key in colors){
    let value = colors[key];
    console.log( key , value);
}


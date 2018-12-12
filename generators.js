//what are generators ?
//generators are the type of functions which we want to stop  in between before moving further and yield some value ( for easier explanation we use generators so that we can stop the generator function whenever we want). we will talk about the yield below

//simple function

function names (){
    console.log('Prashant');
    console.log('Priyanka');
    console.log('Pratik');
}

names(); // it just runs in one go 

//now lets see generators function

function* gennames (){
    yield "Prashant";
    yield "Priyanka";
    yield "Pratik";
}

const family = gennames();
console.log(family.next());//{value:Prashant,done:false}
console.log(family.next());//{value:Priyanka,done:false}
console.log(family.next());//{value:Pratik,done:false}
console.log(family.next());//{value:undefined,done:true}

//lets go through what happens here
//1.we make a generator function with '*' after the function keyword
//2. what is yield ?
//dont get confused with yield and return.whenever function encounters return keyword it exits the function
//3. whenever yield encounters it returns whatever expression it has after the yield keyword .but it only returns when we call ".next()" on it 

//example 2 we can use array to loop over with the generators 

const singers = [
{ name : "justin bieber" , age : 24, genre: "pop"},
{ name : "enrique iglesias" , age : 35, genre: "country"},
{ name : "lady gaga" , age : 36, genre: "pop"},
{ name : "sam smith" , age : 40, genre: "pop"},
]

function* loop(){
    for (const singer of singers) {
        yield singer;
    }
}

const nominees = loop(singers);

nominees.next();//{value : object ,done : false}
nominees.next();//{value : object ,done : false}
nominees.next();//{value : object ,done : false}
nominees.next();//{value : object ,done : false}
nominees.next();//{value : object ,done : true}

//example 3 one of the another use case of generators is to do waterfall commands like ajax request .

//SUPPOSE WE WANT TO FETCH SOME DATA FROM THE API ONE AFTER OTHER AND WE MAKE SURE THAT WE ONLY FETCH THE OTHER DATA WHEN WE GET OUR PREVIOUS ONE .
function ajax(url) {
    fetch(url).then(data => data.json()).then(data => dataGen.next(data))
  }

  function* steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    console.log(beers);

    console.log('fetching Prashant');
    const wes = yield ajax('https://api.github.com/users/PRASHANTPR7');
    console.log(wes);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    console.log(fatJoe);
  }

  const dataGen = steps();
  dataGen.next(); // kick it off


  //THATS IT NOW YOU HAVE THE BASIC KNOWLEDGE ABOUT THE ES6 GENERATORS YOU CAN READ MORE ON MDN ..THANKS
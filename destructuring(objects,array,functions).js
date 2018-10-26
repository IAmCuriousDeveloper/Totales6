//lets start destructuring with the objects

//ex1 .I have an object and i want to take out the properties of the object and assign it to respective variables 

const developer ={

    first:'Prashant',
    last : 'Rawal',
    country : 'India',
    city : 'Korba',
}

//old way {quite repeatative} 
const first = developer.first;
const last  = developer.last;
const country = developer.country;
const city = developer.city;

//new way via destructuring 

const { first ,last ,country,city} = developer;
//its one line 

//1.const keyword decalred the variables are constant
//2.{ } declared that it will destructure the object 
//3.the variable we pass in the { } braces will look for the exact same keys in the developer object.

//the above example is quite simple and starightforward we can apply those destructuring in nested way too.

const developer ={

    first:'Prashant',
    last : 'Rawal',
    country : 'India',
    city : 'Korba',
    links: {
        social:{
            twitter:"https://twitter.com/PR4WEB",
            linkedIn:" https://www.linkedin.com/in/prashant-rawal-12142b117/"
        },

        repo : {
            Github:"https://github.com/PRASHANTPR7"
        }
    }
}

//when we get data from the api it looks something like this then how we destructure that dense nested data into the variables we use..turn out its quite easy with es6 destructuring methods

const { twitter,linkedIn} = developer.links.social;

//suppose we dont want the exact key name for our variable or there is some ambiguity with the variable name in our program we can easy change the name in destructuring 

const { twitter : tweet, linkedIn: link} = developer.links.social;

// with the colon : we can define what we want and what we call our variable in our program.

//DESTRUCTURING WITH ARRAYS

const lifecycle = ['born','Rise','shine','death','repeat'];

const [ born , rise , shine , death , repeat ]  = lifecycle;

//when we pull the values from the array we apply [ ] brackets;



const data = 'football,ronaldo,7,realmadrid';
//now i want to take those values from the string and assign into the variables

const[game,player,number,team] = data.split(',');

console.log(game,player,number,team);//football ronaldo 7 realmadrid

//NOTE: IF WE HAVE MORE VALUES IN DATA.SPLIT ARRAY AND WE DONT HAVE ENOUGH VARIABLES TO ASSIGN THEM ,DESTRUCTURING NEGLECT THEM;


//DESTRUCTURING IN SWAPPING VARIABLES

var ten = 10;
var twenty = 20;
console.log(ten,twenty);

[ten,twenty] = [twenty,ten];
console.log(ten,twenty);

//simple and without the third variable

//DESTRUCTURING WITH THE FUNCTION 

function hotelTax(amount){

    const totalamount = {
    ashirwad_inn : amount + (amount * .30),
    blue_diamond : amount + (amount * .25),
    vishram_regency : amount + (amount * .20),
    choupaty : amount + (amount * 0)
}
return totalamount;
}
const {ashirwad_inn,blue_diamond,vishram_regency,choupaty} = hotelTax(1000);

console.log(ashirwad_inn,blue_diamond,vishram_regency,choupaty);//1300 1250 1200 1000

 
function caltax({amount = 100, tax=.25,tip=.10} = {}){
    return amount + (amount * tax) + (amount * tip);
}

const bill = caltax();
console.log(bill); //135 we can call it without the argument the default will take place ,there is no tension of undefined

const bill = caltax({amount:200,tax:.30,tip:.15});
console.log(bill);//290























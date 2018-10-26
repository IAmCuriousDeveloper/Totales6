// The basic function of template literals is to use variables in the string in efficient manner for example

var name = 'Prashant';
var age = 23;
var city = 'korba';

//now i want to use those variables in the string 

//old way 

var fullinfo ="The guy name is " + name + " and he is " + age + " year old " + " and living in " + city + " city ";
console.log(fullinfo); //The guy name is Prashant and he is 23 year old  and living in korba city 

//new way 

var fullinfo = ` The guy name is ${name} and he is ${age} year old and living in ${city} city`;

//see above is so much easy and more readable.

console.log(fullinfo); //The guy name is Prashant and he is 23 year old  and living in korba city 

//NOTE: TEMPLATE LITERALS START WITH A BACKTICK (``) .WE CAN HAVE AS MANY WHITESPACE IN BETWEEN WE WANT AND IF WE WANT TO USE THE EXISTENCE VARIABLE INSIDE TEMPLATE LITERAL(STRING) WE USE "${}" THIS SYMBOL AND INSIDE THAT WE SIMPLY PUT THE NAME OF THE VARIABLE



//SOME CLASSIC USE OF TEMPLATE LITERAL(THEY ARE VERY POWERFUL)

//EX1

//suppose i have object that have some properties i want to use in my html how can i do easily with the template literals 

const person = {
    name : 'Prashant',
    job: 'web developer',
    age: 23,
    city: 'Korba',
    bio:'Prashant is a really an awesome guy that loves javascript '
}

var markup = `
        <div class = 'person'>
        
        <h2>
        ${person.name}
        <span class="job">${person.job}</span>
        <span class="job"> age :${person.age}</span>
        <span class="job"> live in :${person.city}</span>
        </h2>

        <p> ${person.bio} </p>

</div>
`;
document.body.innerHTML = markup; //like that its easy isn't it?


//ex2 suppose i have an array which contains the object as the properties that contain games i like to play and the genre and i want to loop over and give each item  list element 

const games = [
    {name:'fifa' , genre : 'sports'},
    {name:'whitcher' , genre : 'adventure'},
    {name:'Resident evil' , genre : 'thriller/horror'},
    {name:'pubg' , genre : 'mobile_mission'},
];

const markup = `
    <ul>
    <li>${games[0].name} has genre : ${games[0].genre}</li>
    <li>${games[1].name} has genre : ${games[1].genre}</li>
    <li>${games[2].name} has genre : ${games[2].genre}</li>
    <li>${games[3].name} has genre : ${games[3].genre}</li>
    </ul>
`;
document.body.innerHTML = markup;

//we can do that above but that will be not scalable ,rather we can use thsi method

const markup = `

    <ul>
    
    ${games.map(dog => `<li> ${dog.name} has the genre : ${dog.genre}</li>`).join('')}    
</ul>

`;
document.body.innerHTML = markup;

//the above will be quite fantastic isn't it?


//NOW ...lets see the Tag function========================================

//tagging a function is one of the cool feature of template literal

function format(strings,...arg){ //using spread operator will talk about it later(it takes all the values from the string and put them in an array);
let str = '';

strings.forEach((string , i ) => {
str += string + (arg[i] || '');    
});
return str;
};



const name = 'Ronaldo';
const age = '33';
const sentence = format`The no.1 football player in the planet ${name} had his birthday party and turned ${age}`;
console.log(sentence); //"The no.1 football player in the planet Ronaldo had his birthday party and turned 33"

//to tag a function just write a function name infront of the template literal string and that function takes  parameter 1st is string which is in the form of array and then the no. of values(variables) as many you have in your string (here 2); if we put the function name in front of the string we immediately invoke it with the respective parameter.

//string is always 1 greater than values.



//SOME NEW ADDITIONAL METHOD OF STRING

//1.   .startsWith()
//2.   .endsWith();
//3    .includes();
//4    .repeat();


//they have the same name as what they do.

//ex 
var name = 'Prashant';
var sayhi = 'hi';

var accountNo = '589632148546';

name.startsWith('P'); //true
name.startsWith('p'); //false
//they are case sensitive

accountNo.endsWith('6');//true

accountNo.includes('6');//true

sayhi.repeat(4); //hihihihi; repeats the number of times provided.














//what is proxies ?
//The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc) definition from mdn
//simple -> Proxy allow us to modify/overwrite the default behaviour of objects default operation

//lets see an example, let we have an object 'man' with property name and age

let man = {
    name : "Prashant",
    age : 24
}
//now lets make a proxy of it
//syntax
//var p = new Proxy(target, handler);
//proxy takes two parameter 1st is target(which is our man object and the next is handler(which is an operation))
//we will do 2 basic things here which is most common get and set 

const manproxy = new Proxy(man,{
get(target,name){
    console.log("i will not provide you the name",target,name);
    console.log("just go");
},
//we provide value for the setter
set(target,age,value){
if((age === "age") && (value >= 0) && (typeof value === "number")){
    target[age] = value
}else{
    console.log("please provide the correct value");
}
}
})
//if we will get the name of object manproxy we got hijacked our won custom method or handler ,often called as trapped 

manproxy.name; //just go
manproxy.age = -5;  //please provid ethe correct value                                                                                   
//now lets see second example of phone number
//suppose we want to get and set the phone number provided by the user


const phoneHandler = {
    set(target, name, value) {
      target[name] = value.match(/[0-9]/g).join('');
    },
    get(target, name) {
      return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
    }
  }

  const phoneNumbers = new Proxy({}, phoneHandler);

  //here match and replace takes the regex parameter to specify regular expression
  //we set the phone number matching the [0-9] numbers and get the phone numbers with specific expression like (123)-123-1234

  //lets see one more example related to validation of property of object
  //beloe code will checks if the user updates the correct property of the object or not 
  const safeHandler = {
    set(target, name, value) {
      const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());

      if (!(name in target) && likeKey) {
        throw new Error(`Oops! Looks like like we already have a(n) ${name} property but with the case of ${likeKey}.`);
      }
      target[name] = value;
    }
  };

  const safety = new Proxy({ id: 100 }, safeHandler);

  safety.ID = 200; 
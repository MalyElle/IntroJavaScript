// LEARNING OBJECTS
// Objects is always place in a Variable

let anObject = {
    name: "Maly", // name is the key and Maly is the Value
    date: "5/20/2019",
    age: 25,
    myMessage: function() {  // myMessage is the key and function is the value
        return `Hello, my name is ${this.name}`; // 'this' = the whole object
    }
}
console.log(anObject);

let theResult = anObject.myMessage();
console.log(theResult);

let myAge = anObject.age;
console.log(myAge);
// Couple ways to grab stuff down from objects
let myDate = anObject["date"];
console.log(myDate);

// Adding more to object
anObject["hungry"] = true;
console.log(anObject.hungry);

//LEARNING SETTING AND GETTING-Update an item using function
let anObject2 = {
   _name: "Maly",  // '_' use to identify setter and getter
   _date: "5/20/2019",
   _age: 25,
   set age(newAge) {
       if(typeof newAge == 'number') {
           this._age = newAge;
       } else{
           return "Invalid input!";
       }
   },
   get age() {
       return this._age;
   }
}
console.log(anObject2._age);
anObject2.age = 26;
console.log(anObject2._age);

let theAge = anObject2.age;

// How to Loop through Object
let objectKeys = Object.keys(anObject);
let objectValues = Object.values(anObject);

objectKeys.forEach( x => {
    console.log(x);
})
objectValues.forEach( x =>{
    console.log(x);
})

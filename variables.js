// Print to console
console.log('Hello Beautiful');

// Variables
var buddy = 'my friend';
var lightSwitch = true;
var books = 8;
var sentence = 'Living life to the fullest';
console.log(buddy);
console.log('buddy');
console.log(lightSwitch);
var sentence = 'I love to go biking at night';
var books = 7;
console.log(sentence);
console.log(books);

//Equations
var equation1 = 10 + 5;
var equation2 = 16 - 8;
var equation3 = 4 * 2;
var equation4 = equation1 * 4;
console.log(equation1);
console.log(equation4);

//Arrays
var groceryList = [
    'Milk',
    'Cereal',
    'Tea Cookies',
    'Tea'
];

var create = [
    equation1,
    equation2,
    equation3
];

console.log(books, sentence);
console.log(create);

// Add item to array
var num = [3,8,7];
num.push(12);
num.push(15);
num.push(18);
console.log(num);

console.log(num.splice(4));
console.log(num);

var lifeList = [
    'live',
    'love',
    'laugh',
    'happiness'
];

console.log(lifeList.splice(1));
console.log(lifeList);

console.log(groceryList);
groceryList.reverse();
console.log(groceryList);

console.log(typeof sentence);

var num1 = 36;
var ageSentence =`Your age is ${num1}`;
console.log(ageSentence);
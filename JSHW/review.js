// Print to console
console.log('Hello Beautiful')

// string
var FirstSentence = 'Life is Beautiful';
var SecondSentence = 'Appreciate how beauty can change';
var ThirdSentence = 'Metamorphosis is beautiful';

// numbers
var books = 3;
var num = 7;
var numeric = 8;

// boolean
var lightOn = true;
var SwitchOff = false;

// Printing the first console
console.log(FirstSentence);
console.log(numeric);
console.log(lightOn);

// Equations
var equations1 = 5+3;
var equations2 = 8-3;
var equations3 = 5*2;
var equations4 = equations1 * 10;

// Printing the second console
console.log(equations2);
console.log(equations4);

//Arrays
var CreateLists = [
    'Live',
    'Love',
    'Laugh',
    'Happiness'
];
 
//Printing the third console
console.log(numeric, ThirdSentence);
console.log(CreateLists);

// Adding push to Arrays
var number = [7, 8, 14,];
number.push(16);
number.push(28);
number.push(52);

//Printing the fourth console
console.log(number);

//Splice number and Printing the fifth console
console.log(number.splice(4));
console.log(number);

//Reverse CreateLists and Printing the sixth console
console.log(CreateLists);
CreateLists.reverse();
console.log(CreateLists);

//String interpolation and Printing the seventh console
var name = 'Maly'
var RandomeSentence = `Dear ${name}, how have you been? I miss you ${name}`;
console.log(RandomeSentence);

//typeof and Printing Last Console
console.log(typeof SwitchOff);
console.log(typeof equations3);
console.log(typeof CreateLists);
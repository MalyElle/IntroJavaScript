// Learning FUNCTION!
function myFunction( ) {
    console.log('water!');
}

myFunction();

function equation1( ) {
    var num1 = 10;
    var num2 = 20;
    var total = num1 + num2;
    var avg = total /2;
    console.log(avg);
}

equation1(); // Always remember to add parenthesis 

// Parameters-are temp. variables
function equation2(num1, num2) {
    var total = num1 + num2;
    var avg = total /2;
    console.log(avg);
}

equation2(25, 75);
equation2(25, 25);
// Using strings in the examples to generate last name
function naming(firstName) {
    var fullName = firstName + ' Lost';// Creating a space is a cushion between the name
    console.log(fullName);
}
naming('Puppy');

// Doing Functions the hard way
function nameGenerator() {
// Random # from 0-5
    var anyNum1 = Math.floor(Math.random() * 5);
    var anyNum2 = Math.floor(Math.random() * 5);
    var firstNames = [
        'Steve',
        'Bucky',
        'Natasha',
        'Rocket',
        'Groot'
    ];
    var lastNames = [
        'Her',
        'Yang',
        'Vang',
        'Lor',
        'Xiong'
    ];
    var fullName = firstNames[anyNum1] + '' + lastNames[anyNum2];  //<-- Concatenation(CONCAT)
    alert(fullName);
}
nameGenerator();

// FourLoop
for(var i=0; i < 8; i++) {
    nameGenerator();
}

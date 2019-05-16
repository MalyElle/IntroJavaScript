// Learning IF STATEMENT; true and false
var number = 1;
var otherNumber = 9;
var bunny = 'fluffy';
if (bunny == 'cat') {
    console.log('you get a bunny');

} // (!) equal the word NOT
// Learning adding ELSE to IF STATEMENT
else
{
    console.log('you get nothing');
}

// Using Example with strings
var name = 'Maly';
if (name != 'MC'){
    console.log('Your name is your name');
}
else
{
    console.log('your a fraud');
}
// Using examples with Arrays
var movies = [
    '21 Jump Street',
    'The Avengers',
    'Girls Night Out'
];
if (movies[1]!='21 Jump Street'){
    console.log('you can enter');
}
else
{
    console.log('you can not enter');
}
// YOU CAN ALSO USE SYMBOLS LIKE (>)(<)(=)(!=)

// Learning 'ELSE IF STATEMENT'
var age = 17;
if(age > 21){
    console.log('you can enter the bar');
}
else if (age > 18){
    console.log('you can enter until 9pm');
}
else if(age == 17){
    console.log('close enough');
}
else{
    console.log('access denied');
}

// Example using 'strings'
var sen = 'fish';
if(sen > 'morefood'){
    console.log('Chicken Wings');
}
else if(sen > 'lessfood'){
    console.log('Sushi');
}
else{
    console.log('Bland Nasty Food');
}


// Switches
var total = (12 +9*2);
switch(total)
{
   case 11:
   console.log('you got nothing');
   break;

   case 34:
   console.log('you got something');
   break;

   case 30:
   console.log('you got it right');
   break;

   case 42:
   console.log('its actually this');
   break;

   default:
   console.log('you didnt get it');

}

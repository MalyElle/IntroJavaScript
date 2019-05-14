var languages = [
    'Hello',
    'Hola',
    'Bonjour',
    'Konnichiwa',
    'NyobZoo'
];

// forEach and Print first console
languages.forEach(element => {
    console.log(element);
    console.log('Barriers')
});

// for and Print second console and third console
for(var i = 0; i< languages.length; i++){
    console.log(i);
    var y = languages[i];
    console.log(y);
}
// Map and Print fourth console
var languages2 = languages.map(item => {
    return item + ':The Missing Greeting';
});
console.log(languages2);

// Filter and Print fifth console
var languages3 = languages.filter(item => {
    return item.length > 6;
});
console.log (languages3);

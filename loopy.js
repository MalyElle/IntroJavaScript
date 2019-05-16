var books = [
    'Tus Hmoob Zoo Nkauj',
    'Kuv Hlub Koj',
    'The Avengers',
    'Diary of a Wimpy Kid'
];

//Global scope
var num2 = 1;
books.forEach(item => {
   // Local scope
    var num3 = 0;
    console.log(item);
    console.log('happy');
});

// this will not work
//console.log(num3);

// More complex Loop but very helpful and will be mainly use
for(var i = 0; i < books.length; i++){
    console.log(i);
    var x = books[i];//where ever [i] is, will represent books
    console.log(x);
}

// Map and adding return
var books2 = books.map(item => {
    return  item + ': The Return';// String Interpolation
});
console.log(books2);

// Filter and adding return and length
var books3 = books.filter(item => {
    return item.length > 13;
});
console.log(books3);
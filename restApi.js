var grootDiv = document.getElementById('groot');
var container = document.createElement('div');

var logo = document.createElement('img');
logo.src='grootImg.jpg';

grootDiv.appendChild(container);
container.appendChild(logo);

// Built in Class into JS
var request = new XMLHttpRequest();

// Asynchronous-Making a request and get information back and changing it  (going to come back as a JSON Object)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// Going into JSON
request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.forEach(film => {
            var card = document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.textContent = film.title;

            var para = document.createElement('p');
            film.description = film.description.substring(0,300);
            para.textContent = `${film.description}`;

            container.appendChild(card);
            card.appendChild(heading1);
            card.appendChild(para);
        });
    } else {
        alert('Oh Geez');
    }
}
request.send();
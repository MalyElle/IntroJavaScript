var grootDiv = document.getElementById('groot');

var backgroundColor = document.body.style.backgroundColor = "teal";

var container = document.createElement('div');

var logo = document.createElement('img');
logo.src='Hayao_Miyazaki.jpg';
logo.style.display = 'block'; // How to put it in the middle
logo.style.marginLeft = 'auto';
logo.style.marginRight = 'auto';
logo.style.height = '600px';
logo.style.width = '800px';
logo.classList.add('w3-white','w3-border',)
logo.style.borderWidth = '10px';


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
            heading1.style.textAlign = 'center';
            heading1.style.color = 'white';
            heading1.classList.add('w3-margin','w3-black', 'w3-border')

            var para = document.createElement('p');
            film.description = film.description.substring(0,400);
            para.textContent = `${film.description}`;
            para.style.fontSize = '1.2rem';
            para.classList.add('w3-border', 'w3-white', 'w3-margin')

            var director = document.createElement('p');
            director.textContent='Director Name: '+film.director;
            director.style.textAlign = 'center';
            director.style.fontSize = '1.5rem';
            director.style.color = 'silver';
            
            
            container.appendChild(card);
            card.appendChild(heading1);
            card.appendChild(director);
            card.appendChild(para);
           
        });
    } else {
        alert('Oh Geez');
    }
}
request.send();
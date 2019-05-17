function changeDiv() {
    var firstDiv = document.getElementById('div1')
    firstDiv.style.padding = '2.5 rem';
    firstDiv.style.backgroundColor = 'teal';
    firstDiv.style.color = 'azure';
}

//changeDiv();

 function changeDiv2() {
     var secondDiv = document.getElementById('div2')
     secondDiv.style.fontSize = '3.5 rem';
     secondDiv.style.textAlign = 'center';
 }
changeDiv2();

function bug() {
    var thirdDiv = document.getElementById('div3');
    var heading1 = document.createElement('h1');

    heading1.innerHTML = 'Focus and Breathe';

    thirdDiv.appendChild(heading1);
}

function sagaHiding() {
    var lists = document.getElementById('lists');
    if(lists.style.display ==='none'){
        // show details
        lists.style.display = 'block';
    }
    else if(lists.style.display === 'block'){
        // hide details
        lists.style.display = 'none';

    }
        
}
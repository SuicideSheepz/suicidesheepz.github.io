var obraz = document.querySelector('img');

obraz.onclick = function()
{
    var src = obraz.getAttribute('src');
    if(src === 'logo.png')
    {
        obraz.setAttribute('src' , 'logo2.png');
    }
    else
    {
        obraz.setAttribute ('src' , 'logo.png');
    }
}

var button = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName()
{
    var nazwa = window.prompt('Wpisz nazwe usera.');
    localStorage.setItem('name', nazwa);
    heading.textContent = 'Fajnie' + nazwa;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    heading.textContent = 'Fajnie' + storedName;
}

button.onclick = function() {
    setUserName();
}
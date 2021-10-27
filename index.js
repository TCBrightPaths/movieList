//console.log("hello world");

//Callback function
let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    ul.appendChild(movie);
    inputField.value = " ";
}




let ul = document.querySelector('ul');

let form = document.querySelector('form');

//Calling the function upon submit
form.addEventListener('submit', addMovie);
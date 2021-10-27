//console.log("hello world");

//Callback function
let addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    ul.appendChild(movie);
    inputField.value = " ";
}

let deleteMovie = event => {
    event.target.parentNode.remove();
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked');
}




let ul = document.querySelector('ul');

let form = document.querySelector('form');

//Calling the function upon submit
form.addEventListener('submit', addMovie);
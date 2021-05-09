const movie = document.querySelector('#movies');
console.log(movie.value);
changeMovie();

function changeMovie(){
    let movieString;
    const movieName = document.querySelector('.movie-name');
    if (movie.options[movie.selectedIndex].value == 1){
        movieName.textContent = movie.options[movie.selectedIndex].text;
    }
}
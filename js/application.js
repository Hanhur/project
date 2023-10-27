const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personaMoviesDB = {
    count: numberOfFilms,
    movies: {},
    action: {},
    genres: [],
    privat: false
}

const a = prompt("Один из воследних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из воследних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personaMoviesDB.movies[a] = b;
personaMoviesDB.movies[c] = d;
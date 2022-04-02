"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?');
const rateFilm = prompt('На сколько оцените его?');
const lastFilm1 = prompt('Один из последних просмотренных фильмов?');
const rateFilm1 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilm1] = rateFilm1;
console.log(personalMovieDB);

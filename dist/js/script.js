"use strickt";


 let numberOfFilms ;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while(numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movie:{},
    actors:{},
    genres:[],
    privat: false

};

function rememberfilms(){
    for (let i = 1 ; i <= 2; i++){
        let a = prompt("Один из последних просмотренных фильмов?", '');
        let b = prompt('На сколько оцените его?',''); 
        if(a !=null && b != null && a != "" && b != "" && a.length< 50){
            personalMovieDB.movie[a] = b;
            console.log("done");
        }else{
            console.log('error');
            i--;
        }
    }
}
rememberfilms();
function detectPorsLvl(){
    if(personalMovieDB.count < 10){
        alert('Просмотренно довольно мало фильмов');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.movie <30 ){
        alert('Вы класический зритель');
    }else if (personalMovieDB.count >= 30){
        alert("Вы киноман");
    }else{
        alert("произошла ошибка");
    }
}
detectPorsLvl();
function showMyDB (hidden){
    if( !hidden){
        console.log(personalMovieDB);
    }

}
showMyDB();
function writeYouGenres(){
    for(let i = 1 ; i <= 3 ; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '') ;
        
    }

}
writeYouGenres();


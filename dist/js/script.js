"use strickt";

/* Задание на урок:

 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
 'Сколько фильмов вы уже посмотрели?'
 
 2) Создать объект personalMovieDB и в него поместить такие свойства:
     - count - сюда передается ответ на первый вопрос
     - movies - в это свойство поместить пустой объект
     - actors - тоже поместить пустой объект
     - genres - сюда поместить пустой массив
     - privat - в это свойство поместить boolean(логическое) значение false
 
 3) Задайте пользователю по два раза вопросы:
     - 'Один из последних просмотренных фильмов?'
     - 'На сколько оцените его?'
 Ответы стоит поместить в отдельные переменные
 Записать ответы в объект movies в формате: 
     movies: {
         'logan': '8.1'
     }
 
 Проверить, чтобы все работало без ошибок в консоли */
 
 let movies = '',
 genres = [],
 privat = false,
 numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
 const personalMovieDB = {
    count: numberOfFilms,
    movie:{},
    actors:{},
    genres:[],
    privat: false

};
for (let i = 1 ; i <= 2; i++){
    let a = prompt("Один из последних просмотренных фильмов?", '');
    // 22
    let b = prompt('На сколько оцените его?',''); 
    // 33

    personalMovieDB.movie[a] = b;
    if(a,b ==0){
        i=0;
    }if(a,b.length<50){
        i =1;
    }else{
        i=0;
    }
}
    // if(personalMovieDB.movie > 0){
    //         alert('Просмотренно довольно мало фильмов');
    //     }else if(personalMovieDB.movie < 30){
    //         alert('Вы класический зритель');
    //     }else if (personalMovieDB.movie > 30){
    //         alert("Вы киноман");
    //     }else{
    //         alert("произошла ошибка");
    //     }

 


 console.log(personalMovieDB);
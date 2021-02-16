// TODO практический приимер работа с DOM
/* Задания:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

// "use strict";

// const movieDB = {
//   movies: [
//     "Логан",
//     "Лига справедливости",
//     "Ла-ла лэнд",
//     "Одержимость",
//     "Скотт Пилигрим против...",
//   ],
// };

// // 1)
// const adv = document.querySelectorAll(".promo__adv img"); // псевдо массив - adv.remove() - не прокатит
// adv.forEach((item) => {
//   item.remove();
// });

// // 3)
// const poster = document.querySelector(".promo__bg");
// poster.style.backgroundImage = "url('img/bg.jpg')";

// // 2)
// const gener = poster.querySelector(".promo__genre");
// gener.textContent = "драма";

// // 4)
// const movieList = document.querySelector(".promo__interactive-list");
// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
//   <li class="promo__interactive-item">${i + 1} ${film}
//     <div class="delete"></div>
//    </li>
//   `;
// });

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

// document.addEventListener("DOMContentLoaded", () => { код сработает когда структура будет загружена

// document.addEventListener("DOMContentLoaded", () => {
//   const adv = document.querySelectorAll(".promo__adv img"); // псевдо массив - adv.remove() - не прокатит
//   const poster = document.querySelector(".promo__bg");
//   const gener = poster.querySelector(".promo__genre");
//   const movieList = document.querySelector(".promo__interactive-list");
//   const movieDB = {
//     movies: [
//       "Логан",
//       "Лига справедливости",
//       "Ла-ла лэнд",
//       "Одержимость",
//       "Скотт Пилигрим против...",
//     ],
//   };

//   // 3)
//   const deleteAdv = (arr) => {
//     arr.forEach((item) => {
//       item.remove();
//     });
//   };

//   const makeChanges = () => {
//     poster.style.backgroundImage = "url('img/bg.jpg')";
//     gener.textContent = "драма";
//   };

//   // сортировка
//   const sortArr = (arr) => {
//     arr.sort();
//   };

//   movieDB.movies.sort();

//   // 2)
//   function createMovieList(films, parent) {
//     parent.innerHTML = "";
//     sortArr(films);

//     films.forEach((film, i) => {
//       movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1} ${film}
//       <div class="delete"></div>
//     </li>
//       `;
//     });

//     // при нажатии на корзину удаяляет фильм
//     document.querySelectorAll(".delete").forEach((btn, i) => {
//       btn.addEventListener("click", () => {
//         btn.parentElement.remove();
//         movieDB.movies.splice(i, 1); //номер и сколько нужно удалить

//         // когда удаляю элемент список заново перестраивается
//         createMovieList(films, parent);
//       });
//     });
//   }

//   // 1)
//   const addForm = document.querySelector(".add");
//   const addInput = addForm.querySelector(".adding__input");
//   const checkbox = addForm.querySelector('type="checkbox"'); //находим чекбокc по его атрибуту

//   addForm.addEventListener("submit", (event) => {
//     event.preventDefault(); // отменяем стандартное поведение

//     let newFilm = addInput.value;
//     const favorite = checkbox.checked;

//     if (newFilm) {
//       // проверяем количество символов
//       if (newFilm.length > 21) {
//         newFilm = `${newFilm.substring(0, 22)}...`;
//       }

//       if (favorite) {
//         console.log("favorite movie");
//       }
//       movieDB.movies.push(newFilm); // в массив movies попадает информация с newFilm
//       movieDB.movies.sort(); // сортировка по алфавиту

//       createMovieList(movieDB.movies, movieList);
//     }

//     event.target.reset();
//   });

//   makeChanges();
//   deleteAdv(adv);
//   createMovieList(movieDB.movies, movieList);
// });

// const { event } = require("jquery");

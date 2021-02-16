"use strict";

//TODO ПРОСТЫЕ ТИПЫ ДАННЫХ

// let number = 4.6;

// console.log(4 / 0);

// const person = "Alex suka blyat";

// const bool = true;

// console.loge(something);

// let und;
// console.log(und);

// const obj = {
//   name: 'John',
//   age: 25,
//   isMarried: false,
// };

// console.log(obj.age);

// let arr = ['plum.png', 'orange.jpg', 6, {}, []];

// console.log(arr[1]);

//TODO ОБЩЕНИЕ С ПОЛЬЗЫВАТЕЛЕМ
// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);
// console.log(typeof(result));
//TODO вся информация хранится в строках!

// const answer = prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);//преобразуем строку к числу

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');//задаем пользывателю вопросы и помещаем их в массив
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// console.log(typeof(null)); //Признаная ошибка в JS

//TODO ИНТЕРПОЛЯЦИЯ
//канкатенация- склеивание строк

// const category = 'toys';

// console.log(`https://someurl.com ${category}/5`);

// const user = 'Ivan';

// alert(`Привет, ${user}`);

//TODO ОПЕРАТОРЫ

// console.log('arr' + '-jbject');// получим строку
// console.log( 4 + '-jbject'); //получим строку
// console.log( 4 + +'-jbject'); //Nan (not a number)
// console.log(4 + '5');//получим 9

//TODO ИНКРЕМЕНТ И ДЕКРЕМЕНТ

// let incr = 10,
//     decr = 10;

//постфиксные значения
// incr++; //инкримент- увеличение на 1
// decr--;//декремент- уменьшение на 1

// //префиксные значения
// ++incr; //инкримент- увеличение на 1
// --decr;//декремент- уменьшение на 1
// в префиксной форме можно их использывать в console.log(++incr);

// console.log(incr);
// console.log(decr);

//TODO ПРИЛОЖЕНИЕ

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// const a = prompt("Один из последних фильмов?", "");
// const b = prompt("На сколько оцените его?", "");
// const c = prompt("Один из последних фильмов?", "");
// const d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

//TODO УСЛОВИЯ

// if (4 == 9) {
//   console.log('ok');
// } else {
//   console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('to mach');
// } else {
//   console.log('OK');
// }

// //TODO ТЕРНАРНЫЙ ОПЕРАТОР (?)
// // в его работе выполняется 3 аргумента

// (num == 50) ? console.log('OK') : console.log('Error');
// //////////

// switch (num) {
//   case '49':
//     console.loge('false');
//     case '100':
//       console.loge('false');
//       break;
//       case '50':
//         console.log('true');
// }

//TODO ЦИКЛЫ

// let num = 50;

// while (num <= 55) {
//   //пока условие выполняется мы будем деать что-то
//   console.log(num);
//   num++;
// }
// // Итерация - повторение цикла
// do {
//   console.log(num);
//   num++;
// } while (num <= 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// //Если нужно остановить цикл break

// for (let i = 1; i < 8; i++) {
//   if (i === 6) {
//     break;
//   }

//   console.log(i);
// }

// //Если нужно остановить цикл continue - позволяет пропустить шаг не прерывая цикл

// for (let i = 1; i < 8; i++) {
//   if (i === 6) {
//     continue;
//   }

//   console.log(i);
// }

// TODO ПРИМЕНЯЕМ УСЛОВИЯ И ЦИКЛЫ

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних фильмов?", "");
//   const b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('Error');
//     i--;
//   }

//   if (personalMovieDB.count < 5) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 5 && personalMovieDB.count < 8) {
//     console.log("Классический зритель!");
//   } else if (personalMovieDB.count >= 8) {
//     console.log('Вы киноман!');
//   } else {
//     console.log('Произогла ошибка!');
//   }

// }

// console.log(personalMovieDB);

//TODO ФУНКЦИИ
// локальная переменная- сузествует только внутри функции
//функции могут работать с глобальными переменными
// замыкание функции - сама функция вместе со всеми внешними переменными, которые ей доступны

// let num = 20;

// function showFirstMassage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMassage('Hello2');
// console.log(num);

//fuction declaration
// return окончание функции, после него мы ничего не задаем

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 7));
// console.log(calc(10, -2));

// function ret() {
//   let num = 100;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

//function expression

// const logger = function () {
//   console.log('expression');
// };

// logger();

//Стрелочная функция

// const calc = (a, b) => {
//   console.log('1')
//    return a + b;
//   };

//TODO МЕТОДЫ И СВОЙСТВА У СТРОК И ЧИСЕЛ
// МЕТОДЫ - вспомагательные функции, в конце аишутся круглые скобки, так как они выполняют какое-то действие с строкой
// СВОЙСТВА - вспомагательные значения

//работа со строками
// const str = 'teSt';

// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

//метод поиска подстроки
// const fruit = 'some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'hello logg';

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11)); //не поддерживает отрицательные значения в аргументах

// console.log(logg.substr(6, 5)); //говорит сколько символов нужно вырезать

//работа с числами

// const num = 12.6;

// console.log(Math.round(num)); // округления до ближайшего целого

// const test = '12.2px';
// console.log(parseInt(test));//переводит число в другую систему исчисдения
// console.log(paseFloat(test));//берет число или строку и возвращает в десятичном варианте, возвращает дробные

//TODO ПРАКТИКА функции

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false,
// };

// var numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }

// start();

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних фильмов?", "");
//     const b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('Error');
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 5) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 5 && personalMovieDB.count < 8) {
//     console.log("Классический зритель!");
//   } else if (personalMovieDB.count >= 8) {
//     console.log('Вы киноман!');
//   } else {
//     console.log('Произогла ошибка!');
//   }
// }

// detectPersonalLevel();

// //Патерн - шаблон поведения

// function showMyDataBase() {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDataBase(personalMovieDB.privat);

// function writeYourGanres() {
//   for (let i = 0; i <= 3; i++) {
//     const genre = prompt('Ваш любимый жанр под номером ${i}');
//     personalMovieDB.genres[i -1] = genre;
//   }
// }

// writeYourGanres();

//TODO call-back функции
//TODO call-back функция, которая должна быть выполнена после того как другая функция завершила свою работу

// function first() {
//   //do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500); //задержка .05 секунды
// }

// function second() {
//   console.log(2);
// }
//
// first();
// second();
//
// function learnJS(lang, callback) {
//   console.log(`я учу: ${lang}`);
//   callback();
// }
//
// function done(params) {
//   console.log("можно передать эту функцию вместо callback ниже");
// } // 2 вариант
//
// learnJS("JavaScript", function () {
//   console.log("Я прошел это");
// }); // 1 вариант
//
// learnJS("javaScript", done); //2 вариант

//TODO Обьекты

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1026,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Вызываем makeTest как метод обьекта");
//   },
// };
// console.log(options.name);

// options.makeTest();

// const { border, bg } = options.colors; //деструктуризаия
// console.log(border);

// //****************************** */
// // console.log(Object.keys(options)); //берет все ключи обьекта и помещает их в массив
// //****************************** */
// console.log(Object.keys(options).length); //берет все ключи обьекта и помещает их в массив
// //******************************* */
// delete options.height; //удаляет свойство из обьекта

// //1 вариант
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //передерает значения обьекта в обьекте
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`); //переберает значения в обьекте
//   }
// }

// //2 вариант
// // прием счетчика чтобы посчитпть количество значений в обьекте
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //передерает значения обьекта в обьекте
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`); //переберает значения в обьекте
//     counter++;
//   }
// }
// console.log(counter);

//TODO массивы и псевдомассивы
//структуры, которые содержат элементы по порядку

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length); // правило length - последний индекс массива +1

// arr.pop(); // удаляет последний элемент из массива
// arr.push(11); //добавляет эдемент в конец массива

// console.log(arr);

// // перебор массива

// // 1 варриант
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // 2 вариант
// for (let value of arr) {
//   console.log(value);
// }

// // 3 вариант - лучший
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внтури массива ${arr}`);
// });

// //Формируем массив на основании строки
// const str = prompt(" ", " ");
// const products = str.split(", ");
// console.log(products);

// // метод .sort - сортирует элемменты массива (как строки) по умолчанию
// products.sort();

// // метод .join - обьединяет элементы массива в строку
// console.log(products.join("; "));

// // сортировка чисел в массиве, через добавление функции
// const numbers = [1, 9, 3, 6, 8, 2];
// numbers.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }

// // Псевдомассивы не имеют методов - это просто структура для хранения

//TODO Передача по ссылке или по значению, Spread оператор

// // передача по значению
// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// // передача по ссылке, тоесть работаем не с копией (copy) а с предыдущей структурой (obj)
// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; //ссылка

// copy.a = 10;

// console.log(obj);
// console.log(coppy);

// // Копирование обьекта (поверхностная копия)
// // 1 вариант через цикл
// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key]; //создаем новое свойство [key] и делаем копию с главного обьекта
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// // 2 вариант через метод .assign

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// // Копия массива

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = "test";

// console.log(newArray);
// console.log(oldArray);

// // Оператор разворота массива (...) - spread
// // 1 пример
// const video = ["youtube", "vimeo", "rutube"],
//   blogs = ["woedpress", "livejournal", "blogger"],
//   internet = [...video, ...blogs, "vk", "favebook"];

// console.log(internet);

// // 2 пример
// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// // 3 пример
// const array = ["a", "b"];

// const newAray = [...array];

// newAray[0] = "c";

// console.log(newAray);
// console.log(array);

// // 4 пример с обьектом
// const q = {
//   one: 1,
//   two: 2,
// };

// const newObj = { ...q };

// newObj.one = 5;

// console.log(newObj);
// console.log(q);

//TODO основы ООП (прототипно ориентированое программирование)

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof str);
// // console.log(typeof strObj);

// console.dir([1, 2, 3]);

// // Наследование

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("hello");
//   },
// };

// const john = Object.create(soldier); //создаем новый обьект, который прототипно наследуется от soldier

// // const john = {
// //   health: 100,
// // };

// // john.__proto__ = soldier; //__proto__ уже не используется

// Object.setPrototypeOf(john, soldier); //новый формат анологичный __proto__

// // console.log(john.armor);
// john.sayHello();

//TODO ПРАКТИКА обьекты

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false,
//   start: () => {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: () => {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних фильмов?", "");
//       const b = prompt("На сколько оцените его?", "");

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("Error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: () => {
//     if (personalMovieDB.count < 5) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 5 && personalMovieDB.count < 8) {
//       console.log("Классический зритель!");
//     } else if (personalMovieDB.count >= 8) {
//       console.log("Вы киноман!");
//     } else {
//       console.log("Произогла ошибка!");
//     }
//   },
//   showMyDataBase: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGanres: function () {
//     for (let i = 0; i <= 3; i++) {
//       const genre = prompt("Ваш любимый жанр под номером ${i}");
//       if (genre === "" || genre == null) {
//         console.log("Вы ввели некорректные данные");
//         i--;
//       } else {
//         personalMovieDB.genres[i - 1] = genre;
//       }
//     }

//     personalMovieDB.geners.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
// };

//TODO Динамическая типизация - возможность одного типа данных превращатся в другой
// // To string

// //1)
// console.log(typeof String(null));

// // String превратила null в строку

// //2) конкатинация
// console.log(typeof String(5 + ""));
// // при сложении со строкой получается строка
// //пример

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";

// //To number

// //1)
// console.log(typeof Number("hello"));
// // Number превратил hello в числовой тип данных

// //2) используем унарный +
// console.log(typeof +"hello");

// //3) через метод parseInt
// console.log(typeof parseInt("15px", 10));

// let answer = +prompt("hello", "");

// // to bolean

// //0, '', null, undefined, NaN - имеет значение false изначально, все остальное будет true в логическом контексте

// //1)
// let switcher = null;

// if (switcher) {
//   console.log("Working");
// }

// switcher = 1;

// if (switcher) {
//   console.log("Working");
// }

// //2) через Bolean
// console.log(typeof Boolean("3"));

// //3) через !!
// console.log(typeof !!"3");

// TODO DOM

// const box = document.getElementById("box"),
//   btns = document.getElementsByTagName("button"), // псевдо массив
//   circles = document.getElementsByClassName("circle"), // псевдо массив
//   tringles = document.querySelectorAll(".tringle"), // псевдо массив
//   // метод forEach существует только в querySelector
//   oneTringle = document.querySelector(".tringle");

// // console.dir(box); // получаем эдемент как обьект
// box.style.backgroundColor = "blue";
// box.style.width = "500px";
// box.style.height = "250px";

// btns[1].style.borderRsdius = "100%";
// circles[0].style.backgroundColor = "red";

// // назначаем несколько css свойств
// box.style.cssText = "background-color: blue; width: 500px";

// // меняем стили в нескольких эдементах
// // 1) вариант через цикл
// for (let i = 0; i < tringles.length; i++) {
//   tringles[i].style.backgroundColor = "green";
// }

// // 2) вариант через callback функцию
// tringles.forEach((item) => {
//   item.style.backgroundColor = "green";
// });

// // метды для создания новых элементов на странице
// const div = document.createElement("div"); // сушествует только внутри javascript файла
// // const text = document.createTextNode("текст в ноде");

// div.classList.add("black"); //добавил класс bkack

// //добавляем div в конец body
// document.body.append(div);

// // добавляем div в конец wrapper
// document.querySelector(".wrapper").append(div);

// // добавляем div в начало wrapper
// document.querySelector(".wrapper").prepend(div);

// // добавляем div перед 1-ым tringle
// tringles[0].before(div);

// // добавляем div после 1-го tringle
// tringles[0].after(div);

// // удаляем элемент со страницы
// circles[0].remove();

// // меняем 1 tringle на 1 circle - замена эдемента
// tringles[0].replaceWith(circles[0]);

// // вставляем элемент в div
// div.innerHTML = "<h1>hello</h1>";

// // вставляем кусок кода перед и после определенного тега
// div.insertAdjacentHTML("beforebegin", "<h2>hi</h2>");
// div.insertAdjacentHTML("afterbegin", "<h2>hi</h2>");

// TODO события и их обработчики
// TODO Событие - сигнал от браузера о том что что-то произошло(клик, наведение мыши и прочее...)

// TODO назначаем обработчик события - функция, которая срабатывает как только событие произошло

// const btn = document.querySelector("button");

// // btn.onclick = function (params) {
// //   alert("click");
// // }; // не используется

// btn.addEventListener("click", (event) => {
//   console.log(event.target); // получаем имя елемента, на который нажали
//   event.target.remove(); // при клике элемент пропадет со страницы
//   alert("dont click!");
// }); // можем назначать несколько действий на 1 событие

//TODO всплытие событий - когда обработчик событий срабатывает сначала на вложеном элементе затем на родители и так выше поднимаясь по иерархии

// // отмена стандартного поведения по клику
// const link = document.querySelector("a");

// link.addEventListener("click", (event) => {
//   event.preventDefault();

//   console.log(event.target);
// });

//TODO навигация по DOM

// // console.log(document.body);
// // console.log(document.documentElement);
// // console.log(body.childNodes);
// // console.log(body.firstChild); //firstElementChild
// // console.log(body.lastChild);

// console.log(document.querySelector("#current").parentNode.parentNode); // получаем родителя и выше по дереву

// console.log(document.querySelector('[data-current="3"]').previosElementSibling); // получаем предыдущего соседа от дата атрибута

// // цикл for of

// for (let node of document.body.childNodes) {
//   if (node.nodeName == "text") {
//     continue; // остановит выполнение цикла
//   }

//   console.log(node);
// }

//TODO события на смартфонах

// // touchstart
// // touchmove
// // touchend
// // touchenter
// // touchleave
// // touchcancel

// window.addEventListener("DOMContentLoaded", () => {
//   const box = document.querySelector(".box");

//   box.addEventListener("touchstart", (e) => {
//     e.preventDefault();

//     console.log("start");
//     console.log(e.touches);
//   });

//   box.addEventListener("touchmove", (e) => {
//     e.preventDefault();

//     console.log("move");
//     console.log(e.targetTouches[0].pageX);
//   });

//   box.addEventListener("touchend", (e) => {
//     e.preventDefault();

//     console.log("end");
//   });
// });

// // свойства при работе с сенсорными устройствами

// // touches - сколько пальцев взаимодействует с экраном
// // targetTouches - сколько пальцев взаимодействует с экраном сейчас
// // changedTouches - список пальцев, которые участвуют в событии

//TODO загрузка скриптов на страницу async, defer

// // defer - скрипт загружается в фоновом редиме и сработает после загрузки html страницы, сохраняет последовательность загрузки скриптов
// // <script defer src="main.js"></script>

// // async - запускается как только загрузится
// // <script async src="main.js"></script>

// const script = document.createElement("script"); //создаем скрипт
// script.src = "js/test.js"; // указываем путь к скрипту
// script.async = false; // отменяем асинхронное поведение
// document.body.append(script); // помещаем на страницу

//TODO

// const btns = document.querySelectorAll("button");
// const wrapper = document.querySelector(".btn-block");

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0)); // получаем класс
// // console.log(btns[1].classList.add("red")); // добавляем класс
// // console.log(btns[0].classList.remove("blue")); // удаляем класс
// // console.log(btns[0].classList.toggle("blue")); // если этого класа нет у элемента он добавтся, а если есть удалится

// // if (btns[1].classList.contains("red")) {
// //   console.log("red");
// // }

// btns[0].addEventListener("click", () => {
//   // // 1 вариант
//   // // проверяем что у кнопки второй нет класа ред
//   // if (!btns[1].classList.contains("red")) {
//   //   // если класса нет мы его добавим
//   //   btns[1].classList.add("red");
//   // } else {
//   //   // если класс ред есть у кнопки то мы его удаляем
//   //   btns[1].classList.remove("red");
//   // }
//   // // 2 вариант
//   // btns[1].classList.toggle("red");
// });

// // делигирование событий
// // для родителя назначаем функцию которая работает с потомками
// wrapper.addEventListener("click", () => {
//   console.dir(event.target);
//   if (event.target && event.target.tagName == "BUTTON") {
//     console.log("hello");
//   }
// });

//TODO анимация
// // зоздаем новый элемент
// const btn = document.createElement("button");
// // назначаем ему класс
// btn.classList("red");
// // добавляем его в конец wrapper
// wrapper.append(btn);

// // анимация через определенное время
// const btn = document.querySelector(".btn");
// let timerId;
// let i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     // 300 - 400px(родитель) - 100px(элемент)
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);

// // теория

// // setInterval vs setTimput в чем разница?
// btn.addEventListener("click", () => {
//   // const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 500);
// });

// // // сброс
// // clearInterval(timerId);

// function logger() {
//   if (i == 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }

// // рекурсивный вызов setTimout
// // работает как setInterval, код будет ждать строго отведенное ему время в отличии от setInterval
// let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 1000);

//TODO работа с датами

// const now = new Date("2021-01-27");
// // new Date.parse("2021-01-27"); // ничем не отличается от записи выше

// console.log(now);

// //методы
// //получение компонентов даты
// console.log(now.getFullYear());
// console.log(now.getMonth()); // отcчет начинается с 0
// console.log(now.getDate());
// console.log(now.getDay()); // отcчет начинается с воскресения
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// // установка даты
// console.log(now.setHours(18, 40)); // часы и минуты

// // операции бенчмарки
// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();

// alert(`цикл отработал за ${end - start} милисекунд`);

//TODO окна и работа с ними
// console.dir(document); // смотрим что находится в документе

// const box = document.querySelector(".box");

// // const width = box.clientWidth; // получаем шырину box вместе с падингами
// // const height = box.clientHeight; // получаем высоту box
// // const width = box.offsetWidth; // получаем шырину box вместе с падингами
// // const height = box.offsetHeight; // получаем высоту box
// const width = box.scrollWidth; // получаем шырину box вместе с падингами
// const height = box.scrollHeight; // получаем высоту box

// console.log(width, height);

// // при надатии на кнопку разварачивается весь текст
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   box.style.height = box.scrollHeight + "px";
//   // console.log(box.scrollTop);
// });

// // получаем все координаты эдемента box
// console.log(box.getBoundingClientRect());

// // как получить стили, которые уже применены к элементу
// const style = window.getComputedStyle(box);

// console.log(style.display);

// TODO функции консиркукторы

// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function (params) {
//     console.log(`hello, ${this.name}`);
//   };
// }

// user.prototype.exit = function (name) {
//   console.log(`Пользователь ${this.name} ушел`);
// };

// const max = new user("Maxim", 23);
// const alex = new user("Alexandr", 20);

// max.exit();

// console.log(alex, max);

// TODO контекст вызова this
// это то что окружает функцию и в каких условиях она вызывается

// способы вызова функции

// 1) обычная функция this = window, но если указать use strict - undefined
// function showThis(params) {
//   console.log(this);
// }

// showThis();

// // практическая задача
// function showThis2(params) {
//   console.log(this);
//   function sum(params) {
//     console.log(this);
//     return this.a + this.b; // нужно убрать this и все заработает
//   }
//   console.log(sum());
// }

// showThis2(4, 5);

// 2) контекст у методов обьекта - сам обьект
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function (params) {
//     console.log(this);
//   },
// };

// obj.sum();

// 3) this в конструкторах и классах - новый экземпляр обьекта
// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function (params) {
//     console.log("hello," + this.name);
//   };
// }

// let ivan = new user("Ivan", 23);

// // 4) ручная привязка this: call, apply, bint
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "john",
// };

// // функция преобрела контекст благолдаря методу ниже
// sayName.call(user, "smith");
// sayName.apply(user, ["smith"]);

// // метод - создает новую фвнкцию и под нее подвязывает контекст
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2); // ао сути создаем новую функцию
// console.log(double(13));

// // практика на обработчике событий
// // 1 пример
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
// });

// // у стрелочной функции нет своего контекста вызова, она всегда будет брать его у своего родителя

// const obj = {
//   num: 5,
//   sayNumber: function (params) {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   },
// };
// // функция say обратилась к обьекту и вязала свойство num, есди бы была обычная функция - вывелась бы ошибка

// obj.sayNumber();

// // в обработчиках событий, когда используем обычный синтаксис через function мы имеем доступ к this, если же используем стрелочную функцию то конекст вызова теряется

// TODO классы (ES6)
// // классы - обертка функций конструкторов
// // имя класса всегда начинается с большой буквы

// class Rectangle {
//   // свойства
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // методы
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// // наследованость
// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     // super наследует от Rectangle height и width
//     // super всегда должен быть 1-ым
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectangleWithText(23, 8, "Hello", "red");
// div.showMyProps();
// console.log(div.calcArea);

// const square = new Rectangle(10, 12);
// const long = new Rectangle(27, 18);

// console.log(square.calcArea());
// console.log(long.calcArea());

// TODO Rest (...) оператор и параметры по умолчанию
//  Rest обьединяет отдельные элементы в 1 массив

// const log = function (a, b, ...rest) {
//   console.log(a, b, rest);
// };

// log("basic", "rest", "operator", "usage");

// // параметры по умолчанию
// function calcOrDuble(number, basis = 2) {
//   console.log(number * basis);
// }

// calcOrDuble(3);

// TODO JSON, глубокое клонирование обьектов
// // JavaScript Object Notation используется для передачи и хранения данных

// const person = {
//   name: "Alex",
//   tel: "+380111111111",
//   parrent: {
//     mom: "Barak",
//     dad: "Obama",
//   },
// };

// // stringify() - превращает обьекты JS в JSON
// console.log(JSON.stringify(person));
// // parse() - превращает JSON в JS

// // глубокие копии обьектов создаются при помощи JSON, который не будет зависить от первоначального обьекта
// const clone = JSON.parse(JSON.stringify(person));
// clone.parrent.mom = "Trump";
// console.log(clone);

// TODO AJAX и общение с сервером
// // используй open-server

// // калькулятор валют для примера
// const inputRub = document.querySelector("#rub"),
//   inputUsd = document.querySelector("#usd");

// // событие change возникает когда input уходит из фокуса
// inputRub.addEventListener("input", () => {
//   const request = new XMLHttpRequest();
//   // методы обьекта XMLHttpRequest

//   // метод open - собирает настройки,
//   // open принимает 5 аргумента (method , url, async, login, password)
//   request.open("GET", "current.json");
//   // http заголовки какую информацию передаем вообще
//   request.setRequestHeader("Content-type", "application/jdon; charset=utf-8");
//   request.send();

//   // сововйства обьекта XMLHttpRequest

//   // status (404 not found)
//   // statusText
//   // respons (ответ от сервера)
//   // redyState (содержит текущее состояние запроса )

//   // события обьекта XMLHttpRequest

//   // 1)
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.response);
//       // переводим JSON в понятный формат или парсим
//       const data = JSON.parse(request.response);
//       // расчитываем курс валют (что пришло с сервера и что ввел юзер)
//       inputUsd.value = +inputRub.value / data.current.usd;
//     } else {
//       inputUsd.value = "Что-то пошло не так";
//     }
//   });
// });

// TODO Promise (ES6) - выполняет асинхронный код друг за другом
// // приемущество перед call-back - мы можем возвращать promise в .then() по цепочке
// console.log("Запрос данных");
// // создаем обещание, которое помещаем во внутрь переменной req
// // обещание может закончится положительно или отрицательно - мы не знаем
// // если все прошло правильно мы вызываем функцию resolve
// // resolve - выполнелось, reject - не выполнелось (это функции)
// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Подготовка данных");

//     const product = {
//       name: "tv",
//       price: 400,
//     };

//     resolve(product);
//   }, 2000);
// });

// // метод .then() - для обработки положительных результатов
// req
//   .then((product) => {
//     new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   // выполнение по цепочке
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   // если произойдет ошибка
//   .catch(() => {
//     console.log("Ошибка");
//   })
//   // finaly - используется всегда в конце, позволяет выполнить действия в любом исходе промиса
//   .finaly(() => {
//     console.log("finaly");
//   });

// // методы all() и race()
// const test = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log("1000 ms"));
// // test(2000).then(() => console.log("2000 ms"));

// // // Promise.all() - убеждаемся что все наши промисы уже выполнились
// // Promise.all([test(1000), test(2000)]).then(() => {
// //   console.log("all");
// // });

// // Promise.race() - выполняет все свои действия после того как первый промис отработал
// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("all");
// });

// TODO API (application programming interface) - набор данных и возможностей которые нам предоставляет какое-то готовое решение.
// К примеру DOM API - по факту это различные методы, которые позволяют работать с элементами на странице.

// TODO Fetch API
// // fetch api - уже встроен в браузер, позволяет общатся с сервером и построен на промисах

// // на примере get запроса и обратки данных
// fetch("https://jsonplaceholder.typicode.com/todos/1") // возвращается promise, который далее обрабатывается
//   .then((response) => response.json()) // первращает json в обьект, также возвращает promise
//   .then((json) => console.log(json));

// // на примере post запроса и отправки данных
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "POST",
//   body: JSON.stringify({ name: "Igor" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }) // возвращается promise, который далее обрабатывается
//   .then((response) => response.json()) // первращает json в обьект, также возвращает promise
//   .then((json) => console.log(json));

// TODO методы перебора массивов

// // метод for each никогда не возаращает новый массив, он просто его переберает

// // метод filter
// const names = ["Igor", "Ksenia", "Yulia", "Darina", "Ann"];

// const shortNames = names.filter(function (name) {
//   return name.length < 5;
// });

// console.log(shortNames);

// // метод map - позволяет изменить елемент внутри массива
// const answers = ["IgOr", "ksENiA", "YuLIa"];

// const result = answers.map((item) => {
//   return item.toLowerCase();
// });

// console.log(result);

// // методы every/some - возвращают булиновое значение
// const some = [4, "qwq", "sfsfkj"];

// // если используем some - хотя бы 1 элемент должен соответсвовать условию
// console.log(
//   some.some((item) => {
//     return typeof item === "number";
//   })
// );

// // в every же все элементы массива должны соответсвовать условию
// console.log(
//   some.every((item) => {
//     return typeof item === "number";
//   })
// );

// // метод reduce - собирает массив в 1 единое целое
// const arr = [4, 5, 1, 3, 2, 6];

// // получаем сумму чисел
// const res = arr.reduce((sum, current) => {
//   return sum + current;
// });

// console.log(res);

// // получаем строку
// const arr2 = ["apple", "pear", "orange"];

// // используем интерполяцию - `${}`
// const res2 = arr2.reduce((sum, current) => {
//   return `${sum}, ${current}`;
// });

// // практический пример: делаем из обьекта массив
// const obj = {
//   igor: "person",
//   ksenia: "person",
//   dog: "animal",
//   cat: "animal",
// };

// // вытаскиваем имена людей
// // метод обькта entries() - превращает обтект в массив в нутри которого также находятся массивы
// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "person")
//   .map((item) => item[0]);

// console.log(newArr);

// TODO как сохранить данные без бд. Local storage
// // local storage - (обьект) свойство глобального обьекта window

// // добавляем свойство
// localStorage.setItem("number", 5);
// // получаем данные из local storage
// localStorage.getItem("number");
// // удаляем свойство
// localStorage.removeItem("number");
// // полностью чистим localStorage
// localStorage.clear();

// TODO регулярные выражения
// // состоит из патерна и флагов
// // патерн - шаблон

// // new RegExp("pattern", "flags");
// // /pattern/flags

// // метод поиска
// const ans = prompt("Введите ваше имя");

// const reg = /n/gi;
// // i - не зависит от регистра
// // g - для всех знаков
// // m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("password");

// console.log(pass.replace(/./g, "*"));

// // меняем - на :
// console.log("12-34-56".replace(/-/g, ":"));

// // методы регулярных выражений

// console.log(reg.test(ans));

// // классы в регулярных выражениях
// // \d - ищем все цифры
// // \w - ищем все слова
// // \m - ишем все пробелы

// const str = "my name is r2b2";

// console.log(str.match(/\w\d\w\d/i));

// // Обратные классы
// // \D - не числа
// // \W - не буквы

// TODO Инкапсуляция - отделение и сокрытие внутренностей программы(обьект хранит данные в приватном порядке и только методы обьекта имеют доступ к его изменениям)


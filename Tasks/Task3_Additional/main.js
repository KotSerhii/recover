{
// –створити масив з:
//     – з 5 числових значень
//     let arr = [3, 5, 6, 7, 8];
//     console.log(arr);

// – з 5 стічкових значень
//     let arr1 = ['23', 'ghghg', 'try', '0', 'iuy'];
//     console.log(arr1);

// – з 5 значень стрічкового, числового та булевого типу
//     let arr2 = ['23', 'ghghg', 'try', '0', 'iuy', true, false, 6, 789];
//     console.log(arr2);

// – та вивести його в консоль

//----------------------------------------------------------

// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
//     let arr3 = [];
//     arr3[0] = 56;
//     arr3[1] = 'rtyrty';
//     arr3[2] = false;
//     arr3[3] = true;
//     console.log(arr3);

//---------------------------------------------------------------
    let arr4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while
//     let i = 0;
//     while (i < arr4.length) {
//         console.log(arr4[i]);
//         i++;
//     }

//     2. перебрати його циклом for
//     for (let i = 0; i < arr4.length; i++) {
//         console.log(arr4[i]);
//     }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//     let j = 1;
//     while (j < arr4.length) {
//         console.log(arr4[j], 'index:', j);
//         j += 2;
//     }
//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     for (let i = 1; i < arr4.length; i += 2) {
//         console.log(arr4[i], 'index:', i);
//     }
//     5. перебрати циклом while та вивести  числа тільки парні  значення
//     i = 0;
//     while (i < arr4.length) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr4[i], 'index:', i);
//         }
//         i++;
//     }
//     6. перебрати циклом for та вивести  числа тільки парні  значення

    // for(let i=0;i<arr4.length; i++){
    //     if(arr[i]%2===0){
    //         console.log(arr4[i], 'index:', i);
    //     }
    // }
//     7. замінити кожне число, кратне 3, на слово “okten”
//     let arr5 = [];
//     for (let i = 0; i < arr4.length; i++) {
//         if(arr4[i]%3===0){
//             arr5[i]='okten';
//         } else {
//             arr5[i]=arr4[i];
//         }
//           }
//     console.log(arr5,arr4);

//      8. вивести масив у зворотньому порядку.
//     for (let i = arr4.length-1; i >= 0; i--) {
//         console.log(arr4[i]);
//             }
//
//     9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

    //     9.1. перебрати його циклом while
    //  i = arr4.length-1;
    // while (i >=0) {
    //     console.log(arr4[i]);
    //     i--;
    // }

//     2. перебрати його циклом for
//     for (let i = arr4.length-1; i >=0; i--) {
//         console.log(arr4[i]);
//     }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//     j = arr4.length-1;
//     while (j >0) {
//         console.log(arr4[j], 'index:', j);
//         j -= 2;
//     }
//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     for (let i = arr4.length-1; i >0; i -= 2) {
//         console.log(arr4[i], 'index:', i);
//     }
//     5. перебрати циклом while та вивести  числа тільки парні  значення
//     i = arr4.length-1;
//     while (i >= 0) {
//         if (arr4[i] % 2 === 0) {
//             console.log(arr4[i], 'index:', i);
//         }
//         i--;
//     }
//     6. перебрати циклом for та вивести  числа тільки парні  значення

    // for(let i=arr4.length-1;i>=0; i--){
    //     if(arr4[i]%2===0){
    //         console.log(arr4[i], 'index:', i);
    //     }
    // }
//     7. замінити кожне число, кратне 3, на слово “okten”
//     let arr6 = [];
//     for (let i = arr4.length-1; i >=0; i--) {
//         if(arr4[i]%3===0){
//             arr6[i]='okten';
//         } else {
//             arr6[i]=arr4[i];
//         }
//     }
//     console.log(arr6,arr4);

    //---------------------------------------------------------------------------[

//     #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let numbers = [12, 23, 56, 67, 87, 2, 34, 65, 7867];
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }

//     #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

    // let strings = ['gon','nib','tro','prem','vom','zir','mok','jac','gur','lk'];
    // for (let i = 0; i < strings.length; i++) {
    //     console.log(strings[i]);
    //
    // }

//     #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
//     let any = ['falde',56,78,false,'ghgj',090,true];
//     for(let i=0;i<any.length;i++){
//         console.log(any[i]);
//     }

//     #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//     let arrSort = ['falde',56,78,false,'ghgj',90,true,678,false,true];
//     for(let i=0;i<arrSort.length;i++){
//         if(typeof arrSort[i] === "boolean"){
//             console.log(arrSort[i]);
//         }
//
//     }
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

    // for(let i=0;i<arrSort.length;i++){
    //     if(typeof arrSort[i] === 'number'){
    //         console.log(arrSort[i], 'index:',i);
    //     }
    // }


//     #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//     for(let i=0;i<arrSort.length;i++){
//         if(typeof arrSort[i] === 'string'){
//             console.log(arrSort[i], 'index:',i);
//         }
//     }


// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    // let empty = [];
    // empty[0]='kaligula';
    // empty[1]=666;
    // empty[2]='rider';
    // empty[3]=true;
    // empty[4]=false;
    // empty[5]=34;
    // empty[6]=0;
    // empty[7]='tresbien';
    // empty[8]='busya';
    // empty[9]='tresbien';
    //
    // for(let i=0;i<empty.length;i++){
    //     console.log(empty[i]);
    // }


//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i=0;i<10;i++){
//     console.log('index=',i);
//     document.write(`<div>index = ${+i}</div>`);
// }


// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for(let i=0;i<100;i++){
    //     console.log('index=',i);
    //     document.write(`<div>index = ${+i}</div>`);
    // }

//     #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    // for(let i=0;i<200;i+=2){
    //     console.log('index=',i);
    //     document.write(`<div>index = ${+i}</div>`);
    // }

//     #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
//     for(let i=0;i<100;i++){
//        if(i%2===0){
//        console.log('index=',i);
//         document.write(`<div>index = ${+i}</div>`);
//        }
//     }

//     #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // for (let i = 0; i < 100; i++) {
    //     if (i % 2 !== 0) {
    //         console.log('index=', i);
    //         document.write(`<div>index = ${+i}</div>`);
    //     }
    // }
//
//
//
//-----------------------------------------------------------------------------------------------------------------
//     #reLkOkTB29Q
//
//     створити масив книжок (назва, кількість сторінок, автори , жанри).

    // let books = [
    //     {name: 'White fang', pages: 342, authors: ['Jack London'], genres: ['adventure']},
    //     {name: 'Gladiator', pages: 456, authors: ['Vivaldi'], genres: ['historic', 'thriller']},
    //     {name: 'Space', pages: 56, authors: ['Krein', 'Busido'], genres: ['detective', 'science', 'fiction']},
    //     {name: 'Goro', pages: 128, authors: ['Van', 'Tres', 'kvatro'], genres: ['thriller']},
    //     {name: 'Wind', pages: 42, authors: ['Lover'], genres: ['fantasy', 'rom-com']},
    //     {name: 'Of course', pages: 89, authors: ['Picksar'], genres: ['documentary']},
    //     {name: 'Kaligula', pages: 78, authors: ['Cesar'], genres: ['history', 'biography']},
    //     {name: 'Finger dginger', pages: 654, authors: ['Van', 'Don', 'Kun'], genres: ['fantasy']},
    //     {name: 'Van sok di', pages: 222, authors: ['Korean'], genres: ['adventure']},
    //     {name: 'Hanuman', pages: 114, authors: ['Rimnol'], genres: ['horror', 'comedy']},
    // ];
//
// – знайти найбільшу книжку.
//     let biggestBook = books[0];
//     for (let book of books) {
//         if (book.pages > biggestBook.pages) {
//             biggestBook = book;
//         }
//     }
//     console.log(biggestBook);
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//

    // let biggestGenres = books[0];
    // console.log(biggestGenres.genres.length);
    // for (let book of books) {
    //     if (book.genres.length > biggestGenres.genres.length) {
    //         biggestGenres = book;
    //     }
    // }
    // console.log(biggestGenres);

// – знайти книжку/ки з найдовшою назвою
//
//     let biggestTitle = 0;
//     let biggestNameBook = [];
//
//     for (let book of books) {
//         if (book.name.length > biggestTitle) {
//             biggestTitle = book.name.length;
//         }
//     }
//     for (const book of books) {
//         if (book.name.length === biggestTitle) {
//             biggestNameBook.push(book);
//         }
//     }
//     console.log(biggestTitle);
//     console.log(biggestNameBook);

// – знайти книжку/ки, які писали 2 автори
//
//     let twoAutorsBooks = [];
//     for (const book of books) {
//         if (book.authors.length === 2) {
//             twoAutorsBooks.push(book);
//             console.log('book', '"', book.name, '"', 'has two authors');
//         }
//     }
//     console.log(twoAutorsBooks);
// – знайти книжку/ки, які писав 1 автор
//
//     let oneAuthorBook = [];
//     for (const book of books) {
//         if (book.authors.length === 1) {
//             oneAuthorBook.push(book);
//             console.log('book', '"', book.name, '"', 'has one author');
//         }
//     }
//     console.log(oneAuthorBook);
//----------------------------------------------------------------------------------------------------------------
//     1. Створити пустий масив та :

    // let fillArr = [];
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//     let evenNumber = 2;
//     for (let i = 0; i < 50; i++) {
//         fillArr[i] = evenNumber;
//         evenNumber += 2;
//     }
//     console.log(fillArr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     fillArr = [];
//     let oddNumber = 1;
//     for (let i = 0; i < 50; i++) {
//         fillArr[i] = oddNumber;
//         oddNumber += 2;
//     }
//     console.log(fillArr);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
//
//     let randomNumArr = [];
//     for (let i = 0; i < 20; i++) {
//         randomNumArr[i] = Math.floor(Math.random() * 11);
//     }
//     console.log(randomNumArr);

//     d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
//     randomNumArr = [];
//     for (let i = 0; i < 20; i++) {
//         randomNumArr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     }
//     console.log(randomNumArr);

//     2. Вивести за допомогою console.log кожен третій елемент

    // for(let i=2;i<randomNumArr.length;i+=3){
    //     console.log(randomNumArr[i]);
    // }

//     3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
//
//     for (let i = 2; i < randomNumArr.length; i += 3) {
//         if (randomNumArr[i] % 2 === 0) {
//             console.log(randomNumArr[i]);
//         }
//     }

//     4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
//
//     let newArray = [];
//     for (let i = 2; i < randomNumArr.length; i += 3) {
//         if (randomNumArr[i] % 2 === 0) {
//             console.log(randomNumArr[i]);
//             newArray[newArray.length] = randomNumArr[i];
//         }
//
//     }
//     console.log(newArray);
//     5. Вивести кожен елемент масиву, сусід справа якого є парним
//
//     EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

    // let rightNeighborArray = [];
    // for (let i = 0; i < randomNumArr.length - 1; i++) {
    //     if (randomNumArr[i + 1] % 2 === 0) {
    //         rightNeighborArray[rightNeighborArray.length] = randomNumArr[i];
    //     }
    // }
    // console.log(rightNeighborArray);
//
//     6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//

    // let array = [100, 250, 50, 168, 120, 345, 188];
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    // console.log('Average = ', sum / array.length);
//
//
//     7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
//     let randomArray = [];
//     let anotherArray = [];
//     for (let i = 0; i < 20; i++) {
//         randomArray[i] = Math.floor(Math.random() * 100) + 1;
//     }
//     console.log(randomArray);
//     for (let i = 0; i < randomArray.length; i++) {
//         anotherArray[i] = randomArray[i] * 5;
//     }
//     console.log(anotherArray);

//     8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//
//     let anyArray = ['reb', 23, false, 8989, 65, 23, 'crona', 'ganster', 9898, 'rock', false, true];
//     let numberArr = [];
//     for (let i = 0; i < anyArray.length; i++) {
//
//         if (typeof anyArray[i] === 'number') {
//             numberArr[numberArr.length] = anyArray[i];
//         }
//     }
//     console.log(anyArray, numberArr);
//
// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
    let usersWithId = [

        {id: 1, name: 'vasya', age: 31, status: false},

        {id: 2, name: 'petya', age: 30, status: true},

        {id: 3, name: 'kolya', age: 29, status: true},

        {id: 4, name: 'olya', age: 28, status: false}

    ];

    let citiesWithId = [

        {user_id: 3, country: 'USA', city: 'Portland'},

        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},

        {user_id: 2, country: 'Poland', city: 'Krakow'},

        {user_id: 4, country: 'USA', city: 'Miami'}

    ];
//
//
//
//     З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//     Записати цей об’єкт в новий масив
//     Example:
//          let usersWithCities = [
//             {
//                id: 1,name: ‘vasya’, age: 31, status: false, address: {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’}
// },
// TO BE CONTINUED …..
// ]
//

    let usersWithCities = [];
    for (const user of usersWithId) {
        for (const city of citiesWithId) {
            if (user.id === city.user_id) {
                // usersWithCities[usersWithCities.length]={id:user.id, name:user.name,age:user.age,status:user.status,address:{user_id:city.user_id, country:city.country, city:city.city}};
                usersWithCities[usersWithCities.length] = {...user, address: city};

            }
        }
    }
    console.log(usersWithCities);

//
//
//
//
//
//
//
//
// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
    let numbers = [1, 34, 67, 323, 45, 566, 78, 99, 98, 234];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i]);
        }
    }


//
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
    let copyArray = [...numbers];
    // for(let i=0;i<numbers.length;i++){
    //     copyArray[i]=numbers[i];
    // }

    console.log(numbers);
    console.log(copyArray);
//
//
//
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
    let lettersArray = ['a', 'b', 'c'];
    let wordFromArray = '';
    for (let i = 0; i < lettersArray.length; i++) {
        wordFromArray += lettersArray[i];
    }
    console.log(wordFromArray);

//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.

    let i = 0;
    wordFromArray = '';
    while (i < lettersArray.length) {
        wordFromArray += lettersArray[i];
        i++;
    }
    console.log(wordFromArray);
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

    wordFromArray = '';
    for (let letter of lettersArray) {
        wordFromArray += letter;
    }
    console.log(wordFromArray);

}
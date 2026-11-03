{
//     #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

    // function square(a, b) {
    //     return a * b;
    // }
    //
    // let a = square(3, 4);
    // console.log(a);


//     #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

    // function circleSquare(radius) {
    //     return Math.PI * radius * radius;
    // }
    //
    // console.log(circleSquare(5));

//     #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

    // function cylinderSquare(radius, height) {
    //     return 2 * Math.PI * radius * height;
    // }
    //
    // console.log(cylinderSquare(4, 10));

//     #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

    // let arr = [123, 'klkjl', true, false, 'Ok'];
    //
    // function iterator(array) {
    //     for (let i = 0; i < array.length; i++) {
    //         console.log(array[i]);
    //     }
    // }
    //
    // iterator(arr);

// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

    // function createParagraph(text) {
    //     document.write(`<p>${text}</p>`);
    // }
    //
    // createParagraph('Hello Padavan');

    // – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

//     function addList(text) {
//         document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//
// </ul>`);
//     }
//
//     addList('Excellent');


// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

    // function addListNum(text, number) {
    //     document.write(`<ul>`)
    //
    //     for (let i = 0; i < number; i++) {
    //         document.write(`<li>${text}</li>`)
    //     }
    //
    //     document.write(`</ul>`)
    // }
    //
    // addListNum("I can't believe!", 5);

//     #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

    // let arrPrimitive = [23, 9595, 'tyu', 'eieie', false, true, 'game'];
    //
    // function iterPrimitive(arr) {
    //     document.write(`<ul>`)
    //     for (const item of arr) {
    //         document.write(`<li>${item}</li>`)
    //     }
    //     document.write(`</ul>`)
    // }
    //
    // iterPrimitive(arrPrimitive);

//     #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

//     let users = [
//         {id: 1, name: "John", age: 25},
//         {id: 2, name: "Jane", age: 29},
//         {id: 3, name: "John", age: 21},
//         {id: 4, name: "Jane", age: 15},
//         {id: 5, name: "John", age: 45},
//         {id: 6, name: "Jane", age: 35},
//         {id: 7, name: "John", age: 26},
//         {id: 8, name: "Jane", age: 27},
//         {id: 9, name: "John", age: 28},
//         {id: 10, name: "Jane", age: 29},
//     ];
//
// function addUser(users) {
//     for (const user of users) {
//     document.write(`<div>${user.id} - name:${user.name} - age${user.age}</div>`)
//             }
// }
//     addUser(users);

//     #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
    let arrN = [4, 56, 8, 23, 34, 76, 5, 3, 45, 76, 78, 99];

    function minNumber(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    console.log(minNumber(arrN));

//     #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

    function sumArrayNumbers(arr) {
        let sum = 0;
        for (const number of arr) {
            sum += number;
        }
        return sum;
    };

    console.log(sumArrayNumbers([1, 2, 10]));


//     #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
//     Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

    function swap(arr, index1, index2) {
        if(index1<arr.length && index2<arr.length){
        let first = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = first;
        return arr;
                    } else{
            return 'Wrong index';
        }
    };

    console.log(swap([11, 22, 33, 44], 2, 0));

    // #mkGDenYnNjn.html
    //
    // Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
    //
    // Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
    let currencyValues=[
        {currency:'USD', value:45},
        {currency: 'EUR', value:50}
    ]
    function exchange(sumUAH,currencyValues,exchangeCurrency){
        for (const currency of currencyValues){
            if(currency.currency===exchangeCurrency){
                return sumUAH/currency.value;
            }
        }
    }
    console.log(exchange(10000,currencyValues,'EUR'));


}
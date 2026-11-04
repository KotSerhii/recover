{
//     #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//     let squareRectangle = (a, b) => a * b;
//     console.log(squareRectangle(5, 5));
//     #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
//     let circleArea = (radius) => Math.PI * radius ** 2
//     console.log(circleArea(10));

//     #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
//     let cilinderArea = (radius, height) => 2 * Math.PI * radius * (radius + height)
//     console.log(cilinderArea(5, 10));
//     #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
//     let arrShow = (arr) => {
//         for (const arrElement of arr) {
//             console.log(arrElement)
//         }
//     }
//     arrShow([34, 56, 5, 'ghgh', false]);

// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
//
//     let paragraphCreator = (text) => document.write(`<p>${text}</p>`);
//
//     paragraphCreator('hello and goodbye');
//     #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
//     let listElement = (text) => {
//         document.write(`<ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>`)
//     }
//     listElement('crazy');
    // #0Kxco1edSN
    //
    // – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    //
    // let listElementWithNumber = (text, number) => {
    //     document.write(`<ul>`);
    //     for (let i = 0; i < number; i++) {
    //         document.write(`<li>${text}</li>`);
    //     }
    //     document.write(`</ul>`);
    // }
    // listElementWithNumber('chop', 5);


    //     #gEFoxMMO
    //
    // – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
    //
    // let listFromArr = (arr) => {
    //     document.write(`<ul>`);
    //     if (Array.isArray(arr)) {
    //         for (const arrElement of arr) {
    //             document.write(`<li>${arrElement}</li>`);
    //         }
    //     } else {
    //         document.write('Something went wrong');
    //     }
    //     document.write(`</ul>`);
    // }
    // listFromArr(['trm', false, 9898, true, 'wrong']);
    // listFromArr({});

    //     #bovDJDTIjt
    //
    // – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
    //
    // let users = [
    //     {id: 1, name: "John", age: 25},
    //     {id: 2, name: "Jane", age: 29},
    //     {id: 3, name: "John", age: 21},
    //     {id: 4, name: "Jane", age: 15},
    //     {id: 5, name: "John", age: 45},
    //     {id: 6, name: "Jane", age: 35},
    //     {id: 7, name: "John", age: 26},
    //     {id: 8, name: "Jane", age: 27},
    //     {id: 9, name: "John", age: 28},
    //     {id: 10, name: "Jane", age: 29},
    // ];
    //
    // let objectFromArray = (obj) => {
    //     if(Array.isArray(obj)) {
    //         for (const objElement of obj) {
    //             document.write(`<div>${objElement.id} name: ${objElement.name} age:${objElement.age}</div>`);
    //     }
    //         } else {document.write("This is not an object")}
    // }
    // objectFromArray(users);
    // objectFromArray('kjkjk')

    //     #pghbnSB
    //
    // – створити функцію, яка повертає найменше число з масиву

    // let minFromArray = (arr) => {
    //     let min = Infinity;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (typeof arr[i] === 'number' && arr[i] <= min) {
    //             min = arr[i];
    //         }
    //
    //     }
    //     return min;
    // }
    // console.log(minFromArray(['catch', 1, -1, 34, true, 56, -55, 454, 'catch', 345, 65]));

    //
    //     #EKRNVPM
    //
    // – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

    // let sum = (arr) => {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //
    //         if (typeof arr[i] === 'number') {
    //             sum += arr[i];
    //         }
    //
    //     }
    //     return sum;
    // }
    //
    // console.log(sum(['no', null, undefined, 5, 5, 5, 5, 5, 'value', true]));
    //
    //     #kpsbSQCt2Lf
    //
    // – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
    //
    // let swap = (arr, index1, index2) => {
    //
    //     if (Array.isArray(arr)) {
    //         const temp = arr[index1];
    //         arr[index1] = arr[index2];
    //         arr[index2] = temp;
    //         return arr;
    //     } else {
    //         return 'This is not an array';
    //     }
    // }
    //
    // console.log(swap(['first', 'second', 'third', 'fourth'], 0, 3));
    // console.log(swap([1, 2, 3, 4, 5, 6], 2, 0));


    //     Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    //
    //     #mkGDenYnNjn
    //

    // – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
    //
    //     Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
    const curs = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 50}];

    let exchange = (sumUAH, currencyValues, exchangeCurrency) => {

        for (const item of currencyValues) {

            if (exchangeCurrency === item.currency) {
                 return sumUAH / item.value;
            }
        }
        return 0;

    };

    console.log(exchange(10000, curs, 'USD'));


}
{
//     #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//     let str1 = 'hello world';
//     let str2 = 'lorem ipsum';
//     let str3 = 'javascript is cool';
//
//     console.log(str1.length);
//     console.log(str2.length);
//     console.log(str3.length);
//
//     let strArr = [str1, str2, str3];

//
//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
//     let strArrUpp = [];
//     for (const string of strArr) {
//         strArrUpp.push(string.toUpperCase());
//     }
//     console.log(strArrUpp);

//
//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
//     let strArrLower = [];
//     for (const strArrUppElement of strArrUpp) {
//         strArrLower.push(strArrUppElement.toLowerCase());
//     }
//     console.log(strArrLower);

//
// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
//
//     let strDirty = ' dirty string   ';
//     let clearStr = strDirty.trim();
//     console.log(clearStr, clearStr.length, strDirty.length);

//
//
//
//     #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
//     let str = 'Ревуть воли як ясла повні';
//
//     function stringToArray(str) {
//         if (typeof str === 'string') {
//             return str.split(' ')
//         }
//         return "This isn't a string!";
//     }
//
//     console.log(stringToArray(str));
//
//
//
//     #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
//
//     let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
//     let mapedNumArr = numArr.map(value => {
//         // return `${value}`;
//         // return value.toString();
//         // return value + '';
//         return String(value);
//     });
//     console.log(mapedNumArr);


//
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
//     sortNums(nums,’ascending’) // [3,11,21]
//
//     sortNums(nums,’descending’) // [21,11,3]
//
//
//
//
//
// ==========================
//
//     #yo06d74c1C
//
// – є масив
//
//     let coursesAndDurationArray = [
//
//         {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
//
//
//
//
//
//
//
//
//
//
// #4LJn7zBx
//
//     взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker


}
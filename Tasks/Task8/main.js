{

    // за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
    //
    // Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

    let coursesAndDurationArray = [

        {title: 'JavaScript Complex', monthDuration: 5},

        {title: 'Java Complex', monthDuration: 6},

        {title: 'Python Complex', monthDuration: 6},

        {title: 'QA Complex', monthDuration: 4},

        {title: 'FullStack', monthDuration: 7},

        {title: 'Frontend', monthDuration: 4}

    ];

    //-----crypto.randomUUID() - create unique id for every element-------//
    let mapedCourses = coursesAndDurationArray.map(value => ({id: crypto.randomUUID(), ...value}));
    console.log(mapedCourses);

    // #AiN5CoUQ
    // Створити функцію, яка робить глибоку копію об'єкта.
    // Додати перевірки на undefined, null, NaN.
    // Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


//     const deepCopyFunc = function (obj) {
//         if (obj !== null && typeof obj === 'object') {                     //
//             let copyWithoutFunction = JSON.parse(JSON.stringify(obj));
//             let copyFunctions = {};
//
//             for (const [key, value] of Object.entries(obj)) {
//                 if (typeof value === 'function') {
//                     copyFunctions[key] = function (...args) {
//                         return value.apply(this, args)
//                     };
//                 }
//
//             }
//             return {...copyWithoutFunction, ...copyFunctions};
//         } else {
//             throw new Error(`The ${obj} is not an object`)
//         }
//     }
//
//     let test = [{
//         name: 'vasya', age: 21}, {skills: ['volya', 'kolya']}, {func() {
//             console.log('Hi Jorge')
//         }}, {func2(){
//             func();
//         }}
//     ];
//
//     let test2 = deepCopyFunc(test);
//
//     function deepCopyRecurs(object) {
//
//         if (typeof object === 'function') {
//             return function (...args) {
//                 return object.call(this, ...args);
//             };
//         }
//         if (typeof object !== 'object' || object === null) {
//             return object;
//         }
//         const clone = Array.isArray(object) ? [] : {};
//
//         for (const [key, value] of Object.entries(object)) {
//             clone[key] = deepCopyRecurs(value);
//         }
//
//         return clone;
//     }
// let test3 = deepCopyRecurs(test);
//     console.log(test3);
//     console.log(test3.func === test.func);
}
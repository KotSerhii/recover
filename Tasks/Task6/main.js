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
//     let nums = [11, 21, 3, 5, 8, 45, 67, 87, 99];
//
//     // sortNums(nums,’ascending’) // [3,11,21]
//     //
//     // sortNums(nums,’descending’) // [21,11,3]
//
//     let sortNums = ([...array], direction) => {
//         if (direction === 'ascending') {
//             return array.sort((a, b) => a - b);
//         }
//         if (direction === 'descending') {
//             return array.sort((a, b) => b - a);
//         }
//         return '?';
//     }
//     console.log(sortNums(nums, 'descending'));
//     console.log(sortNums(nums, 'ascending'));
//     console.log(nums);
//
// //
// // ==========================
// //
// //     #yo06d74c1C
// //
// // – є масив
// //
//     const coursesAndDurationArray = [
//
//         {title: 'JavaScript Complex', monthDuration: 5},
//
//         {title: 'Java Complex', monthDuration: 6},
//
//         {title: 'Python Complex', monthDuration: 6},
//
//         {title: 'QA Complex', monthDuration: 4},
//
//         {title: 'FullStack', monthDuration: 7},
//
//         {title: 'Frontend', monthDuration: 4}
//
//     ];
// //
// //  — відсортувати його за спаданням за monthDuration
// //
//     const durationSort = [...coursesAndDurationArray].sort((a, b) => a.monthDuration - b.monthDuration);
//     console.log(durationSort);
//     console.log(coursesAndDurationArray);
//
// //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// //
//     const filteredDuration = coursesAndDurationArray.filter(value => value.monthDuration > 5)
//     console.log(filteredDuration);
//
// //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// //
//     let mapedCourses = coursesAndDurationArray.map((value, index) => {
//         // ...value,
//         value.id=index + 1;
//         return value;
//     }
// );
// console.log(mapedCourses);
// //
// //
// // #4LJn7zBx
// //
// //     взяти з arrays.js масив coursesArray
// //
// // –написати пошук всіх об’єктів, в яких в modules є sass
// //
// // –написати пошук всіх об’єктів, в яких в modules є docker
//
//     let coursesArray = [
//         {
//             title: 'JavaScript Complex',
//             monthDuration: 5,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//         },
//         {
//             title: 'Java Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'java core',
//                 'java advanced']
//         },
//         {
//             title: 'Python Complex',
//             monthDuration: 6,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'python core',
//                 'python advanced']
//         },
//         {
//             title: 'QA Complex',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//         },
//         {
//             title: 'FullStack',
//             monthDuration: 7,
//             hourDuration: 909,
//             modules: ['html',
//                 'css',
//                 'js',
//                 'mysql',
//                 'mongodb',
//                 'react',
//                 'angular',
//                 'aws',
//                 'docker',
//                 'git',
//                 'node.js',
//                 'python',
//                 'java']
//         },
//         {
//             title: 'Frontend',
//             monthDuration: 4,
//             hourDuration: 909,
//             modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//         }
//     ];
//
//     const filteredSassModule = coursesArray.filter(value => value.modules.includes('sass'));
//     console.log(filteredSassModule);
//
//     const filteredDockerModule = coursesArray.filter(value => value.modules.includes('docker'));
//     console.log(filteredDockerModule);

//     #bolvdlhP
//
//     описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
    const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
    const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
    const color = ['red', 'black'];

    let deck = [];
    for (const suit of cardSuit) {
        for (const value of values) {
            let color = (suit === 'spade' || suit === 'clubs' ? 'black' : 'red');
            deck.push({
                cardSuit: suit,
                value: value,
                color: color
            });
        }
    }
    ;
    console.log(deck);

//     Після опису, використовуючи функції масивів:
//
//     - знайти піковий туз
    let spadeAce = deck.find(card => {
        return card.cardSuit === 'spade' && card.value === 'ace'
    });
    let spadeAceDest = deck.find(({cardSuit, value}) => {
        return cardSuit === 'spade' && value === 'ace'
    }); //

    console.log(spadeAce);
    console.log(spadeAceDest);

// - всі шістки
//
    const filteredSixCard = deck.filter(card => card.value === '6');
    console.log(filteredSixCard);

// - всі червоні карти
//
    const filteredRedCards = deck.filter(card => card.color === 'red');
    console.log(filteredRedCards);
// - всі буби
//
    const filteredDiamondCards = deck.filter(card => card.cardSuit === 'diamond');
    console.log(filteredDiamondCards);

// - всі трефи від 9 та більше
//
    const filteredClubsFromNine = deck.filter(card => card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9');
    console.log(filteredClubsFromNine);
    //-----------------alternative for 'includes'-------------------//
    const cardsToExclude = ['6', '7', '8', '9'];
    const filteredClubsFromNineForIncludes = deck.filter(card => card.cardSuit === 'clubs' && !cardsToExclude.includes(card.value));
    console.log(filteredClubsFromNineForIncludes);

//
//     Приклад моделі об'єкту карти:
//
//     {
//
//         cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//
//             value: '', // '6'-'10', 'ace','jack','queen','king'
//
//         color:'', // 'red','black'
//
//     }


    // #EP5I1UUzAX
    //
    // Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт
    //
    // Приклад моделі кінцевого об'єкту
    //

    // {
    //
    //     spades:[],
    //
    //         diamonds:[],
    //
    //     hearts:[],
    //
    //     clubs:[]
    //
    // }

    let packedDeck = deck.reduce((acc, card) => {
        if (card.cardSuit === 'spade') {
            acc.spades.push(card);
        } else if (card.cardSuit === 'diamond') {
            acc.diamonds.push(card);
        } else if (card.cardSuit === 'clubs') {
            acc.clubs.push(card);
        } else {
            acc.hearts.push(card);
        }
        return acc;
    }, {spades: [], diamonds: [], clubs: [], hearts: []});
    console.log(packedDeck);
//---------------------------------alternative---------------------------//
    const cardsToSuit = {                         // make the vocabulary for initialBaseket (future accumulator)
        'spade': 'spades',
        'diamond': 'diamonds',
        'heart': 'hearts',
        'clubs': 'clubs'
    };
    let initialBasket = {                        // this is future accumulator
        spades: [],
        diamonds: [],
        clubs: [],
        hearts: []
    };
    let packedDeckNew = deck.reduce((accumulator, card) => {
        let targetArray=cardsToSuit[card.cardSuit];             // call our vocabulary and get cardSuit
        accumulator[targetArray].push(card);                    // put our card to initialBasket
        return accumulator;
    },initialBasket)

    console.log(packedDeckNew);

}
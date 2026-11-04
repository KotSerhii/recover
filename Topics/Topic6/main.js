{

    // ----------------------------strings functions-------------------------

//     let str = 'vivat and congrat';
//
// //----------------add smth to end array--------------
//     let s = str.concat('!!!!!');
//     console.log(s);
//
// //----------------uppercase and lowercase---------
//     console.log(str.toUpperCase());
//     console.log(str.toLowerCase());
//
//     //-----------------find starts or end string (true or false)---------------
//     console.log(str.startsWith('con')); // false
//     console.log(str.startsWith('vi'));  // true
//     console.log(str.endsWith('grat'));  //true
//
//     //-----------------cut string
//     console.log(str.substring(0, 7));
//
//     //-----------------find index only the first sign
//     console.log(str.indexOf('v'));     // 0
//     console.log(str.lastIndexOf('a')); // 15
//     console.log(str.indexOf('v', 1));  // 1 (from position 1 index)
//
//     //----------------return sign from index
//     console.log(str.charAt(7));  // n
//
//     //----------------replace symbols
//     console.log(str.replace('a', 'W')); // only first
//     console.log(str.replaceAll('a', 'W')); // all
//
//     //----------------split string
//     console.log(str.split(' ')); // ["vivat","and","congrat"]
//
//
//     //------------------------------arrays functions---------------------
//
//     let arr = [];
//
//     //------------------ check arrays------------------//
//     console.log(Array.isArray(arr = [])); // true
//
//     //-------------------add to array----------------//
//     console.log(arr.push('new element')); // add to the end and return new arr length 1
//     arr.push('new element1');
//     arr.push('new element2');
//     arr.push('new element3');
//     arr.push('new element4');
//     arr.push('new element5');
//     console.log(arr);
//
//     //--------------------delete the last element --------------------//
//     arr.pop(); // delete 'new element5'
//     console.log(arr.pop()); // save deleted element 'new element4'
//     console.log(arr);
//
//     //---------------------add element on start---------------------------//
//     console.log(arr.unshift('first')); // return new length of array '5'
//     console.log(arr);
//
//     //------------------------delete first element---------------------------//
//     console.log(arr.shift()); // return deleted element 'first'
//
//     //------------------------join elements to one string------------------//
//     let stringJ = arr.join(':'); // ':' - join sign, defalt - ','
//     console.log(stringJ);
//
//     //-----------------------join arrays -------------------------------------//
//
//     let concat = arr.concat(str); // new array
//     console.log(concat);
//     console.log(arr);                   // arr don't change
//
//     //-----------------------revers array----------------------------------//
//     console.log(arr.reverse());
//
//     //-----------------------cut array and save new part---------------------------//
//     let slice = arr.slice(0, 3); // cut from 0 to 3 element
//     console.log(slice);               //  arr don't change
//
//     //----------------------cut array, save new part, change the origin array and could add new elements instead of cut----------------------------------------------------//
//
//     let splice = arr.splice(0, 1, 'first', 'second', 'third', 'fourth');
//     // from '0' to '1' element cut and save, and add instead of 'first','second','third','fourth' (any count)
//     console.log(splice);
//     console.log(arr);
//     //find and delete an element in array
//     console.log(arr.splice(arr.indexOf('fourth'), 1));
//     console.log(arr);

    //----------------check elements in array and string-------------//
    // console.log(arr.includes('second')); // true
    // console.log(str.includes('vat')); //true

    //======================ARRAYS FUNCTIONS WITH CALLBACK==================//

    let users = [
        {id: 1, name: "John", age: 25},
        {id: 2, name: "Jane", age: 29},
        {id: 3, name: "Jo", age: 21},
        {id: 4, name: "Ane", age: 15},
        {id: 5, name: "Koln", age: 45},
        {id: 6, name: "Pepe", age: 35},
        {id: 7, name: "Foln", age: 26},
        {id: 8, name: "Nebula", age: 27},
        {id: 9, name: "Phill", age: 28},
        {id: 10, name: "Karen", age: 29},
    ];

    //---------------------call each element of array-----------------------//

//     users.forEach(function(value)  {
//         console.log(value)
// });

    // users.forEach(user => console.log(user)) // short

    //---------------------filter elements-------------------------------------//

    // let usersFiltered = users.filter(value => value.age > 28);
    // console.log(usersFiltered);

    //---------------------build new array from ours---------------------------//


}
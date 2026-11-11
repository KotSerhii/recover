{
//     let now = new Date();
//     console.log(now);
//     console.log(now.getFullYear());
//     console.log(now.getMonth());
//     console.log(now.getDate());
//     console.log(now.getHours());
//     console.log(now.getMinutes());
//     console.log(now.getSeconds());
//     console.log(now.getMilliseconds());
//     console.log(now.getTime());          // 1794405247347 - milliseconds from 1970 year
//
//     //-------------------check the date------------------//
//     let date1 = new Date(1794405247347); // Wed Nov 11 2026 15:54:07 GMT+0200
//     console.log(date1);
//     let date2 = new Date('January 03 1984 05:30:00'); //Tue Jan 03 1984 05:30:00 GMT+0300
//     console.log(date2);
//     let date3 = new Date(1983, 6, 14, 11, 30, 53, 777); //Thu Jul 14 1983 11:30:53 GMT+0400
//     console.log(date3);
// //-------------------------set date----------------------//
//     console.log(date1);
//     date1.setDate(30); // Mon Nov 30 2026 15:54:07 GMT+0200
//     console.log(date1);
//
//     let user ={
//         id: 1,
//         name: "John",
//         bday:new Date(1794405247347),
//     }
//     console.log(user);


    //========================== Set Array (Unique) ===================================//

//     let set = new Set();                       // create object set
//     set.add('qwe');
//     set.add('rty');
//     set.add('yui');
//     set.add('qwe'); // ignore
//     set.add('ert');
//     set.add('yui'); // ignore
//     console.log(set); //  {'qwe', 'rty', 'yui', 'ert'}
//
// //---------------check item in Set------------------//
//     console.log(set.has('qwe')); // true
//
// //-----------------delete item----------------------//
//     console.log(set.delete('rty'));
//     console.log(set);           //  {'qwe', 'yui', 'ert'}
//
//  //--------------check size------------------------//
//  console.log(set.size);   // 3
//
//    //------------iteration----------------------------//
//
//    set.forEach(item => {
//        console.log(item);
//    })
// //----------------format to array----------------------//
// let arrayFromSet = Array.from(set);
//     console.log(arrayFromSet);

    // //-------------how to create array with unique items-------------------//
    //
    // let set = new Set([11,22,33,44,55,66,77,55,66,11,22])
    // console.log(set);
    // let numbers = Array.from(set);
    // console.log(numbers);


    //=========================Map (build association 'key: value')===========================================//
let map = new Map();
    console.log(map);                // Map(0) {size: 0}

    map.set(1, 'one');
    map.set(2, 'two');
    map.set(3, 'three');
    console.log(map);             //Map(3) {1 => 'one', 2 => 'two', 3 => 'three'}

    console.log(map.get(3));      //three

//-------------------we can build simple keys for complex value--------------//

    let map2 = new Map();
    map2.set('likar', {name: 'Nikita', age: 42, gender: 'Male'});
    map2.set('spinach', {name: 'Alex', age: 32, gender: 'Male'});
    map2.set('crazy', {name: 'Valya', age: 22, gender: 'Female'});
    console.log(map2.get('likar'));

    //----------we can use object instead of key (but in this situation we need to create a variable for it)--//
    let map3 = new Map();
    const likar = {id:'likar'};
    const spinach = {id:'spinach'};
    map3.set(likar, {name: 'Nikita', age: 42, gender: 'Male'});
    map3.set(spinach, {name: 'Alex', age: 32, gender: 'Male'});
    console.log(map3.get(likar));

    // delete
    map2.delete('likar');
    console.log(map2);

    // size
    console.log(map2.size);  // 2

    //delete all
    map2.clear();
    console.log(map2); //Map(0) {size: 0}

    // keys, values
    console.log(map3.keys());    //MapIterator {{…}, {…}}
    console.log(map3.values());  //MapIterator {{…}, {…}}

    console.log(Array.from(map3.keys())); //[{…}, {…}] 0:{id: 'likar'} 1:{id: 'spinach'} length:2
    console.log(Array.from(map3.values())); //  0:{name: 'Nikita', age: 42, gender: 'Male'}
                                            //  1:{name: 'Alex', age: 32, gender: 'Male'}    length:2

}
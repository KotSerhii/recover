{
//=====================shallow and deep copy======================//

    let user = {
        name: 'karina',
        skills: ['borshch', 'pie soup'],
    };
    let surfaceClone = {...user};             // shallow copy
    console.log(user === surfaceClone);              //false
    console.log(user.skills === surfaceClone.skills); // true
    console.log(surfaceClone);

    let assignCopy = Object.assign({}, user);
    console.log(assignCopy);
    console.log(user === assignCopy);                       //false
    console.log(user.skills === assignCopy.skills);         // true

    let deepCopy = structuredClone(user);     // deep copy (but without functions => Error copy)
    console.log(user === deepCopy);              //false
    console.log(user.skills === deepCopy.skills); // false

    let deepCopyJson = JSON.parse(JSON.stringify(user));          // deep copy (also without functions => functions will be vanished)
    console.log(deepCopyJson);

//========================operator 'in' check info in objects ============================= //

    const obj = {name: 'igor', age: ''};

    console.log('name' in obj);                // true
    console.log('status' in obj);           // false

    const newVar = Object.create(obj); // if create a prototype we also can check
    console.log(newVar);

    if ('name' in obj){                                        // отримуємо 'true' навіть, якщо поле буде мати фолсі-подібні                                                                   значення 0, "", Null,undefined,false
        console.log('True');
    }
if('age' in obj){
    console.log('age true');  // this check is true
}
if(obj.age){
    console.log('age true'); // this check is false
}
else {
    console.log('difference');
}



}
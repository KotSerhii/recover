{

//     let arr;
//     arr = [123, 123, 123, 123, 123, 1320];
//     console.log(arr);
//     console.log(arr[0]);
//     console.log(arr.length);
//     console.log(arr[2]);
//     console.log(arr[4]);
//
//     arr[0] = 'new value';
//     console.log(arr[0]);
//
//     arr[7] = 'okten';
//     console.log(arr);
//     arr[arr.length] = 'okten+1';
//     console.log(arr);
//
//     let arr2 = [
//         [1,2,3,4,5 ,6],
//         [7,8,9,10],
//         [11,2,3,4,5,6]
//     ];
// console.log(arr2);
// console.log(arr2[2][0]);

    // ------------------objects--------------------

    // let user1 = {
    //     id: 1,
    //     name: 'John',
    //     age: 5,
    //     skills: ['html', 'javascript', 'css'],
    //     wife: {
    //         name: 'John',
    //         age: 5,
    //     }
    // }
    // console.log(user1);
    // console.log(user1.id);
    // console.log(user1.name);
    // console.log(user1['age']);
    // console.log(user1['skills'][0]);
    // console.log(user1.skills[1]);
    // console.log(user1.wife.age);

    //----------------objects in arr ----------------

    // let users = [
    //     {skills: ['html', 'javascript', 'css'], id: 1, name: 'sasha', status: true},
    //     {skills: ['sql', 'javascript', 'css'], id: 2, name: 'kolya', status: false},
    //     {skills: ['html', 'java', 'css'], id: 3, name: 'vasya', status: true},
    //     {skills: ['html', 'javascript', 'phyton'], id: 4, name: 'petya', status: false},
    //     {skills: ['html', 'javascript', 'css'], id: 5, name: 'olya', status: true},
    //
    // ]
    // console.log(users);
    // console.log(users[0]['name']);
    // let user0 = users[0];
    // console.log(user0);
    // console.log(users[3].skills[2]);
    // console.log(users[3].skills[0]);
    //
    // let skills = users[4].skills;
    // console.log(skills[1]);


    //-----------------------add & delete new parameters ----------

//     let user = {id: 1, name: 'kiril'}
//
//     user.age = 31;
//     console.log(user);
//
//     user['status'] = false;
//     console.log(user);
//
//     delete user['id'];
//     console.log(user);
// }

//------------- if, switch ------------------------

    // let age = +prompt('enter your age');
    //
    // console.log(age, typeof age);
    //
    // if (age>=18){
    //     console.log('adult');
    // } else {
    //     console.log('cartoon');
    // }

    // let color = prompt('enter your color');
    // // if (color === 'green') {
    // //
    // //     if (confirm('Is road clear')) {
    // //
    // //         console.log('Go!')
    // //     } else {
    // //         console.log('Just wait!');
    // //     }
    // let confirm1 = confirm('Is road clear?');
    //
    // if (color === 'green' && confirm1) {
    //     console.log('Go!')
    // } else if (color === 'red') {
    //     console.log('stop');
    // } else if (color === 'yellow') {
    //     console.log('ready');
    // } else {
    //     console.log('error');
    // }


    // let color = prompt('enter your color');
    // switch (color) {
    //     case 'green':
    //         console.log('go!');
    //         break;
    //     case 'red':
    //         console.log('stop!');
    //         break;
    //     case 'yellow':
    //         console.log('ready!');
    //         break;
    //     default:
    //         console.log('error!');
    //
    // }

    // --------------------------Ternary-------------

    let obj = {
        id: 1,
        name: 'vasya',
        age: 20,
    }
    let access;
    // if (obj.age > 18){
    //     access=true;
    // } else {
    //     access=false;
    // }
    access = obj.age > 18 ? 'Yes' : 'No';

    console.log(access);


    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    console.log(coursesAndDurationArray[0]['monthDuration']);

    if (coursesAndDurationArray[0].monthDuration > 5) {
        console.log(coursesAndDurationArray[0].title, 'Super')
    }
    if (coursesAndDurationArray[1].monthDuration > 5) {
        console.log(coursesAndDurationArray[1].title, 'Super')
    }
    if (coursesAndDurationArray[2].monthDuration > 5) {
        console.log(coursesAndDurationArray[2].title, 'Super')
    }
    if (coursesAndDurationArray[3].monthDuration > 5) {
        console.log(coursesAndDurationArray[3].title, 'Super')
    }
    if (coursesAndDurationArray[4].monthDuration > 5) {
        console.log(coursesAndDurationArray[4].title, 'Super')
    }
    if (coursesAndDurationArray[5].monthDuration > 5) {
        console.log(coursesAndDurationArray[5].title, 'Super')
    }



}
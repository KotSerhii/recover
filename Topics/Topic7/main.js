{

    // function User(name, age, status) {
    //     this.name = name;
    //     this.age = age;
    //     this.status = status;
    // }
    //
    // let user = new User('vasya', 41, true);
    // user.greeting = function (msg) {
    //     return 'Hi ' + this.name + ' '+msg +'!';
    // }
    // let user1 = new User('roma', 35, true);      // 'new' - create new memory cell

//---------------------if we don't have access to function constructor-----------------------//

// //----prototype-----//
//
//     // User.prototype.greeting = function () {
//     //     return `Hello my name is ${this.name}!`;
//     // };
//     // let user2 = new User('sasha', 31, true);
//     // console.log(user2);
//     // console.log(user2.greeting());
//     // ;
// //---apply------//
//     let user3 = new User('kiril', 15, true);
//     console.log(user.greeting.apply(user3,['bimba']));       // we make substitute on user3 also we can pass arguments
//                                                 // user.greeting.apply(user3,['argument1','argument2'])
//     console.log(user);
//     console.log(user3);
//
//     //---------call----------//
//     let user4 = new User('boris', 35, true);
//     console.log(user.greeting.call(user4,'kovbasa'));       // the same 'apply' but pass arguments without '[]'
//                                                 // user.greeting.apply(user3,'argument1','argument2')
//
// //---------bind--------------//
//
//     let user5 = new User('bob', 25, true);
//     const greetingCopy = user.greeting.bind(user5);  // we make copy f. with 'bind'
//     console.log(greetingCopy('bobba'));
//     console.log(user5);

    //========================= class =====================================//

    // class User {
    //     constructor(name, age) {       //create 'constructor' => name,age + 'Alt+Insert'
    //         this.name = name;
    //         this.age = age;
    //     }
    //
    //     greeting() {
    //         return `Hello my name is ${this.name}`;
    //     }
    //
    //     work() {
    //         return 'work in process!'
    //     }
    //
    // }
    //
    // let user = new User('benya', 44);
    // console.log(user);
    // console.log(user.greeting());
    // ;
    //
    // // ------------extends------------------------//
    //
    // class Customer extends User {                   // if we want to add some arguments or f.
    //
    //     constructor(name, age, password) {
    //         super(name, age);
    //         this.password = password;
    //     }
    // }
    //
    // const customer = new Customer('bublik', 32, 2323);
    // console.log(customer);;
    // console.log(customer.work());

    //------------build new f. based on another one---------------------//

    // function User(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    //
    // function Customer(name, age, password) {
    //     User.apply(this, arguments);                 // 'this'->Customer, arguments->(name,age) from User
    //     this.password = password;
    // }
    //
    // console.log(new Customer('pelmen', 21, 666555));

}
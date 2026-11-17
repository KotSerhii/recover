{
// //     #XjJuucOMR0
// //
// // – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// //     створити пустий масив, наповнити його 10 об’єктами new User(….)
//
//     function User(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone
//     }
//
//     let users = [
//         new User(12, 'kolya', 'rom', 'fokol@mal.com', '+38909898989898'),
//         new User(21, 'olya', 'gek', 'goto@mal.com', '+3890787877'),
//         new User(3, 'lya', 'top', 'rdal@mal.com', '+389078887878'),
//         new User(45, 'ya', 'iop', 'plovol@mal.com', '+38909898989898'),
//         new User(59, 'jora', 'sigma', 'benkol@mal.com', '+38909898989898'),
//         new User(66, 'kol', 'polo', 'krol@mal.com', '+38909898989898'),
//         new User(71, 'volya', 'jala', 'foto@mal.com', '+38909898989898'),
//         new User(18, 'rita', 'rolo', 'meta@mal.com', '+38909898989898'),
//         new User(9, 'busik', 'vom', 'trap@mal.com', '+38909898989898'),
//         new User(10, 'reka', 'dom', 'prud@mal.com', '+38909898989898'),
//     ];
//     console.log(users);
//
// //
// // #2ikXsE2WiKZ
// //
// // – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
// //
//     let filteredUsers = users.filter(user => user.id % 2 === 0);
//     console.log(filteredUsers);


//     #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
//     let sortedUsers = [...users].sort((a, b) => {
//         return a.id - b.id
//     })
//     console.log(sortedUsers);
//
// //     #nkMXISv
// //
// // – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// //
// //     створити пустий масив, наповнити його 10 об’єктами Client
// //
//     function Client(id, name, surname, email, phone, ...products) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = products;
//     }
//
//     function Product(title, price) {
//         this.title = title;
//         this.price = price;
//     }
//
//     let client1 = new Client(22, 'red', 'color', 'runum@gmak.com', '+389899889', new Product('kkjk', 56), new Product('kjkkj', 88));
//     let client2 = new Client(34, 'tolik', 'ferz', 'lkjlkj@mai.com', '+4787878873', new Product('hleb', 22), new Product('cheese', 3), new Product('carrot', 1.5));
//     let client3 = new Client(89, 'fir', 'gom', 'ghghgh@nf', '+48787878', new Product('tv', 500), new Product('shell', 25));
//     let client4 = new Client(21, 'nij', 'tolibn', 'lkjlj@ghgh', '+923432424', new Product('vobla', 78));
//     let client5 = new Client(33, 'stepan', 'razin', 'fafafa@kakak', '+3787878887', new Product('car', 98877), new Product('bus', 15555));
//     let client6 = new Client(89, 'fedya', 'pop', 'lkjlj@jkjk', '+65484848', 'gloves', new Product('pants', 45), new Product('socks', 3), new Product('jewelries', 1200));
//     let client7 = new Client(55, 'lin', 'sun', 'bubububub@nononn', '+25656565', new Product('box', 10), new Product('check', 2));
//     let client8 = new Client(98, 'pedro', 'gonsales', 'trupik@com', '+3444444444', new Product('candle', 11), new Product('wax', 23), new Product('rope', 3));
//     let client9 = new Client(187, 'vivien', 'gaskonec', 'chef@top', '+40000000000', new Product('eggs', 2.5), new Product('tomato', 2.75));
//     let client10 = new Client(8, 'boris', 'nibula', 'wwwwww@wwwww', '+9876554444', new Product('help', 300), new Product('nuddle', 11), new Product('pharmacy', 347));
//
//     let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
//     console.log(clients);
// //
// // #8abtVjRv
// //
// // – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
// //
//     let sortedClientsProducts = clients.sort((a, b) => a.order.length - b.order.length);
//     console.log(sortedClientsProducts);

//
// //     #vV9a6584I5
// //
// // – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// //
// //     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //
// //     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// //
// //     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// //
// //     — changeYear (newValue) – змінює рік випуску на значення newValue
// //
// //     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// //
//
//     function Car(model, producer, year, maxSpeed, engineDisplacement) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineDisplacement = engineDisplacement;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//
//
//         this.info = function () {
//             console.log(`
//             model - ${this.model}
//             producer - ${this.producer}
//             year - ${this.year}
//             max speed - ${this.maxSpeed}
//             engine displacement - ${this.engineDisplacement}`);
//             if (this.driver) {
//                 for (const key in this.driver) {
//                     console.log(`driver ${key} - ${this.driver[key]}`)
//                 }
//             } else {
//                 console.log('No driver!')
//             }
//         }
//
//
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed += newSpeed;
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         }
//
//         this.addDriver = function (driverInfo) {
//             this.driver = driverInfo;
//         }
//
//
//     }
//
//     let car = new Car('CX-5', 'Mazda', 2026, 178, 2.0);
//     car.drive();
//     car.info();
//     car.increaseMaxSpeed(210);
//     car.info();
//     car.changeYear(2010);
//     car.info();
//     car.addDriver({name: 'vasya', age: 22});
//     car.info();
//

//
//
//
//
// // #5kla3yMpgp
// //
// // – (Те саме, тільки через клас)
// //
// //     Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// //
// //     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //
// //     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// //
// //     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// //
// //     — changeYear (newValue) – змінює рік випуску на значення newValue
// //
// //     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// //
//     class CarClass {
//
//         constructor(model, producer, year, maxSpeed, engineDisplacement) {
//             this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxSpeed = maxSpeed;
//             this.engineDisplacement = engineDisplacement;
//         }
//
//         drive() {
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
//         }
//
//         info() {
//             for (let key in this) {
//                 if (typeof this[key] === 'object' && this[key]!==null){
//                     for (const keyDriver in this[key]){
//                         console.log(`driver ${keyDriver} - ${this[key][keyDriver]}`)
//                     }
//                 } else {
//                     console.log(`${key} - ${this[key]}`)
//                 }
//             }
//         }
//
//         increaseMaxSpeed(newSpeed) {
//             if (newSpeed > 0) {
//                 this.maxSpeed += newSpeed;
//                 console.log(`Оновленна швидкість ${this.maxSpeed} km/h`)
//                 this.info();
//             }
//         }
//
//         changeYear(newValue) {
//             if (newValue > 1970) {
//                 this.year = newValue;
//                 console.log(`The produce year have been changed`);
//                 this.info();
//             }
//         }
//         addDriver (driverInfo){
//             if (driverInfo) {
//                 this.driver = driverInfo;
//                 this.info();
//             }
//         }
//
//     }
//
//     let carClass = new CarClass('Z-4', 'BMW', 2025, 220, 3.5);
//     console.log(carClass);
//     carClass.drive();
//     carClass.info();
//     carClass.increaseMaxSpeed(15);
//     carClass.increaseMaxSpeed(50);
//     carClass.changeYear(2026);
//     carClass.addDriver({name:'Nikolo', age:85})


// //
// //     #zg6Fifnqig
// //
// // – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// //
// //     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// //
// //     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// //
// //     ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
    class Cinderella {

        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }

    let cinderellas = [
        new Cinderella('liza', 17, 34),
        new Cinderella('fatima', 18, 33),
        new Cinderella('karina', 42, 58),
        new Cinderella('marina', 19, 26),
        new Cinderella('olya', 102, 32),
        new Cinderella('adelaida', 26, 18),
        new Cinderella('frosya', 23, 45),
        new Cinderella('musya', 504, 28),
        new Cinderella('dazdraperma', 82, 45),
        new Cinderella('shusha', 26, 35),
        new Cinderella('gavrilla', 68, 51)
    ];
    console.log(cinderellas);
//
//     class Prince {
//         constructor(name, age, foundShoe) {
//             this.name = name;
//             this.age = age;
//             this.foundShoe = foundShoe;
//         }
//
//     }
//
//     let prince = new Prince('alan', 26, 32);
//     console.log(prince);
//     console.log(prince.foundShoe);
//
//     for (const cinderella of cinderellas) {
//         if (prince.foundShoe === cinderella.footSize) {
//             console.log(`The cinderella is ${cinderella.name}`)
//             prince.wife = cinderella;
//             console.log(prince);
//         }
//     }
//
//     const cinderella = cinderellas.find(cinderella=>prince['foundShoe']===cinderella['footSize']);
//     console.log(cinderella);


    // #gsKLAsNWM
    //
    // Через Array.prototype. створити власний foreach, filter
Array.prototype.foreachMine= function (callback){
const array=this;
    for (const item of array) {
         callback(item);
    }
}
cinderellas.foreachMine(cinderella=>console.log(cinderella));

Array.prototype.filterMine = function (callback){
    const array = this;
    let newArray = [];
    for (const arrayElement of array) {
        if(callback(arrayElement)){
            newArray.push(arrayElement);
        }
    }
    return newArray;
}

    console.log(cinderellas.filterMine(cinderella => cinderella.age < 35));

}
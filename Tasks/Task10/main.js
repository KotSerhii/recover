{
//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
// //
//     let text = document.getElementById('text');
//
//     //textElement.style.display = 'none' — візуально ховає блок і                                                                        звільняє місце на сторінці, але сам елемент залишається                                                                        в DOM-дереві (зручно, якщо його потрібно буде повернути).
//     //     textElement.hidden = true — вбудована властивість DOM, яка працює аналогічно до display: none, але записується коротше.
//     // textElement.remove() — повністю та безповоротно видаляє елемент зі сторінки.
//
// // let hideButton = document.getElementById('hide');
// // hideButton.addEventListener("click", ()=>{
// //     // text.style.display='none';
// //     text.hidden=true;
// //
// // })
//
//     //------classList.toggle()--------//
//     let hideButton = document.getElementById('hide');
//
//     hideButton.addEventListener("click", () => {
//         let isHidden = text.classList.toggle('is-hidden');
//         hideButton.innerText = isHidden ? 'Show' : 'Hide';
//
//     })
// //
// //     #j693ca8
// //
// // – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//
//    let divElementForInput = document.createElement('div');
//     let inputElement = document.createElement('input');
//     inputElement.name = 'age';
//     inputElement.type = 'number';
//     let confirmBtn = document.createElement('button');
//     confirmBtn.innerText = 'Confirm';
//     let errorParagraph = document.createElement('p');
//     divElementForInput.append(inputElement,confirmBtn,errorParagraph);
//     document.body.append(divElementForInput);
//     confirmBtn.addEventListener('click',()=>{
//     if(inputElement.value===''){
//         errorParagraph.innerText = 'Please enter your age!'
//     } else if(+inputElement.value<18){
//         errorParagraph.innerText='Your age is too young!';
//             } else {
//         errorParagraph.innerText='';
//     }
// })
//
//
//
//     #ymAmN2xJ
//
//     Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
//     let formCheckIn = document.getElementById("checkIn");
//     formCheckIn.addEventListener('submit', (event) => {
//         event.preventDefault();
//
//         name = formCheckIn.elements.name.value.trim();
//         surname = formCheckIn.elements.surname.value.trim();
//         age = +formCheckIn.elements.age.value.trim();
//         if(!name||!surname||!age) return;                               // check fil in fields
//         const user = {
//             name,
//             surname,
//             age
//         }
//         let formDiv = document.createElement('div');
//         formDiv.innerText = `name: ${user.name}, surname: ${user.surname}, age: ${user.age}`
//         document.body.appendChild(formDiv);
//         formCheckIn.reset();                                           // clear form after submit
//     })

//
//
//
//
// #2VaLt4vDczH
//
//     є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//


//
//
//     #LhSfdhM3
//
//     Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//
//
//
//
//
//
//     #Jg0gPO00
//
//     створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
//
//
//     #RbQGnH5DuC
//
//     В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
//     сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
//
//
//
//     #kUSgFqWY
//
//     Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.


}
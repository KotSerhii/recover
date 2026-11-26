{
    // //onclick
    // let target = document.getElementById('target');
    // target.onclick = function () {
    //     console.log("click");
    // }
// // add argument, that tell us about 'event'
//
//     target.onclick =function (event){
//         console.log(event);
//     }
// // mouse moving event
//
//     target.onmousemove=function (event){
//         console.log('move');
//         console.log(event.clientX, event.clientY);       // get mouse position
//         let r = event.clientX;
//         let g =event.clientY;
//         let b=event.clientY;
//         this.style.backgroundColor=`rgb(${r},${g},${b})`; // change color our element during mouse moving
//     }
//
//     // to add event for element that already has event we need to use '.addEventListener' to prevent rewriting previous event
//
//     target.addEventListener('click', function (event){
//         console.log('addEventListener');                                 // don't use arrow function
//     })

// // mouse over and leave events
//     target.onmouseover=function (event){
//         console.log('over');
//     }
//     target.onmouseleave=function (event){
//         console.log('leave');
//     }


//     // add and use data from forms (input)
//     let input = document.getElementById('i1');
//     input.oninput = function (event) {
//         target.innerText = this.value;
//         console.log(this.value);
//     }
//
// // to save info from input after submit use '.preventDefault'
//
//     let form = document.getElementById('f1');
//
//     form.onsubmit = function (event) {
//         event.preventDefault();
//         console.log('Hello!');
//         let user = {name: this.username.value};   // from form data make an object
//         console.log(user);
//     }
//
//     // track browser load
//
//     window.onload = function () {
//         console.log('load');                           // window load
//     }
//     document.onreadystatechange = function () {  // page load 'interactive'=>'complete'
//               console.log(document.readyState);
//     }

    // //==============================Local Storage=============================================//
    //
    // localStorage.setItem('key', 'value'); // save info in browser
    // let item = localStorage.getItem('key'); // get our info from browser memory
    // console.log(item);
    // localStorage.clear();                          // clean memory
    //
    // //---------Local storage with objects----------------//
    // // localStorage.setItem('user', {name: 'vobla', age: 25})  //  'user	[object Object]'  wrong way!!!!!
    // localStorage.setItem('user', JSON.stringify({name: 'vobla', age: 25})); // 'user	{"name":"vobla","age":25}'
    //
    // //--------change info in object from local storage-----------------//
    //
    // let coursesAndDurationArray = [
    //     {title: 'JavaScript Complex', monthDuration: 5},
    //     {title: 'Java Complex', monthDuration: 6},
    //     {title: 'Python Complex', monthDuration: 6},
    //     {title: 'QA Complex', monthDuration: 4},
    //     {title: 'FullStack', monthDuration: 7},
    //     {title: 'Frontend', monthDuration: 4}
    // ];
    // localStorage.setItem('courses',JSON.stringify(coursesAndDurationArray));
    // let courseJSON = localStorage.getItem('courses');
    // console.log(courseJSON);
    // let courses = JSON.parse(courseJSON);
    // console.log(courses);
    // courses.push({push:'ALALALALAL', add:'HAHAHAHAHAHAHA'});
    // localStorage.setItem('courses',JSON.stringify(courses));

//======================how the cart is working==================================//

    let products = [
        {
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];
    let productsDiv = document.getElementsByClassName('products')[0];
    console.log(productsDiv);
    for (const product of products) {
        let productBlock = document.createElement('div');

        let h2 = document.createElement('h2');
        h2.innerText = `${product.title} - ${product.price} UAH`

        let img = document.createElement('img');
        img.src = product.image;

        let addButton = document.createElement('button');
        addButton.innerText = 'add to cart';

        addButton.onclick=function (){
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        productBlock.append(h2, img, addButton);

        productsDiv.appendChild(productBlock);
    }

}
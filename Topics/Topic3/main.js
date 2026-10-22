{

    //----------------------------------for of -------------------------

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

    // debugger;
    for (let product of products) {
        console.log(product);
    }



    //----------------------------------for------------------------------
    // let users=[
    //     {name:'goro', age:21, status: false},
    //     {name:'ghost', age:23, status: true},
    //     {name:'heres', age:45, status: false},
    //     {name:'tutlu', age:11, status: false},
    //     {name:'kim', age:65, status: true},
    //     {name:'chin', age:67, status: false},
    //     {name:'in', age:45, status: true},
    //     {name:'kolo', age:56, status: false},
    //     {name:'respect', age:67, status: true},
    //     {name:'perex', age:43, status: false},
    //     {name:'krush', age:23, status: true},
    //
    // ]
    //
    // for (let i=1; i<users.length;i++){
    //     let user = users[i];
    //     document.write(`<h3>${user.name} - ${user.age} age -${user.status}</h3>`);
    // }

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        document.write(
            `<div class="base">
<h2> ${product.title} - ${product.price}</h2>
<img src="${product.image}" alt="${product.title}"></img>
</div>`
        )

    }

}
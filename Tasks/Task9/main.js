{
// #8Nmt60ZT
//
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.
// //
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
//     htmlDivElement.style.color = 'red';
//     htmlDivElement.style.backgroundColor = 'grey';
//     htmlDivElement.style.fontSize = '40px';
//     htmlDivElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
//     document.body.appendChild(htmlDivElement);
//     let cloneNode = htmlDivElement.cloneNode(true); // if '()' cloneNode copy only shallow, if we need all content                                                              with children '(true)'
//     document.body.appendChild(cloneNode);
// //
//
//
//
//     #OPLI89c9G
//
// – Є масив:
// //
//     const ran = ['Main', 'Products', 'About us', 'Contacts'];
// //
// //     Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// //
//     let ul = document.createElement('ul');
//     for (const ilElement of ran) {
//         let li = document.createElement('li');
//         li.innerText = ilElement;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);


//
//
//
//
//     #jeBqHV525U5
//
// – Є масив
//
//     let coursesAndDurationArray = [
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
// //     Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// //
// //     Завдання робити через цикли.
//     let div = document.createElement('div');
//     div.classList='list';
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     for (const liElement of coursesAndDurationArray) {
//         let li = document.createElement('li');
//         li.innerText = `${liElement['title']}, ${liElement.monthDuration} months duration`
//         ul.appendChild(li);
//     }
//     document.body.appendChild(div);

// =========================
//
//     #Kx1xgoKy8
//
// – Є масив
//
    let coursesAndDurationArray = [

        {title: 'JavaScript Complex', monthDuration: 5},

        {title: 'Java Complex', monthDuration: 6},

        {title: 'Python Complex', monthDuration: 6},

        {title: 'QA Complex', monthDuration: 4},

        {title: 'FullStack', monthDuration: 7},

        {title: 'Frontend', monthDuration: 4}

    ];
//
//
//
//     За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

    for (const course of coursesAndDurationArray) {
        let div = document.createElement('div');
        let heading = document.createElement('h1');
        let description = document.createElement('p');
        div.classList.add('item');
        heading.classList.add('heading');
        description.classList.add('description');
        heading.innerText = course.title;
        description.innerText = course.monthDuration;
        div.append(heading, description);
        document.body.appendChild(div);
    }


    // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
    // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css', 'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];



}
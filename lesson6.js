//DOM
//getElementById, querySelector
//innerHTML, textContent
//style
//Создание и удаление элементов
//createElement, appendchild, remove
//-------------------------------------------


//получение элемента из HTML
const containers = document.getElementById('containers');
// console.log(containers);

// const containerClass = document.querySelector('.container')
// console.log(containerClass)

// const containersQuId = document.querySelector('#containers')
// console.log(containersQuId)

// const title = document.querySelector('.title')
// console.log(title)

// const desc = document.querySelector('#desc')
// console.log(desc)

// const btn = document.getElementById('btn')
// console.log(btn)

// containers.innerHTML = 
//     `<h1 class="title">hello</h1>
//     <span class="price">345 000</span>
//     `;
// console.log(containers)

// containers.innerHTML = `
//     <p class="desc">podkankvamkwjcnm</p>
//     <button id="btn">add to cart</button>
// `
// console.log(containers)
//---------------------------------------------

//добавление контекста
// containers.textContent = 'alex';

// containers.textContent = 'name: Oleg'
//----------------------------------------------


// containers.innerHTML = `
//     <div class="cards">
//     <img src="img/02.png" alt="img" class="imgcards">
//     <h3 class="title">Sony playstation</h3>
//     <span class="prices">380 990</span>
//     <button id="btnad">добавить в корзину</button>
//     </div>
// `

// СТИЛИ
// const cards = document.querySelector('.cards');
// const btnad = document.getElementById('btnad');

// cards.style.width = '300px';
// cards.style.backgroundColor = 'red';
// cards.style.display = 'flex';
// cards.style.flexDirection = 'column';
// cards.style.rowGap = '10px';
// cards.style.padding = '10px';
// cards.style.borderRadius = '5px';

// btnad.style.background = 'rgba(23, 219, 12, 1)';
// btnad.style.color = '#fff'
// btnad.style.padding = '4px'
// btnad.style.border = 'none'
// btnad.style.borderRadius = '30px'
// btnad.style.cursor = 'pointer'
// -------------------------------------------

//СОЗДАНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ
// const h1 = document.createElement('h1');
// h1.className = 'name';
// h1.textContent = 'alex';

// containers.appendChild(h1);
// h1.remove();
// containers.remove();
// console.log(containers);
//---------------------------------------------


const btnlist = document.getElementById('btnlist');
const inputval = document.querySelector('.inputval');
const listed = document.querySelector('.listed');

btnlist.addEventListener('click', () => {
    renderList(inputval.value)
})

function renderList(value) {
    if(inputval.value === '') return
    const li = document.createElement('li')
    li.className = 'lilist';
    li.setAttribute('id', Math.round(Math.random() * 1000))
    li.addEventListener('click', () => {
        span.classList.toggle('active');
        li.classList.toggle('opacity')

    })

    const span = document.createElement('span');
    span.className = 'textspan';
    span.textContent = value;

    const btn = document.createElement('button');
    btn.className = 'btnclose';
    btn.textContent = 'X';
    btn.addEventListener('click', () => {
        li.style.animation = 'liDel 1s forwards'
        setTimeout(() => {
            li.remove();
        }, 500)
    })

    li.appendChild(span)
    li.appendChild(btn)
    listed.appendChild(li)

    inputval.value = '';
}





import style from './src/assets/style/index.styl'; // импорт стилей
// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// Вот массив (список) рандомных цветов
// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

let colorArr = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

const container = document.querySelector('.container');
const box = document.querySelectorAll('.box');

container.addEventListener('mouseover', event => {
    if(event.target.firstElementChild) {
        let randomColor = colorArr[Math.floor(Math.random()*colorArr.length)]
        event.target.firstElementChild.style.backgroundColor = randomColor;
    }
});

//  Возращаете фон обратно когда пользователь уводит мышку с блока.

container.addEventListener('mouseout', event => {
    event.target.firstElementChild.style.backgroundColor = 'white';
});








let table = document.querySelector('table');

let numberOfDatas = 20;
let show = 10;

for (let index = 0; index < numberOfDatas; index++) {

    let newTr = document.createElement('tr');
    let newTd1 = document.createElement('td');
    let newTd2 = document.createElement('td');

    newTd1.innerText = index;
    newTd2.innerText = parseInt(Math.random() * 100);

    newTr.append(newTd1, newTd2);
    table.append(newTr);

}

let timer = null;
table.onscroll = () => {
    // Array.from(table.rows).forEach((row) => {
    //     if (inViewport(row)) {
    //         console.log(row.cells[0].innerText);
    //     }
    // })

    document.querySelector('.top').classList.remove('hidden');
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        // do something
        document.querySelector('.top').classList.add('hidden');
    }, 500);
}

function inViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}


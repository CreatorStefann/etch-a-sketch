function createGrid(){
    const container = document.querySelector('#container');
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const div = document.createElement('div');
            div.classList.add('grid-item');
            container.appendChild(div);
        }
    }
}

function hover(){
    const divs = document.querySelectorAll('.grid-item')
    let isMouseDown = false;
    divs.forEach((div) => {
        div.addEventListener('mousedown', () => {
            isMouseDown = true;
            div.style.backgroundColor = 'black';
        });
        div.addEventListener('mouseenter', () => {
            if(isMouseDown)
                div.style.backgroundColor = 'black';
        })
        div.addEventListener('mouseup', () => {
            isMouseDown = false;
        })
    }) 
}

createGrid();
hover();
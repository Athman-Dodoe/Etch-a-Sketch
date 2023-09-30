const gridContainer = document.querySelector('.container');

function createGrid (rows, cols){
    let grid = rows * cols;

    for(let i = 0; i < grid; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseenter', function(){
            gridItem.style.backgroundColor = 'black';
        })
    }
}

createGrid(16, 16);
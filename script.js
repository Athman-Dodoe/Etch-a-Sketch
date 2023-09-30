const gridContainer = document.querySelector('.container');
const newGrid = document.querySelector('.new-grid');

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


newGrid.addEventListener('click', createNewGrid);

function createNewGrid (){
    gridContainer.innerHTML = '';
    let newGrid = parseInt(prompt('Enter the number of squares per side for the new grid (maximum 100):'));

    if(!isNaN(newGrid) && newGrid > 0 && newGrid <= 100){
        createGrid(newGrid, newGrid)
    }else {
        alert('Please enter a valid number greater than 0 and less than or equal to 100.');
    }

    gridContainer.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`;
}

createGrid(16, 16);
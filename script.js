


const body = document.querySelector('body');
const container = document.querySelector('div[id=container]');
container.classList.add('container');
let columns = 16;
let rows = columns;
const button = document.querySelector('button');

/*
function popUp(){

    let election = prompt('Enter the amount of squares per side for the new grid', 16);

    

   if (election != 16){

    columns = election;

    console.log(columns)

   }

}

button.addEventListener('click', popUp);

*/


if (columns == 16) {

    for (let i = 0; i < columns; i++){

    
        const col = document.createElement('div');
        col.classList.add('col');
        container.appendChild(col);
        col.style.width = `${columns}px`;
    
    
        for(let j = 0; j < rows; j++){
    
            const row = document.createElement('div');
            row.classList.add('row');
            col.appendChild(row);
            row.style.height = `${columns}px`;
    
    
            function colorTrail() {
                row.style.background = "black";
            }
            
            row.addEventListener('mouseover', colorTrail) 
    
        }
        
        
    }

}















const body = document.querySelector('body');
const container = document.querySelector('div[id=container]');
container.classList.add('container');
let columns = 0;
let rows = columns;
const button = document.querySelector('#pixels');
const button2 = document.querySelector('#reload');


function popUp(){

    let election = prompt('Enter the amount of squares per side for the new grid', 16);

    columns = election;
    rows = columns;

    if(election <= 100){

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
                
                row.addEventListener('mouseover', colorTrail); 
        
            }
        }

    } else {
        alert("You can't select more than 100 squares.")
        window.location.reload()
        return false;
    }
}

button.addEventListener('click', popUp,{
    once: true
});

function refresher(){
    window.location.reload()
    return false;
}

button2.addEventListener('click', refresher);
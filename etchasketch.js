getDimension (); 


function getDimension () {

    
    const button = document.querySelector("#input"); 

    button.addEventListener('click', () => {
        
        if (document.querySelector('#grid-container') !== null) {

            deletePixels (); 

        }
    
        let getNumber = null;

        do {

            getNumber = promptUser();

            if (parseInt(getNumber) > 100 || parseInt(getNumber) <= 1) {
                
                alert("The number has to be less than 100 and more than 1");

            }

            else if (getNumber === null) {
                
                return; 
                
            }

            else if (isNaN(parseInt(getNumber))) {

                alert("Please enter an actual number");

            }

        }
        while (parseInt(getNumber) > 100 || parseInt(getNumber) <= 1 || isNaN(parseInt(getNumber)));

        createPixels (parseInt(getNumber)); 

    });

}

function promptUser () {

    let number = prompt("Please enter a number less than 100: ");
    return number; 

}


function createPixels (userInput) {

    let dimension = userInput; 


    const body = document.querySelector('#body');

    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('id', 'grid-container');
    document.body.appendChild(gridContainer);


    for (let i = 0; i < dimension; i++) {
        
        const newColumn = document.createElement('div');
        gridContainer.appendChild(newColumn); 

        if (i === 0) {

            newColumn.setAttribute('class', 'column-border-first');

        }

        else if (i > 0 && i < dimension - 1) {

            newColumn.setAttribute('class', 'column-border-middle');

        }

        else {

            newColumn.setAttribute('class', 'column-border-end');

        }
        
        for (let j = 0; j < dimension; j++) {
            
            const newRow = document.createElement('div');
            newColumn.appendChild(newRow); 
            newRow.setAttribute('class', 'row');
            
            newRow.addEventListener('mouseover', () => {
                newRow.classList.add('pixelate');
                
        })
    }

    }
}

function deletePixels () {

    const deleteGrid = document.querySelector('#grid-container'); 

    deleteGrid.remove();
}
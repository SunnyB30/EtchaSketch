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
            
            let firstMouseOver = true;
            let temp; 

            newRow.addEventListener('mouseover', () => {
                newRow.classList.add('pixelate');

                 

                if (firstMouseOver) {
                    
                    let [firstRGB, secondRGB, thirdRGB] = randRGBString ();
                    temp = [firstRGB, secondRGB, thirdRGB];

                    newRow.style.backgroundColor = "rgb(" + firstRGB + "," + secondRGB + "," + thirdRGB + ")";
                    
                }

                else {

                   let [firstRGB, secondRGB, thirdRGB] = darkerRandRGBString (temp[0], temp[1], temp[2]);

                   newRow.style.backgroundColor = "rgb(" + firstRGB + "," + secondRGB + "," + thirdRGB + ")";

                   temp[0] = firstRGB;
                   temp[1] = secondRGB; 
                   temp[2] = thirdRGB; 

                }

                firstMouseOver = false; 
                
        })
    }

    }
}

function deletePixels () {

    const deleteGrid = document.querySelector('#grid-container'); 

    deleteGrid.remove();
}


function randRGBString () {
    
    rgba = Math.floor(Math.random() * 255);
    rgbb = Math.floor(Math.random() * 255);
    rgbc = Math.floor(Math.random() * 255);

    return [rgba, rgbb, rgbc]; 

}

function darkerRandRGBString (rgbaNext, rgbbNext, rgbcNext) {

    rgba = rgbaNext;
    rgbb = rgbbNext;
    rgbc = rgbcNext;

    rgbaDarker = Math.round(rgba - (rgba * 0.10)); 
   
    if (rgbaDarker < 0) {
        rgbaDarker = 0;
    } 
    rgbbDarker = Math.round(rgbb - (rgbb * 0.10));
   
    if (rgbbDarker < 0) {
        rgbbDarker = 0;
    } 

    rgbcDarker = Math.round(rgbc - (rgbc * 0.10));
    
    if (rgbcDarker < 0) {
        rgbcDarker = 0;
    } 

    return [rgbaDarker, rgbbDarker, rgbcDarker];
}


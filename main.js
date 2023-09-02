let newArtDiv
let tileColor
let rgbMultiplier = 1

const canvas = document.querySelector('.canvas')

//creates the canvas divs
for(let i = 0; i < 256; i++){
    //create div
    newArtDiv = document.createElement('div')
    //assign a class to div
    newArtDiv.classList.add('tile')
    //puts div inside canvas
    canvas.appendChild(newArtDiv)
}


//logic for checkbox toggle
let blackMode = document.getElementById('black')
let eraser = document.getElementById('white')
let colorMode = document.getElementById('color')

blackMode.addEventListener('click', function (e){
    rgbMultiplier = 0
});

eraser.addEventListener('click', function (e){
    rgbMultiplier = 99999
});

colorMode.addEventListener('click', function (e){
    rgbMultiplier = 1
});


//gets random numbers for rgb values
function r(){
    return Math.floor(Math.random() * 256 * rgbMultiplier);
}

const tile = document.querySelectorAll('.tile')

//paints the divs
tile.forEach( (tiles) => {

    tiles.addEventListener('mouseenter', () => {
        
        if(rgbMultiplier === 1){
            tileColor = `rgb(${r()}, ${r()}, ${r()})`
        }
        else if(rgbMultiplier === 0){
            tileColor = 'black'
        }
        else if(rgbMultiplier === 99999){
            tileColor = 'white'
        }

        tiles.style.background = tileColor
    })
})


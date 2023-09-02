let newArtDiv
let tileDiv
let tileColor
let rgbMultiplier = 1


let tileSize = document.getElementById('sizeSlider').value
let tileText = document.getElementById('sizeValue')
const sizeText = document.getElementById('sizeValue')
const canvas = document.querySelector('.canvas')
const blackMode = document.getElementById('black')
const eraser = document.getElementById('white')
const colorMode = document.getElementById('color')
const tile = document.querySelectorAll('.tile')

//button mode
blackMode.addEventListener('click', () => rgbMultiplier = 0)
eraser.addEventListener('click', () => rgbMultiplier = 99999)
colorMode.addEventListener('click', () => rgbMultiplier = 1)


//gets random numbers for rgb values
function r(){
    return Math.floor(Math.random() * 256 * rgbMultiplier);
}


//colors the divs

function colorTile(){

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
}



//Tile size control

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function setCurrentSize(newSize) {
    tileSize = newSize
}

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadTiles()
}

function updateSizeValue(value) {
    tileText.innerText = `${value} x ${value}`
}

function reloadTiles() {
    clearTiles()
    setupTiles(tileSize)
}

function clearTiles() {
    const removeDiv = document.querySelector('.tileDiv')
    removeDiv.remove()
}

function setupTiles(tileSize){

    tileDiv = document.createElement('div')
    tileDiv.classList.add('tileDiv')
    canvas.appendChild(tileDiv)

    //creates the tiles
    for(let i = 0; i < tileSize * tileSize; i++){
    newArtDiv = document.createElement('div')
    //assign a class to the tiles div
    newArtDiv.classList.add('tile')
    //puts div inside parent container
    tileDiv.appendChild(newArtDiv)
    newArtDiv.style.width = `${100 / tileSize}%`
    newArtDiv.style.height = `${100 / tileSize}%`
    }

    

}

window.onload = () => {
    setupTiles(tileSize)
}
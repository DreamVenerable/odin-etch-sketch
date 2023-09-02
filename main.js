let newArtDiv
let tileDiv
let tileColor
let rgbMultiplier = 1
let currentTileSize = 16


const canvas = document.querySelector('.canvas')
const blackMode = document.getElementById('black')
const eraser = document.getElementById('white')
const colorMode = document.getElementById('color')
const clear = document.getElementById('clear')
const tileSize = document.getElementById('tileSize')
const tile = document.querySelectorAll('.tile')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Gets random numbers for rgb values
function r(){
    return Math.floor(Math.random() * 256 * rgbMultiplier);
}

//Button mode
tileSize.addEventListener('click', (e) => {
    changeSize(e.target.value)
})
blackMode.addEventListener('click', () => rgbMultiplier = 0)
eraser.addEventListener('click', () => rgbMultiplier = 99999)
colorMode.addEventListener('click', () => rgbMultiplier = 1)
clear.onclick = () => reloadTiles()



//Tile size control


function setTileButton(size){
    if(size === "16"){
        tileSize.setAttribute('value', 32)
        tileSize.innerText = '32 x 32'
    }
    else if(size === "32"){
        tileSize.setAttribute('value', 64)
        tileSize.innerText = '64 x 64'
    }
    else if(size === "64"){
        tileSize.setAttribute('value', 8)
        tileSize.innerText = '8 x 8'
    }
    else if(size === "8"){
        tileSize.setAttribute('value', 16)
        tileSize.innerText = '16 x 16'
    }
}

function changeSize(value) {
    setCurrentSize(value)
    setTileButton(value)
    reloadTiles()
}

function setCurrentSize(newSize) {
    currentTileSize = newSize
}
function reloadTiles() {
    clearTiles()
    setupTiles(currentTileSize)
}

function clearTiles() {
    const removeDiv = document.querySelector('.tileDiv')
    removeDiv.remove()
}

function setupTiles(currentTileSize){

    tileDiv = document.createElement('div')
    tileDiv.classList.add('tileDiv')
    canvas.appendChild(tileDiv)

    //Creates the tiles
    for(let i = 0; i < currentTileSize * currentTileSize; i++){
    newArtDiv = document.createElement('div')

    //Assign a class to the tiles div
    newArtDiv.classList.add('tile')

    //Puts div inside parent container
    tileDiv.appendChild(newArtDiv)

    //Sets size for each tile
    newArtDiv.style.width = `${100 / currentTileSize}%`
    newArtDiv.style.height = `${100 / currentTileSize}%`

    //Adds an event listener to allow color change
    newArtDiv.addEventListener('mouseover', changeTileColor)
    newArtDiv.addEventListener('mousedown', changeTileColor)
    }

}

function changeTileColor(e){

    if (e.type === 'mouseover' && !mouseDown) return

    tileColor = `rgb(${r()}, ${r()}, ${r()})`

    if(rgbMultiplier === 1){
        tileColor = `rgb(${r()}, ${r()}, ${r()})`
    }
    else if(rgbMultiplier === 0){
        tileColor = 'black'
    }
    else if(rgbMultiplier === 99999){
        tileColor = 'white'
    }

    e.target.style.background = tileColor
}


window.onload = () => {
    setupTiles(currentTileSize)
}
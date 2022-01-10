//1) Add rows to the grid
const addRowBtn = document.getElementById("addRowBtn")
const gridContainer = document.getElementById("gridContainer")
let rowLength = 3
let rows = document.querySelectorAll(".row")
let selectedColor = "red"
let isDragged

let boxes = document.getElementsByClassName("box")
console.log(boxes)
for (let i = 0; i < boxes.length; i++){
    boxes.item(i).addEventListener("click", function() {clickBox(boxes.item(i))})

    /* Tried to implement "drag the color over the boxes to change them" but couldn't get it to work

    boxes.item(i).addEventListener("onmousedown", function() {setTrue()})
    boxes.item(i).addEventListener("onmouseover", function() {clickBox(boxes.item(i),isDragged)})
    boxes.item(i).addEventListener("onmouseup", function() {setFalse()})*/
}

addRowBtn.onclick = function addRow () {
    let newRowElement = document.createElement("div") //<div new row>
    for (let i = 0; i < rowLength; i++){
    let newRow = document.createElement("div")
    newRow.setAttribute("class", "col-sm border border-dark box white")
    newRow.addEventListener("click", function() {clickBox(newRow)})
    newRowElement.append(newRow)
}
gridContainer.append(newRowElement)
newRowElement.setAttribute("class","row")
};

//2) Add Columns to the grid
const addCol = document.getElementById("addColBtn")
addCol.onclick = function addCol(){ 
    rows = document.querySelectorAll(".row")
    for (i = 0; i < rows.length; i++){
        let newCol = document.createElement("div")
        newCol.setAttribute("class", "col-sm border border-dark box white")
        newCol.addEventListener("click", function() {clickBox(newCol)})
        rows[i].append(newCol)
    }
    rowLength = rows[0].children.length
};

//3) Remove row from the grid
const remRowBtn = document.getElementById("remRowBtn")
remRowBtn.onclick = function removeRow (){
    gridContainer.removeChild(gridContainer.lastChild)
}

//4) Remove col from the grid
const remColBtn = document.getElementById("delColBtn")
remColBtn.onclick = function remCol(){
    rows = document.querySelectorAll(".row")
    for (i = 0; i < gridContainer.children.length; i++){
        rows[i].removeChild(rows[i].lastElementChild)
    }
    rowLength = rows[0].children.length
}


// select a color from a dropdown menu of colors
// click on a single cell, changing its color to the currently selected color

function clickBox (boxParm){
    className = boxParm.className.split(" ")
    boxParm.classList.replace(className[4], selectedColor)
}


//fill all uncolored cells with the currently selected color
const allWhiteSelector = document.getElementById("allWhiteSelector")
const allWhiteBtn = document.getElementById("allWhiteBtn")

function turnBoxesW () {
    let boxes = document.getElementsByClassName("box")
    for (let j = 0; j < boxes.length; j++){
        /*if(boxes[j] || boxes[j].style.backgroundColor == ""){
            boxes[j].style.backgroundColor = selectedColor
            console.log(selectedColor)
        }*/
        let className = boxes.item(j).className.split(" ")
        if (className[4] == "white"){
        boxes.item(j).classList.replace(className[4], selectedColor)}
    }
}

function selectColor(parm) {
    selectedColor = parm
}

//fill all boxes the same color
const fillAllBtn = document.getElementById("fillAllBtn")
const allColorSelector = document.getElementById("allColorSelector")
function fillAll () {
    let boxes = document.getElementsByClassName("box")
    for (let index = 0; index < boxes.length; index++){
        let className = boxes.item(index).className.split(" ")
        boxes.item(index).classList.replace(className[4], selectedColor)
    }
}
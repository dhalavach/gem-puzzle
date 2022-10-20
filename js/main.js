const movesCounterContainer = document.createElement('div');
var movesCounter = 0;
movesCounterContainer.innerHTML = `<div class="moves-counter-container">Moves: ${movesCounter} </div>`
document.body.appendChild(movesCounterContainer);

const mainDiv = document.createElement('div');
mainDiv.innerHTML = `<div id="puzzle-container"></div>`
document.body.appendChild(mainDiv);

const puzzleContainer = document.querySelector("#puzzle-container");
const puzzleWidth = document.querySelector("#puzzle-container").clientWidth;
const puzzleHeight = document.querySelector("#puzzle-container").clientHeight;
const puzzle = [];
let size = 4;

generatePuzzle();
randomize();
renderPuzzle();
handleInput();

function generatePuzzle() {


  for (let i = 1; i <= size * size; i++) {

    puzzle.push({
      value: i,
      position: i,
      x: (getColumn(i) - 1) * ((puzzleWidth)/size) , //2px border width
      y: (getRow(i) - 1) * ((puzzleHeight)/size) ,
      disabled: false,

    })

  }
}

function renderPuzzle() {
  puzzleContainer.innerHTML = "";
  for (let item of puzzle) {
  if (item.disabled ){
    puzzleContainer.innerHTML += `
    <div class = "item" id="disabled" style="left: ${item.x}px; top: ${item.y}px; background-color: white">

    </div>
    `
  } else {

    puzzleContainer.innerHTML += `
    <div class = "item" style="left: ${item.x}px; top: ${item.y}px">
    ${item.value}
    </div>
    `
  }
    movesCounterContainer.innerHTML = `<div class="moves-counter-container">Moves: ${movesCounter} </div>`

  }
  let puzzleItems = document.querySelectorAll(".item");
  puzzleItems.forEach((item) => {
    item.style.width = `${puzzleWidth/size}px`;
    item.style.height = `${puzzleHeight/size}px`;


  })


}

function getRow(position) {
  return Math.ceil(position / size);

}

function getColumn(position) {
  const column = position % size;
  if (column === 0) {
    return size
  }
  return column
}

function randomize() {
  let randomValues = getRandom();
  let i = 0;

  for (let item of puzzle) {
    item.value = randomValues[i];
    i++;


  }

  const emptyPuzzleItem = puzzle.find((item) => item.value === size * size)
  emptyPuzzleItem.disabled = true;

}

function getRandom() {
  const values = []
  for (let i = 1; i <= size * size; i++) {
    values.push(i);
  }
  const randomValues = values.sort(() => Math.random() - 0.5);

  return randomValues;
}

function handleInput() {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleClick)
}

function handleKeyDown(e) {
  console.log(e.key)
  switch (e.key) {
    case "ArrowLeft":
      moveLeft()
      break
    case "ArrowRight":
      moveRight()
      break
    case "ArrowUp":
      moveUp()
      break
    case "ArrowDown":
      moveDown()
      break
  }
  renderPuzzle()
}

function handleClick(e) {
let displayedValue = parseInt(e.target.innerHTML);

//console.log(displayedValue);
console.log((puzzle.find((e)=> e.value === displayedValue).position));
let clickedElementPosition = getRealPosition(displayedValue);
let emptyElementPosition = getEmptyPuzzle().position;
if(clickedElementPosition + 1 === emptyElementPosition) {
  moveRight();
} else if (clickedElementPosition - 1 === emptyElementPosition)  {
  moveLeft();
} else if (clickedElementPosition - size === emptyElementPosition) {
  moveUp();
} else if(clickedElementPosition + size === emptyElementPosition) {
  moveDown();
}

renderPuzzle()
}



function getRealPosition(displayedValue) {
 return (puzzle.find((e)=> e.value === displayedValue)).position
}

function moveLeft() {
  const emptyPuzzle = getEmptyPuzzle()
  const rightPuzzle = getRightPuzzle()
  if (rightPuzzle) {
    swapPositions(emptyPuzzle, rightPuzzle, true)
  }
}
function moveRight() {
  const emptyPuzzle = getEmptyPuzzle()
  const leftPuzzle = getLeftPuzzle()
  if (leftPuzzle) {
    swapPositions(emptyPuzzle, leftPuzzle, true)
  }
}
function moveUp() {
  const emptyPuzzle = getEmptyPuzzle()
  const belowPuzzle = getBelowPuzzle()
  if (belowPuzzle) {
    swapPositions(emptyPuzzle, belowPuzzle, false)
  }
}
function moveDown() {
  const emptyPuzzle = getEmptyPuzzle()
  const abovePuzzle = getAbovePuzzle()
  if (abovePuzzle) {
    swapPositions(emptyPuzzle, abovePuzzle, false)
  }
}

function swapPositions(firstPuzzle, secondPuzzle, isX = false) {
  // position swapping
  let temp = firstPuzzle.position
  firstPuzzle.position = secondPuzzle.position
  secondPuzzle.position = temp

  // x position swapping

  if (isX) {
    temp = firstPuzzle.x
    firstPuzzle.x = secondPuzzle.x
    secondPuzzle.x = temp
  } else {
    // must be y
    temp = firstPuzzle.y
    firstPuzzle.y = secondPuzzle.y
    secondPuzzle.y = temp
  }

  movesCounter++;

}

function getRightPuzzle() {
  const emptyPuzzle = getEmptyPuzzle()
  const isRightEdge = getColumn(emptyPuzzle.position) === size
  if (isRightEdge) {
    return null
  }
  const puzzle = getPuzzleByPos(emptyPuzzle.position + 1)
  return puzzle
}

function getLeftPuzzle() {
  const emptyPuzzle = getEmptyPuzzle()
  const isLeftEdge = getColumn(emptyPuzzle.position) === 1
  if (isLeftEdge) {
    return null
  }
  const puzzle = getPuzzleByPos(emptyPuzzle.position - 1)
  return puzzle
}

function getAbovePuzzle() {
  const emptyPuzzle = getEmptyPuzzle()
  const isTopEdge = getRow(emptyPuzzle.position) === 1
  if (isTopEdge) {
    return null
  }
  const puzzle = getPuzzleByPos(emptyPuzzle.position - size)
  return puzzle
}

function getBelowPuzzle() {
  const emptyPuzzle = getEmptyPuzzle()
  const isBottomEdge = getRow(emptyPuzzle.position) === size
  if (isBottomEdge) {
    return null
  }
  const puzzle = getPuzzleByPos(emptyPuzzle.position + size)
  return puzzle
}

function getEmptyPuzzle() {
  return puzzle.find((item) => item.disabled)
}

function getPuzzleByPos(pos) {
  return puzzle.find((item) => item.position === pos)
}


//drag and drop
//
// function makeDraggable(e) {
//   e.setAttribute('draggable', 'true');
//
//   e.onmouseover = function (event) {
//     e.className = 'hold';
//   };
//
//   e.onmousedown = function (event) {
//     let shiftX = event.clientX - e.getBoundingClientRect().left;
//     let shiftY = event.clientY - e.getBoundingClientRect().top;
//     e.style.position = 'absolute';
//     e.style.zIndex = 500;
//     document.body.append(pic);
//     e.className = 'grab';
//
//     moveAt(event.pageX, event.pageY);
//
//     function moveAt(pageX, pageY) {
//       e.style.left = pageX - shiftX + 'px';
//       e.style.top = pageY - shiftY + 'px';
//     }
//
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
//
//     document.addEventListener('mousemove', onMouseMove);
//
//     document.onmouseup = function () {
//       e.className = 'hold';
//       document.removeEventListener('mousemove', onMouseMove);
//       document.onmouseup = null;
//     };
//
//     e.onmouseleave = function (event) {
//       e.className = '';
//     };
//   };
//
//   e.ondragstart = function () {
//     return false;
//   };
// }

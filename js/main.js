'use strict'
const BOMB = '💣'

var gameOver = false
var isBomb = false

var gLevel = {
    size:4,
    mines: 2,
    minesLocation: []
}


var board
var gStartTime
var gBoard = {
    minesAroundCount: 0,
    isShown: false,
    isMine: false,
    isMarked: true
}
var gGame = {
    isOn: false,
    showCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame(level = 4) {
    gLevel.size = level
    board = buildBoard()
    renderBoard(board)
    console.table(board)
    // spawnBomb()
}
function changeLevel(level) {
    if (level === 'easy') gLevel.size = 4
    if (level === 'medium') gLevel.size = 8
    if (level === 'hard') gLevel.size = 16
    
    
    initGame(gLevel.size)

}
function onStart() {
    initGame()
}
function getEmptyCell(board) {
    const emptyCells = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            const currCell = board[i][j]
            if (currCell === null)
                emptyCells.push({ i: i, j: j })
        }
    }
    //* CHOOSE A RANDOM INDEX FROM THAT ARRAY AND RETURN THE CELL ON THAT INDEX
    const randomIdx = getRandomInt(0, emptyCells.length)
    return emptyCells[randomIdx]
}
// spawnBomb()
// function spawnBomb() {
//     const emptyCel = getEmptyCell(board)
//     board[emptyCel.i][emptyCel.j] = BOMB
//     renderCell(emptyCel, BOMB)
// }


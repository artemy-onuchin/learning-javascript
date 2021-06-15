let board = document.querySelector('#board')
const colors = [
    '#ff4800',
    '#ff5400',
    '#ff6000',
    '#ff6d00',
    '#ff7900',
    '#ff8500',
    '#ff9100',
    '#ff9e00',
    '#ffaa00',
    '#ffb600'
]
const SQUARES_NUMBER = 702

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = randomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#353839'
    element.style.boxShadow = `0 0 0 #000`
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}



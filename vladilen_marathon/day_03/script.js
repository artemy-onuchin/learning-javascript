const buttonUp = document.querySelector('.up-button')
const buttonDown = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

let countSlide = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(countSlide - 1) * 100}vh`

let activeSlideIndex = 0

buttonUp.addEventListener('click', () => {
    changeSlide('up')
})

buttonDown.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === countSlide) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = countSlide - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

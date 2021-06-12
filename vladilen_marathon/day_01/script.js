function slidePlugin(num = 1) {
    const slide = document.querySelectorAll('.slider__item')

    slide[num].classList.add('slider__item--active')

    for (const slideItem of slide) {
        slideItem.addEventListener('click', () => {
            clearActiveClass()
            slideItem.classList.add('slider__item--active')

            const tourName = document.querySelector('div.slider__item--active h3')
            const tourNameTitle = tourName.textContent

            document.querySelector('.tour-name').innerHTML = tourNameTitle

        })
    }

    function clearActiveClass() {
        slide.forEach((item) => {
            item.classList.remove('slider__item--active')
        })
    }
}

slidePlugin()

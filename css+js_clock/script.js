const hoursHand = document.querySelector('.hand__hour')
const minuteHand = document.querySelector('.hand__minute')
const secondHand = document.querySelector('.hand__second')


function setDate() {
    const now = new Date();

    const hours = now.getHours()
    const hoursDegrees = (((hours / 60) * 360) + 90);
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = (((minutes / 60) * 360) + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const seconds = now.getSeconds()
    const secondsDegrees = (((seconds / 60) * 360) + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    console.log('---')
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    console.log('---')
}

setInterval(setDate, 1000)

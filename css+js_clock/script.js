const hoursHand = document.querySelector('.hand__container--hour')
const minuteHand = document.querySelector('.hand__container--minutes')
const secondHand = document.querySelector('.hand__container--seconds')

function setDate() {
    const date = new Date();

    const hours = date.getHours();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();

    const hoursDegrees = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds - 0.75;
    const secondsDegrees = 360 / 60 * seconds - 0.75;
    const minutesDegrees = 360 / 60 * minutes - 0.75;

    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const currentyear = new Date().getFullYear()

function Countdown() {
    const Christmas = new Date(`December 25 ${currentyear} 00:00:00`)
    const currenttime = new Date()
    const diff = Christmas - currenttime
    const day = Math.floor(diff / 1000 / 60 / 60 /24)
    const hour = Math.floor(diff / 1000 / 60) % 24
    const minute = Math.floor(diff / 1000 /60) % 60
    const second = Math.floor(diff / 1000) % 60

    days.innerHTML = day < 10 ? "0" + day : day
    hours.innerHTML = hour < 10 ? "0" + hour : hour
    minutes.innerHTML = minute < 10 ? "0" + minute : minute
    seconds.innerHTML = second < 10 ? "0" + second : second
}

setInterval(Countdown, 1000)
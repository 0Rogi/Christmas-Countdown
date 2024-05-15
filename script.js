//? Getting HTML elements
const days = document.getElementById(`days`);
const hours = document.getElementById(`hours`);
const minutes = document.getElementById(`minutes`);
const seconds = document.getElementById(`seconds`);

setInterval(() => {

    //? Calculating the time
    const currentyear = new Date().getFullYear();
    const Christmas = new Date(`December 25 ${currentyear} 00:00:00`);
    const currenttime = new Date();
    const diff = Christmas - currenttime;
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minute = Math.floor(diff / 1000 / 60) % 60;
    const second = Math.floor(diff / 1000) % 60;

    //? Check if is already Christmas
    if (day < 0) {
        document.getElementById(`text`).textContent = `CHRISTMAS IS ARRIVED!`;
        const toHide = document.getElementsByClassName(`toHide`);
        for (let i = 0; i < toHide.length; i++) {
            toHide[i].style.visibility = `hidden`;
        }
        return;
    };

    //? Updating the Timer
    days.innerHTML = day < 10 ? `0` + day : day;
    hours.innerHTML = hour < 10 ? `0` + hour : hour;
    minutes.innerHTML = minute < 10 ? `0` + minute : minute;
    seconds.innerHTML = second < 10 ? `0` + second : second;
}, 1000);
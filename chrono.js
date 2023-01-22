const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let time = 0;
let intervalId;
;
function formatTime() {
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    let hours = Math.floor(time / 3600);
    let formattedTime = '';

    if (hours < 10) {
        formattedTime += `0${hours}:`;
    } else {
        formattedTime += `${hours}:`;
    };

    if (minutes < 10) {
        formattedTime += `0${minutes}:`;
    } else {
        formattedTime += `${minutes}:`;
    };

    if (seconds < 10) {
        formattedTime += `0${seconds}`;
    } else {
        formattedTime += `${seconds}`;
    };

    return formattedTime;

};

timeEl.innerHTML = formatTime();

function increment() {
    time++;
    timeEl.innerHTML = formatTime();
};


startBtn.addEventListener('click', function () {
    intervalId = setInterval(increment, 1000);
    startBtn.disabled = true;
}, false);

pauseBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    startBtn.disabled = false;
}, false);

resetBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    time = 0;
    timeEl.innerHTML = formatTime();
    startBtn.disabled = false;
}, false);
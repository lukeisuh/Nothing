let isThrottled = false;
let startTime = null;
let timerInterval = null;

function fail(event) {
    if (!isThrottled) {
        isThrottled = true;
        clearInterval(timerInterval);
        document.body.innerHTML = '<div class="flex items-center justify-center h-screen text-white text-4xl"><h1>You did something.</h1></div>';
        document.body.className = 'bg-red-500';
        setTimeout(() => {
            location.reload();
        }, 2500);
    }
}

document.getElementById('start').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = `${elapsedSeconds} seconds`;
    }, 10);
    setTimeout(() => {
        document.addEventListener('mousemove', fail);
        document.addEventListener('keydown', fail);
    }, 1000);
});
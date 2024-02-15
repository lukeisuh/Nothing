let isThrottled = false;

function fail(event) {
    if (!isThrottled) {
        isThrottled = true;
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
    setTimeout(() => {
        document.addEventListener('mousemove', fail);
        document.addEventListener('keydown', fail);
    }, 1000);
});
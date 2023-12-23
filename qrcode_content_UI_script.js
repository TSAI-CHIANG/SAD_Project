const canvas = document.getElementById('signature-canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX, lastY;

function getEventPosition(event) {
    let x, y;
    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX - canvas.offsetLeft;
        y = event.touches[0].clientY - canvas.offsetTop;
    } else {
        x = event.offsetX;
        y = event.offsetY;
    }
    return { x, y };
}

function startDrawing(event) {
    isDrawing = true;
    const { x, y } = getEventPosition(event);
    lastX = x;
    lastY = y;
}

function draw(event) {
    if (!isDrawing) return;

    const { x, y } = getEventPosition(event);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

function stopDrawing() {
    isDrawing = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

canvas.addEventListener('touchstart', startDrawing);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
    draw(e);
});
canvas.addEventListener('touchend', stopDrawing);

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
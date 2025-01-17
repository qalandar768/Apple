function updateClock() {
    const hourElem = document.getElementById("hour");
    const minuteElem = document.getElementById("minute");
    const secondElem = document.getElementById("second");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;

    hourElem.style.transform = `translateY(-50%) rotate(${90 + hourDeg}deg)`;
    minuteElem.style.transform = `translateY(-50%) rotate(${90 + minuteDeg}deg)`;
    secondElem.style.transform = `translateY(-50%) rotate(${90 + secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 

const bottomIndicator = document.querySelector('.bottom');
const imagePopup = document.querySelector('.image-popup');

let isDragging = false;
let startY = 0;

bottomIndicator.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const distance = startY - e.clientY;
    if (distance > 50) { // Minimal surish masofasi
      imagePopup.style.bottom = '50%';
      imagePopup.style.opacity = '1';
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

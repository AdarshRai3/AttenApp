let clockInBtn;
let currentTimeValue;
const totalHoursText = document.querySelector('.total-hours');
let isClocked = false;
let startTime;
let elapsedTime = 0;

function formatTime(time) {
  const hours = Math.floor(time / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTimerDisplay() {
  const currentTime = isClocked ? Date.now() - startTime + elapsedTime : elapsedTime;
  currentTimeValue = currentTime;
  totalHoursText.textContent = `Total working hours Today: ${formatTime(currentTime)}`;
}

function toggleClock() {
  if (!isClocked) {
    startTime = Date.now();
    isClocked = true;
    clockInBtn.style.backgroundColor = '#c01d07';
    clockInBtn.textContent = 'CLOCK-OUT';
  } else {
    elapsedTime += Date.now() - startTime;
    isClocked = false;
    clockInBtn.style.backgroundColor = '#0735c0';
    clockInBtn.textContent = 'CLOCK-IN';
  }
}


// Wait for the DOM to be loaded before accessing the clockInBtn element
window.addEventListener('DOMContentLoaded', function() {
  // Get the clockInBtn element from the DOM
  clockInBtn = document.querySelector('.clock-in');
  // Add event listener to clockInBtn
  clockInBtn.addEventListener('click', toggleClock);
  // Start the timer display update
  setInterval(updateTimerDisplay, 1000);
  
});
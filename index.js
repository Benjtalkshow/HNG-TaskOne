const currentDate = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
const btn = document.querySelector('[data-testid="githubURL"]');

const createCurrentDate = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const daysOfTheWeek = createCurrentDate[date.getDay()];
currentDate.innerHTML = `Day: ${daysOfTheWeek}`;

function displayTime() {
  setTimeout(updateTimeAndDate, 1000);
}

function updateTimeAndDate() {
  const date = new Date();
  const hour = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const timeDisplay = `${hour}:${minutes}:${seconds}`;
  currentTime.innerHTML = `Time: ${timeDisplay}`;
  displayTime();
}

displayTime();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://github.com/Benjtalkshow/HNG-TaskOne', '_blank');
});
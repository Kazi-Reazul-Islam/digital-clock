const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const sessionSpan = document.getElementById("session");

function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
  if (hours >= 12) {
    sessionSpan.innerHTML = "PM";
  } else {
    sessionSpan.innerHTML = "AM";
  }
}
setInterval(displayTime, 1000);
